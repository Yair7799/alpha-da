<template>
  <v-card style="direction: rtl;" class="mx-auto mainCard" outlined >
    <v-list-item three-line class="d-flex mx-auto">
      <v-list-item-title class=""><h4>{{  "ציר אבטחתי: " + this.dayToDisplay }}</h4> </v-list-item-title>
      <v-dialog
        v-model="mapDialog"
        transition="dialog-bottom-transition"
        width="1550px"
        height="700px"
      >
        <div class="container">
          <iframe
            :src="`http://alpha-maps-yosef-read-only-tmzmap2.apps.openforce.openforce.biz/.`"
            width="1500x"
            height="500px"
            frameborder="0" >
           </iframe>
        </div>
      </v-dialog>
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
        reverse
        hide-details
      ></v-select>
    </v-list-item>

    <v-card-actions>
      <v-container class="scroll">
        <event-details-card
          v-for="(event, index) in eventsToDisplay"
          :key="index"
          :event="event"
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
    allEvents: [],
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
      "http://police-server-securityapp2.apps.openforce.openforce.biz/de/dateEvents/2021-01-01/2022-01-01"
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
  height: 141px;
}
</style>