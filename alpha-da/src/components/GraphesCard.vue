<template>
  <v-card>
    <graph v-if="isGraph == true" />
    <pie v-if="isGraph == false" />
    <v-btn v-on:click="chageIsGraph()">גרף מבוקשים חשודים</v-btn>
  </v-card>
</template>

<script>
import graph from "./Graph.vue";
import pie from "./PieChart.vue";

export default {
  data: () => {
    return {
      isGraph: true
    };
  },
  components: {
      graph:graph,
      pie:pie
  },
  methods: {
      chageIsGraph: () => {
          this.isGraph =! this.isGraph;
      }
  },
};
</script>
