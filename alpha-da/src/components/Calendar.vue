<template>
  <v-row>
    <div>
      <v-card dir="rtl" class="halfWidth fullHeight">
        <v-card-title>
            אירועים נוספים
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

      
    }),
   
    methods: {
     eventsToDisplay (date) {
        if (this.eventsDates.includes(date)) return ['#101a3e']
      },
      getCurrMonthAndYear() {
        return this.$refs.datePicker.tableDate;
      }
    },

    computed: {
      currMonthEvents: function() {
        const currMonth = this.getCurrMonthAndYear();
        return this.events.filter((event) => event.date.includes(currMonth))
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

.fullHeight {
  height: 100%;
}
</style>