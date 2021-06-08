<template>
  <v-row>
    <div>
      <v-card dir="rtl" class="width fullHeight">
        <v-card-title>
            אירועים ומועדים
        </v-card-title>
        <v-card-actions>
            <v-list>
            <v-list-item v-for="event in this.currMonthEvents" :key="event.name"> {{"• " + event.date + ":  " + event.name }}</v-list-item>
            </v-list>

        </v-card-actions>
    </v-card>
    </div>
    <div>
      <v-date-picker
      ref="datePicker"
        v-model="currDate"
        :events="eventsToDisplay"
      ></v-date-picker>
    </div>
  </v-row>
</template>
<script>
import datesData from '../db/dates.json';
 
  export default {
    name: "Calendar",
    data: () => ({
      currDate: new Date().toISOString().substr(0, 10),
      events : datesData,
      eventsDates : datesData.map((event) => {return event.date}),
      currMonthYear: "",
      wasMounted: false,
    }),
   
    methods: {
     eventsToDisplay (date) {
        if (this.eventsDates.includes(date)) return ['#101a3e']
      },
      getCurrMonthAndYear() {
        const currMonthYear = this.$refs.datePicker.tableDate;
        if (currMonthYear) {
          return currMonthYear;
        }
      }
    },

    mounted: function() {
      this.currMonthYear = this.$refs.datePicker.tableDate;
      this.wasMounted = true;
    },

    computed: {
      currMonthEvents: function() {
        let currMonthYear = "";
        if(this.wasMounted) {
           currMonthYear = this.$refs.datePicker.tableDate;
        
        } else {
          currMonthYear = this.currMonthYear
        }
        return this.events.filter((event) => event.date.includes(currMonthYear))
      }
    }
  }
  
</script>

<style scoped>
.round {
  border-radius: 70%;
}

.v-list {
    background-color: #c4c4c4;
}

.width {
  width: 450px;
  height: 100%
}
</style>