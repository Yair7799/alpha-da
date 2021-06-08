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

        <v-text-field label="מס' צפוי של אירועים"></v-text-field>

        <v-card-actions>
          <v-btn outlined text @click="dialog = false">פרסם</v-btn>
        </v-card-actions>
      </v-card></v-dialog
    >

    <v-btn @click="dialog = !dialog">הגדר רף</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      picker: new Date().toISOString().substr(0, 10),
    };
  },
};
</script>