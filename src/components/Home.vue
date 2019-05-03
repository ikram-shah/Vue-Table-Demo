<template>
  <div>
    <b-jumbotron bg-variant="primary" text-variant="white" border-variant="dark">
      <template slot="header">An Awesome Vue.js Conference 🎉</template>
      <hr class="my-4">

      <h2>Vuetable-2 | Important Links</h2>

      <b-container class="text-center" fluid>
        <div class="d-flex justify-content-center row">
          <b-card title="Official Website" tag="article" class="col-lg-3 col-sm-6 pad">
            <b-card-text>Visit the Official website of Vuetable-2 Datatable Simplified!</b-card-text>
            <b-button href="https://www.vuetable.com/" variant="primary">GO</b-button>
          </b-card>

          <b-card title="Official Git Repo" tag="article" class="col-lg-3 col-sm-6 pad">
            <b-card-text>Visit the Official Github Repository of Vuetable-2</b-card-text>
            <b-button href="https://www.vuetable.com/" variant="primary">GO</b-button>
          </b-card>

          <b-card title="Vuetable-2 Tutorial" tag="article" class="col-lg-3 col-sm-6 pad">
            <b-card-text>This is seriosly awesome if you starting with Vue!</b-card-text>
            <b-button href="https://github.com/ratiw/vuetable-2-tutorial/wiki" variant="primary">GO</b-button>
          </b-card>

          <b-card title="Codepen of Creator" tag="article" class="col-lg-3 col-sm-6 pad">
            <b-card-text>Get more Vuetable-2 reference projects/ pens here!</b-card-text>
            <b-button href="https://codepen.io/ratiw/" variant="primary">GO</b-button>
          </b-card>

          <b-card title="Repo of this website" tag="article" class="col-lg-3 col-sm-6 pad">
            <b-card-text>This demo website's Github Repository!</b-card-text>
            <b-button href="https://github.com/ikram-shah/vue-table-demo" variant="primary">GO</b-button>
          </b-card>

          <b-card
            title="Credits to the Creator Ratiw & the open source community"
            tag="article"
            class="col-lg-3 col-sm-6 pad"
          >
            <h1>❤️</h1>
          </b-card>
        </div>
      </b-container>
    </b-jumbotron>
  </div>
</template>

<style>
.card-body {
  color: black;
}

.pad {
  margin: 10px;
}
</style>

