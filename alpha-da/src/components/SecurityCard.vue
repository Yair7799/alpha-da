<template>
<v-card style="direction:rtl"
    class="mx-auto mainCard"
    outlined
    color="info"
  >
    <v-list-item three-line class="d-flex mx-auto">
        <v-list-item-title  class="mb-1">
          ציר אבטחתי
        </v-list-item-title>
        <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
    >
      <v-icon dark>
        mdi-map
      </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
    >
      <v-icon dark>
        mdi-calendar
      </v-icon>
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
        <v-container>
            <event-details-card class="mb-2" v-for="event in eventsToDisplay" :key="event" :details="event.details" :time="event.time"></event-details-card>
        </v-container>

      
    </v-card-actions>
  </v-card>
    
</template>
<script>
import EventDetailsCard from './EventDetailsCard.vue';

  export default {
  components: { EventDetailsCard },
      name: 'SecurityCard',
      data: () => ({
      locations: ['אזור נוכחי', 'ברונקס', 'ברוקלין', 'מנהטן', 'קווינס', 'סטטן איילנד'],
      }),
      computed: {
          eventsToDisplay() {
              return [{
                  details : "אירוע חשוד",
                  time : "13:00"
              },
              {
                  details: `אירוע חשוד מאוד`,
                  time: "14:55"
              }]
          }

      }

      ,
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Arimo&family=Heebo&display=swap');

.select {
 max-width: 35%;
}

.v-card, .v-application {
font-family: 'Arimo', sans-serif !important;
}

.v-list-item__title {
    font-size: 2.2rem;
}
.v-list {
    direction: rtl !important;
}

</style>