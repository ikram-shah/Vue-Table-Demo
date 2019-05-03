<template>
  <div id="app">
    <b-container>
      <h1>Special Field in Vue Table</h1>
      <p>__slot special field used in Email Column</p>
      <vuetable ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="fields">
        <template slot="email" scope="props">
          <a :href="`mailto:${props.rowData.email}`">{{props.rowData.email}}</a>
        </template>
      </vuetable>
    </b-container>
  </div>
</template>

<script>
import Vuetable from "vuetable-2";
import FieldDef from "@/components/DataSource/FieldDef.js";
import sampleData from "@/components/DataSource/SampleData.json";
import axios from "axios";

export default {
  name: "app",

  components: {
    Vuetable
  },

  data() {
    return {
      fields: [
        {
          name: "__checkbox",
          titleClass: "center aligned",
          dataClass: "center aligned"
        },
        {
          name: "name"
        },
        {
          name: "__slot:email",
          title: "Email"
        },
        {
          name: "birthdate",
          titleClass: "center aligned",
          dataClass: "center aligned"
          //   callback: 'formatDate|DD-MM-YYYY'
        },
        {
          name: "nickname",
          callback: "allcap"
        },
        {
          name: "gender",
          titleClass: "center aligned",
          dataClass: "center aligned",
          callback: "genderLabel"
        },
        {
          name: "salary",
          titleClass: "center aligned",
          dataClass: "right aligned"
          //   callback: 'formatNumber'
        }
      ],
      data: []
      //   data: sampleData,
    };
  },

  methods: {
    allcap(value) {
      return value.toUpperCase();
    },
    genderLabel(value) {
      return value === "M"
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>';
    }
  },

  mounted() {
    axios.get("https://vuetable.ratiw.net/api/users").then(response => {
      this.data = response.data.data;
    });
  }
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
