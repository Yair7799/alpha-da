<template>
  <v-card max-width="450" class="card" style="background-color:#101a30">
    <pie v-show="this.isGraph" class="pie"/>
    <graph v-show="!this.isGraph" />
    <v-row md="6">
      <v-col class="changebtn">
        <v-btn @click="changeIsGraph">גרף מבוקשים חשודים</v-btn>
      </v-col>
      <v-col class="eventbtn">
        <eventsest />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import graph from "./Graph.vue";
import pie from "./PieChart.vue";
import eventsest from "./EventsEst.vue";

export default {
  data: () => {
    return {
      isGraph: true,
    };
  },
  components: {
    graph: graph,
    pie: pie,
    eventsest: eventsest,
  },
  methods: {
    changeIsGraph() {
      this.isGraph = !this.isGraph;
    },
  },
};
</script>

<style scoped>
.card{
    margin-left: 24.5%;
}
.eventbtn{
    margin-top: 2%;
    margin-left: 25%
}
.changebtn{
    margin-top: 2%;
    margin-left: 1%
}
.pie{
    margin-left: 17%
}
</style>