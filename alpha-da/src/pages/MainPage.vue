<template>
  <v-container class="lighten-5 center"  align-content="strech">
    <v-row class="mb-6 row1" justify="center" >
      <v-col cols="5">
        <intelj> </intelj>
      </v-col>
      <v-col cols="5" class="" align-content="strech">
        <security></security>
      </v-col>
    </v-row>
    <v-row class="mb-6 row1" justify="center">
      <v-col cols="5" align-content="strech">
        <graphes />
      </v-col>
      <v-col  cols="5"  align-content="strech">
        <calendar class="mt-3"></calendar>
      </v-col>
    </v-row>
    <v-row  class="mt-13 row1 ">
    <v-col cols="1">
     </v-col>
    <v-col cols="10">
            <weather-table  ></weather-table>
</v-col>
    </v-row>
    
       

  </v-container>
</template>

<script>
import intelj from "../components/intelj.vue";
import Calendar from "../components/Calendar.vue";
import securityCard from "../components/SecurityCard.vue";
import graphes from "../components/GraphesCard.vue";
import weatherTable from "../components/WeatherTable";

export default {
  name: "MainPage",
  components: {
    intelj: intelj,
    calendar: Calendar,
    security: securityCard,
    graphes: graphes,
    "weather-table": weatherTable
  },
  data: () => ({}),
  
};
</script>

<style scoped>

.maxHeight {
  height:15% !important;
}

.row1 {
  height: 300px;
}

.size {
  width: 80%;
  justify-content: center;
}

html, body {margin: 0; height: 100%; overflow: hidden}


.center {
  justify-content: center;
  
}
</style>
