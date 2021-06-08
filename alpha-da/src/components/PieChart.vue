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
      series: [44, 55],
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
};
</script>
