<template>
  <v-container class=" lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col sm="5" md="6">
        <intelj> </intelj>
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
        <security></security>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col sm="6" md="6" lg="6" class="halfWidth">
        <graphes />
      </v-col>
      <v-col sm="6" md="6" offset-md="2" lg="6" offset-lg="0">
        <calendar></calendar>
      </v-col>
      <v-col>
        <v-btn @click="logout()" rounded color="primary" dark>התנתק</v-btn>
      </v-col>
    </v-row>
    <footer>
      <weather-table></weather-table>
    </footer>
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

<style scoped></style>
