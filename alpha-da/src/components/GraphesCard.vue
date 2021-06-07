<template>
  <v-card>
    <template v-if="this.isGraph"> <graph /> </template>
    <template v-else><pie /></template>
    <v-btn @click="chageIsGraph">גרף מבוקשים חשודים</v-btn>
  </v-card>
</template>

<script>
import graph from "./Graph.vue";
import pie from "./PieChart.vue";

export default {
  data: () => {
    return {
      isGraph: true,
    }
  },
  components: {
    graph: graph,
    pie: pie,
  },
  methods: {
    chageIsGraph() {
        this.isGraph = !this.isGraph;
    },
  },
};
</script>
