<template>
  <div>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="600"
    >
      <v-card>
        <v-row justify="center">
          <v-date-picker v-model="picker"></v-date-picker>
        </v-row>

        <v-text-field label="מס' צפוי של אירועים" v-model="value"></v-text-field>

        <v-card-actions>
          <v-btn outlined text @click="dialog = false , addToChart()">פרסם</v-btn>
        </v-card-actions>
      </v-card></v-dialog
    >

    <v-btn @click="dialog = !dialog" style="float:right; border-radius:20px; margin-right:20px; background-color:purple; color:white">הגדר רף</v-btn>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dialog: false,
      picker: new Date().toISOString().substr(0, 10),
      value:0,
    };
  },
  methods: {
    addToChart() {
         this.$bus.emit('changedGraph',{"picker":this.picker, "value":this.value});

    },
  },
};
</script>