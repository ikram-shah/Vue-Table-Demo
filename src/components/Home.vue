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

          <b-card title="Vuetable-2 Tutorial" tag="article" class="col-lg-3 col-sm-6 pad">
            <b-card-text>This is seriosly awesome if you starting with Vue!</b-card-text>
            <b-button href="https://github.com/ratiw/vuetable-2-tutorial/wiki" variant="primary">GO</b-button>
          </b-card>

          <b-card title="Codepen of Creator" tag="article" class="col-lg-3 col-sm-6 pad">
            <b-card-text>Get more Vuetable-2 reference projects/ pens here!</b-card-text>
            <b-button href="https://codepen.io/ratiw/" variant="primary">GO</b-button>
          </b-card>

           <b-card title="Slide Deck" tag="article" class="col-lg-3 col-sm-6 pad">
            <b-card-text>Visit the Slide Deck Presented in the VueConf.</b-card-text>
            <b-button href="https://drive.google.com/file/d/1LtwggCo1_Cyg1zXB1LLbif_nfpXroDbN/view?usp=sharing" download="VueTable" variant="primary">GO</b-button>
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

      <hr>

 <h2>Post Conference</h2>

<p> Thank you <a class="twt" href="https://twitter.com/znck0">@Rahul</a> & <a class="twt" href="https://twitter.com/SwapAgarwal">@Swapnil</a> for organizing this wonderful conference. It was a great experience and learning </p>


      <div class="row text-center"  >
        <Tweet class="col-lg-4 col-sm-6" id="1124623360787238913"></Tweet>
          <Tweet class="col-lg-4 col-sm-6" id="1124624771969196032"></Tweet>
         <Tweet class="col-lg-4 col-sm-6" id="1124650843800621056"></Tweet>
        
    
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

export default {
  components: {
    Tweet
  },
  
}
</script>


<style>
.card-body {
  color: black;
}

.pad {
  margin: 10px;
}

.twt{
  color: white;
}
</style>

