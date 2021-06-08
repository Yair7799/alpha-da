<template>
  <div id="chart">
    <apexchart
      type="pie"
      width="380"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      series: [0, 0],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["מבוקשים", "חשודים"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    fetch(
      "http://tmz-2-backend-git-tmzapp2.apps.openforce.openforce.biz/intelligence/number/suspectsRequested"
    )
      .then((response) => response.json())
      .then((data) => (this.series = [data.suspects, data.requested]));
  },
};
</script>
