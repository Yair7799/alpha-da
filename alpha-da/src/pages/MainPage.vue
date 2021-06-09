<template>
  <v-container class="lighten-5" align-content="strech">
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
      <v-col  cols="5" class="ml-10" align-content="strech">
        <calendar class="mt-3"></calendar>
      </v-col>
    </v-row>
    <div style="justify-content: center;" class="mt-16">
        <weather-table class="size" ></weather-table>
</div>
    
        <v-btn @click="logout()" rounded color="primary" dark>התנתק</v-btn>

  </v-container>
</template>

<script>
import intelj from "../components/intelj.vue";
import Calendar from "../components/Calendar.vue";
import securityCard from "../components/SecurityCard.vue";
import graphes from "../components/GraphesCard.vue";
import router from "../router";
import userService from "../userService";
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
  methods: {
    logout() {
      userService.logout();
      router.push({ name: "login" });
    }
  }
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
  width: 70wh;
  justify-content: center;
}

html, body {margin: 0; height: 100%; overflow: hidden}


</style>
