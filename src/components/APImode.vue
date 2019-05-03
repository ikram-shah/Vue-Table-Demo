<template>
  <div id="app">
    <b-container>
      <h1>Vue Table in API Mode</h1>
      <p>
        Fetches data from this
        <a href="https://vuetable.ratiw.net/api/users">endpoint</a>
      </p>
      <vuetable
        ref="vuetable"
        api-url="https://vuetable.ratiw.net/api/users"
        :fields="['name', 'email', 'birthdate']"
      />
    </b-container>
  </div>
</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";

export default {
  components: {
    Vuetable
  }
};
</script>