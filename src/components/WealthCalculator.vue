<template>
  <v-app class="container">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex v-for="(i,index) in formData" :key="`4${index}`" xs12 md4>
          <v-card>
            <v-container grid-list-md text-xs-center>
              <v-flex>
                <v-select color="#006344" v-model="i.type" :items="items" label="Item" required></v-select>
              </v-flex>
              <v-flex>
                <v-text-field color="#006344" v-model="i.value" label="Current Value" required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field color="#006344" v-model="i.appreciation" label="Appreciation %" required></v-text-field>
              </v-flex>
            </v-container>
          </v-card>
        </v-flex>
        <v-layout row wrap>
          <v-flex xs1>
            <!-- <v-card> -->
            <v-container grid-list-md text-xs-center>
              <v-btn @click="add" fab dark color="#006344">
                <v-icon dark>add</v-icon>
              </v-btn>
              <v-btn :disabled="!valid" @click="validate" fab dark color="red">
                <v-icon dark>favorite</v-icon>
              </v-btn>
            </v-container>
            <!-- </v-card> -->
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" width="600">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Your Wealth Grows at</v-card-title>

        <v-card-text>{{growthPercentage}}%</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#006344" flat align-center @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    dialog: false,
    growthPercentage: 0,
    increasedValue: 0,
    presentValue:0,
    formData: [{ type: "", value: "", appreciation: "" }],
    items: [
      "Property",
      "Bank Savings Account",
      "Bank FD/RD",
      "Mutual Funds",
      "Stocks"
    ],
    checkbox: false
  }),
  watch: {},
  methods: {
    add() {
      this.formData.push({ type: "", value: "", appreciation: "" });
      console.log(this.formData);
    },
    validate() {
      for (let i = 0; i < this.formData.length; i++) {
        let preIncreasedValue = this.formData[i].value * this.formData[i].appreciation;
        let tempPresentValue = parseInt(this.formData[i].value, 10)
        this.presentValue +=tempPresentValue;
        this.increasedValue += preIncreasedValue*0.01;
        this.growthPercentage = ((this.increasedValue/this.presentValue)*100).toFixed(3)
        console.log(this.presentValue);
      }
      this.dialog = true;
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theme--light.application {
  background: #ffffff !important;
}

.container.grid-list-md .layout .flex {
  padding: 15px;
}


</style>
