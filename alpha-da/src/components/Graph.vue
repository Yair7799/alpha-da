<template>
  <div id="chart">
    <apexchart
    id='card'
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
  created: function () {
     this.$bus.on('changedGraph', (data) =>{
       let number =parseInt(data.value);
         var tag = document.createElement("p");
             var text = document.createTextNode(" .");
             text.style="color:white;"
            tag.appendChild(text);
       var element = document.getElementById("card");
         element.appendChild(tag);
        switch(data.picker){
        case "2021-06-04":
         this.series[1].data[0]=number;
        
 
               
            break;
        case "2021-06-05":
          this.series[1].data[1]=number;
                
            break;
        case "2021-06-06":
          this.series[1].data[2]=number;
                 
            break;
        case "2021-06-07":
          this.series[1].data[3]=number;
                 
            break;
        case "2021-06-08":
          this.series[1].data[4]=number;
                 
            break;
        case "2021-06-09":
          this.series[1].data[5]=number;
                
            break;
        case "2021-06-10":
          this.series[1].data[6]=number;
                   
            break;
           
        }
        } );

     
                     
        
  
  },
  
  data: function () {
    return {
     
      refresh:true,
      series: [
        {
          name: "אירועים חריגים",
          data: [0,0,0,0,0,0,0],
        },
        {
          name: "צפי",
          data: [1,4,2,6,7,2,2],
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
          text: "גרף אירועים חריגים",
          align: "center",
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
          min: 1,
          max: 7,
          title: {
            text: "יום",
          },
        },
        yaxis: {
          title: {
            text: "מספר איורעים",
          },
          min: 0,
          max: 20,
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
    const url =
      "http://tmz-2-backend-git-tmzapp2.apps.openforce.openforce.biz/security/dateEvents";
    let weekEventsMatrix = [];
    await fetch(`${url}/${startDate}/${endDate}`)
      .then((response) => response.json())
      .then((data) => {
        weekEventsMatrix = data;
      });

    let weekEventsArray = [];

    for (let index = 0; index < weekEventsMatrix.length; index++) {
      for (let innerI = 0; innerI < weekEventsMatrix[index].length; innerI++) {
        weekEventsArray.push(weekEventsMatrix[index][innerI]);
      }
    }

    let count = 0;
    this.series[0].data = [];
    let weekDates = [
      "2021-06-01",
      "2021-06-02",
      "2021-06-03",
      "2021-06-04",
      "2021-06-05",
      "2021-06-06",
      "2021-06-07",
    ];

    weekDates.forEach((day) => {
      weekEventsArray.forEach((event) => {
        if (day == event.date.slice(0, 10)) {
          count++;
        }
      });
      this.series[0].data.push(count);
      count = 0;
    });
  },
};
</script>

<style scoped>
#chart {
  background-color: white;
}
</style>
