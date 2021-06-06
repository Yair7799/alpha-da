<template>
<v-card style="direction:rtl"
    class="mx-auto mainCard"
    max-width="800"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title  class="text-h3 mb-1">
          ציר אבטחתי
        </v-list-item-title>
        <v-select
       
        class="select text-lg-left flex-row"
        dir="rtl"
        reverse
         :items="items"
          label="אזור מוצג"
          solo
        ></v-select>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
    
</template>
<script>
  export default {
      name: 'SecurityCard',
      data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');


.select {
 max-width: 50%;
}

.v-select.v-text-field--reverse .v-select__slot, .v-select.v-text-field--reverse .v-select__selections {
    flex-direction: row !important;
}

</style>