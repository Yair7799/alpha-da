<template>
  <v-card outlined color="info" class="text-h6 mt-2" @click="activateDialog">
    {{ " • " + this.event.date.substr(11, 5) + ":    " + this.event.type }}
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="600"
    >
      <v-card style="direction: rtl">
        <v-toolbar color="primary" dark>פרטים נוספים</v-toolbar>
        <v-card-text>
          <div class="pa-4">
            <v-list dir="ltr">
              <v-list-item
                class="bigFont d-flex justify-end"
                v-for="(value, name, index) in this.eventData"
                :key="index"
                >{{ name }} : {{ value }}</v-list-item
              >
            </v-list>
          </div>
        </v-card-text>
        <v-card-actions class="justify-center whiteBackground">
          <v-btn outlined text @click="dialog = false">סגירה</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import eventDictionary from "../assets/eventDictionary.json";

export default {
  name: "EventDetailsCard",
  data: () => ({
    dialog: false
  }),
  props: {
    event: {
      type: Object
    }
  },
  computed: {
    eventData() {
      const basicReport = {
        תאריך: new Date(this.event.date).toLocaleDateString("en-GB"),
        "דווח על ידי": this.event.reported_by,
        'נ"צ': `(${this.event.lat},${this.event.lon})`
      };

      const extra = Object.fromEntries(
        Object.entries(eventDictionary[this.event.type]).map(([key, value]) =>
          key != "report_date"
            ? [value, this.event[key]]
            : [
                eventDictionary[this.event.type].report_date,
                new Date(this.event.report_date).toLocaleDateString("en-GB")
              ]
        )
      );

      return { ...basicReport, ...extra };
    }
  },
  methods: {
    activateDialog() {
      this.dialog = true;
    }
  }
};
</script>

<style>
.v-card {
  width: 100%;
  background-color: #a3a3a3 !important;
}

.v-card__text,
.whiteBackground {
  background-color: white !important;
}

.bigFont {
  font-size: 1.2rem;
}
</style>
