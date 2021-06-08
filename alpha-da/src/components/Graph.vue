<template>
  <div id="chart">
    <apexchart
      type="line"
      height="350vh"
      :options="chartOptions"
      :series="series"
      width="100%"
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
      series: [
        {
          name: "אירועים חריגים",
          data: [1,50]
        },
        {
          name: "צפי אירועים חריגים",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Average High & Low Temperature",
          align: "left",
        },
        grid: {
          borderColor: "white",
          row: {
            colors: ["#101a30", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          min: 0,
          max: 12,
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 0,
          max: 500,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  },
  mounted() {
    const starFullDate = new Date();
    const endFullDate = starFullDate;
    let startDate = `${starFullDate.getFullYear()}-${starFullDate.getMonth()+1}-${starFullDate.getDate()}`
    let endDate;
    // let endDate = `${endFullDate.getFullYear()}-${endFullDate.getMonth()+1}-${endFullDate.getDate()}`
    if(endFullDate.getDate() > 7){
      endDate = `${endFullDate.getFullYear()}-${endFullDate.getMonth()+1}-${endFullDate.getDate()}`
    } else if(endFullDate.getDate())
    alert("startDate: " + startDate + "endDate:" + endDate)
  }
};
</script>

<style scoped>
#chart {
  background-color: white;
}
</style>
