<template>
  <div id="app">
  
     <b-nav tabs align="center">
      <b-nav-item active-class="active">
         <router-link class="nav-item" to="/apiMode">API Mode</router-link>
      </b-nav-item>

       <b-nav-item active-class="active">
         <router-link class="nav-item" to="/DataMode">Data Mode</router-link>
      </b-nav-item>

       <b-nav-item active-class="active">
         <router-link class="nav-item" to="/CustomizeField">Customize Field</router-link>
      </b-nav-item>

      <b-nav-item active-class="active">
         <router-link class="nav-item" to="/SpecialField">Special Field</router-link>
      </b-nav-item>

      <b-nav-item active-class="active">
         <router-link class="nav-item" to="/Sorting">Sorting</router-link>
      </b-nav-item>

      <b-nav-item active-class="active">
         <router-link class="nav-item" to="/Pagination">Pagination</router-link>
      </b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

a .router-link-active {
    font-weight: 900; 
}
</style>
