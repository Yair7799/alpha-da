<template>
  <v-card style="direction: rtl" class="mx-auto mainCard" outlined color="info">
    <v-list-item three-line class="d-flex mx-auto">
      <v-list-item-title class="mb-1">{{  "ציר אבטחתי: " + this.dayToDisplay }} </v-list-item-title>
      <v-dialog
        v-model="mapDialog"
        transition="dialog-bottom-transition"
        max-width="600"
      ></v-dialog>
      <v-btn class="mx-2" @click="mapDialog = true" fab dark small color="primary">
        <v-icon dark> mdi-map </v-icon>
      </v-btn>
      <v-dialog
        v-model="calendarDialog"
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <v-card style="direction: rtl">
          <v-date-picker v-model="dayToDisplay"></v-date-picker>
          <v-card-actions class="justify-center">
            <v-btn outlined text @click="calendarDialog = false">סגירה</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="primary"
        @click="calendarDialog = true"
      >
        <v-icon dark> mdi-calendar </v-icon>
      </v-btn>
    </v-list-item>
    <v-list-item>
      <v-select
        class="select text-lg-left flex-row"
        append-icon=""
        :items="locations"
        label="אזור מוצג"
        solo
        hide-details
      ></v-select>
    </v-list-item>

    <v-card-actions>
      <v-container class="mb-2 scroll">
        <event-details-card
          v-for="(event, index) in eventsToDisplay"
          :key="index"
          :details="event.type"
          :time="event.date.substr(11, 5)"
        ></event-details-card>
      </v-container>
    </v-card-actions>
  </v-card>
</template>
<script>
import EventDetailsCard from "./EventDetailsCard.vue";
// import axios from "axios";

export default {
  components: { EventDetailsCard },
  name: "SecurityCard",
  data: () => ({
    mapDialog: false,
    calendarDialog: false,
    dayToDisplay: new Date().toISOString().substr(0, 10),
    locations: [
      "אזור נוכחי",
      "ברונקס",
      "ברוקלין",
      "מנהטן",
      "קווינס",
      "סטטן איילנד",
    ],
    allEvents: [
      {
        type: "חטיפה",
        date: "2021-06-06T00:00:00.000Z",
        lon: 31.111111,
        lat: 34.1111111,
      },
      {
        type: "תאונה",
        date: "2021-06-07T08:36:47.793Z",
        lon: 31.11111111,
        lat: 34.11111111,
      },
      {
        type: "ירי",
        date: "2021-06-08T08:38:48.925Z",
        lon: 31.12345,
        lat: 45.12345,
      },
      {
        type: "דקירה",
        date: "2021-06-08T08:42:41.059Z",
        lon: 21.4456,
        lat: 27.2236,
      },
    ],
  }),
  computed: {
    eventsToDisplay() {
      return this.allEvents.filter(
        (event) => event.date.substr(0, 10) === this.dayToDisplay
      );
    },
  },
  methods: {},
  mounted() {
    fetch(
      "http://police-server-securityapp2.apps.openforce.openforce.biz/de/events"
    ).then((response) => (response.json()))
    .then((data) => this.allEvents = data.flat(1));
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arimo&family=Heebo&display=swap");

.select {
  max-width: 35%;
}

.v-card,
.v-application {
  font-family: "Arimo", sans-serif !important;
}

.v-list-item__title {
  font-size: 2.2rem;
}
.v-list {
  direction: rtl !important;
}

.scroll {
  overflow-y: scroll;
  height: 200px;
}
</style>