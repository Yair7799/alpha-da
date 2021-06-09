<template>
  <div id="chart">
    <apexchart
      type="line"
      height="235px"
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
          data: [1, 50],
        },
        {
          name: "צפי אירועים חריגים",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
  async mounted() {
    // const starFullDate = new Date();
    // let endFullDate = starFullDate;
    // if (endFullDate.getDate() < 7) {
    //   endFullDate = new Date(
    //     starFullDate.getFullYear(),
    //     starFullDate.getMonth() - 1,
    //     starFullDate.getDate() - 7
    //   );
    // } else if (starFullDate.getMonth() == 1) {
    //   endFullDate = new Date(
    //     starFullDate.getFullYear() - 1,
    //     starFullDate.getMonth() - 1,
    //     starFullDate.getDate() - 7
    //   );
    // } else {
    //   endFullDate = new Date(
    //     starFullDate.getFullYear(),
    //     starFullDate.getMonth(),
    //     starFullDate.getDate() - 7
    //   );
    // }
    // let startDate = `${starFullDate.getFullYear()}-${
    //   starFullDate.getMonth() + 1
    // }-${starFullDate.getDate()}`;
    // let endDate = `${endFullDate.getFullYear()}-${
    //   endFullDate.getMonth() + 1
    // }-${endFullDate.getDate()}`;

    const startDate = "2021-06-01";
    const endDate = "2021-06-08";
    const url = "http://localhost:8080/security/dateEvents";
    let weekEvents = [];
    await fetch(`${url}/${startDate}/${endDate}`)
      .then((response) => response.json())
      .then((data) => {
        weekEvents = data;
      });

    for (i = 0; i < 7; i++) {
       weekEvents.filter(
        (event) => event.date.substr(0, 10) === this.dayToDisplay
      );
    }
  },
};
</script>

<style scoped>
#chart {
  background-color: white;
}
</style>
