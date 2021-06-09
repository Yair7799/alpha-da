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
            <v-list-item class="bigFont" v-for="(value, name, index) in this.event" :key="index">{{ name }}  :  {{ value }}</v-list-item>
            </v-list></div>
        </v-card-text>
        <v-card-actions class="justify-center whiteBackground">
          <v-btn outlined text @click="dialog = false">סגירה</v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "EventDetailsCard",
  data: () => ({
    dialog: false,
  }),
  props: {
    event: {
      type: Object
    }
  },
  methods: {
    activateDialog() {
      this.dialog = true;
    },
  },
};
</script>

<style >
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