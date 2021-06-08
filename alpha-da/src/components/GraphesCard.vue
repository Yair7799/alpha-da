<template>
  <v-card max-width="450" class="ml-5">
    <!-- <template v-if="this.isGraph"> <pie /> </template>
    <template v-else><graph /></template> -->
    <pie v-show="this.isGraph" />
    <graph v-show="!this.isGraph" />
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
    };
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
