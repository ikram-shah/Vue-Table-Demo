<template>
  <div id="app">
      <b-container>
    <br>
   <h1> Vue Table in Data Mode</h1>
    <p>Fetches data from this <a href="https://vuetable.ratiw.net/api/users">endpoint</a> </p>
    <vuetable
      ref="vuetable"
      :api-mode="false"
      :fields="fields"
      :data="data"
    >
    </vuetable>
      </b-container>
  </div>
</template>

<script>
import Vuetable from "vuetable-2";
import FieldDef from "@/components/DataSource/FieldDef.js";
import axios from "axios";

export default {
  name: "app",

  components: {
    Vuetable,
  },

  data() {
    return {
      fields: FieldDef,
      data: []
    };
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
