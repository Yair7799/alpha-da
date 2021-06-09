<template>
<div class="ml-3">
  <v-row>
    <div class="mr-1">
      <v-card dir="rtl" class="width fullHeight">
        <v-card-title>
          אירועים ומועדים
        </v-card-title>
        <v-card-actions>
          <v-list rounded >
            <v-list-item
              v-for="event in this.currMonthEvents"
              :key="event.name"
              class="d-flex justify-center"
            >
              {{ event.date + " • " + event.name }}</v-list-item
            >
          </v-list>
        </v-card-actions>
      </v-card>
    </div>
    <div>
      <v-date-picker
      no-title
      class="tall"
        ref="datePicker"
        v-model="currDate"
        :events="eventsToDisplay"
        no-title
        readonly
      ></v-date-picker>
    </div>
    
  </v-row>
  </div>
</template>
<script>
import axios from "axios";
const { adress } = require("../../prodAdress.json");

export default {
  name: "Calendar",
  data: () => ({
    currDate: new Date().toISOString().substr(0, 10),
    events: [],
    currMonthYear: "",
    wasMounted: false
  }),

  methods: {
    eventsToDisplay(date) {
      if (this.eventsDates.includes(date)) return ["#101a3e"];
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
    axios
      .get(adress + "/weatherDates/dates")
      .then(res => (this.events = res.data));
  },

  computed: {
    eventsDates() {
      return this.events.map(event => {
        return event.date;
      });
    },
    currMonthEvents: function() {
      const noEventsArray = [{ name: "אין אירועים החודש", date: "" }];
      let currMonthYear = "";
      if (this.wasMounted) {
        currMonthYear = this.$refs.datePicker.tableDate;
      } else {
        currMonthYear = this.currMonthYear;
      }
      const currMonthEvents = this.events.filter(event =>
        event.date.includes(currMonthYear)
      );
      return currMonthEvents.length ? currMonthEvents : noEventsArray;
    }
  }
};
</script>

<style scoped>
.round {
  border-radius: 70%;
}

.v-list {
  background-color: #a3a3a3;
}

.width {
  width: 430px;
  height: 328px;
}

.tall {
  height: 312px
}

.fullHeight {
  height: 312px;
}
</style>
