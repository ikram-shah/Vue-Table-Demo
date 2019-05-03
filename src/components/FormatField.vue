<template>
  <div id="app">
      <b-container>
   <h1> Formatting Field in Vue Table</h1>
    <p><strong>Nickname</strong> and <strong> Gender </strong> column and modified  </p>
    <vuetable
      ref="vuetable"
      :api-mode="false"
      :fields="fields"
      :data="data"
    />
      </b-container>
  </div>
</template>

<script>
import Vuetable from "vuetable-2";
import FieldDef from "@/components/DataSource/FieldDef.js";
import sampleData from '@/components/DataSource/SampleData.json'
import axios from "axios";

export default {
  name: "app",

  components: {
    Vuetable,
  },

  data() {
    return {
      fields: [
        {
          name: '__checkbox',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        },
        {
          name: 'name',
        }, 
        {
          name: 'email',
        },
        {
          name: 'birthdate',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
        },
        {
          name: 'nickname',
          callback: 'allcap'
        },
        {
          name: 'gender',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
          callback: 'genderLabel'
        },
        {
          name: 'salary',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
        }],
      data: [],
    };
  },

  methods: {
    allcap (value) {
      return value.toUpperCase()
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
    }
  },

  watch: {
    data(newVal, oldVal) {
      this.$refs.vuetable.refresh();
    }
  },

  mounted() {
    axios.get("https://vuetable.ratiw.net/api/users").then(response => {
      this.data = response.data.data;
    });
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
button.ui.button {
  padding: 8px 3px 8px 10px;
  margin-top: 1px;
  margin-bottom: 1px;
}
</style>
