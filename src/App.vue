<template>
  <div id="app">
    <v-toolbar class="toolbar-deco hidden-sm-and-down">
      <v-toolbar-title>
        <router-link class="nav-item" to="/"><img src="@/assets/logo.png"/></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat="flat">
          <router-link class="nav-item" to="/">Home</router-link>
        </v-btn>
        <v-btn flat="flat">
          <router-link class="nav-item" to="/about">About</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="hidden-md-and-up">
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header" class="toolbar-deco">
            <router-link class="nav-item" to="/"><img src="@/assets/logo.png"/></router-link>
          </div>
          <v-card>
            <router-link class="nav-item" to="/">
              <v-card-text>Home</v-card-text>
            </router-link>
          </v-card>
          <v-card>
            <router-link class="nav-item" to="/about">
              <v-card-text>About</v-card-text>
            </router-link>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
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

.toolbar-deco a{
  text-decoration: none;
  color: black !important;
}

.toolbar-deco a img{
  max-width: 250px;
}

.v-toolbar__content, .v-expansion-panel__header{
 background-color: #dad8db;
}
</style>
