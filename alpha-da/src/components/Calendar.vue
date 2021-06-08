<template>
  <v-row>
    <div>
      <v-date-picker
        v-model="date2"
        :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
        :events="functionEvents"
      ></v-date-picker>
    </div>
  </v-row>
</template>
<script>
 
  export default {
    name: "Calendar",
    data: () => ({
      today: '2019-01-10',
      date2: new Date().toISOString().substr(0, 10),

      
    }),
   
    methods: {
     functionEvents (date) {
        const [,, day] = date.split('-')
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['#101a3e']
      },
    }
  }
  
</script>

<style scoped>
.round {
  border-radius: 70%;
}
</style>