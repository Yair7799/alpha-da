<template>
  <v-row>
    <date-weather
    class="ml-5"
      v-for="(temp, index) in temps"
      :key="index"
      :temperature="temp.temp"
      :humidity="temp.humidity"
      :pressure="temp.pressure"
      :date="decreaseDays(index)"
    >
    </date-weather>
  </v-row>
</template>
<script>
import dateWeather from "./DateWeather";

export default {
  name: "WeatherTable",
  components: { "date-weather": dateWeather },
  data() {
    return {
      temperature: 270,
      date: new Date(),
      temps: [
        { temp: 0, pressure: 1012, humidity: 30 },
        { temp: 3, pressure: 1012, humidity: 95 },
        { temp: 2, pressure: 1000, humidity: 40 },
        { temp: 80, pressure: 1012, humidity: 30 },
        { temp: 2, pressure: 1012, humidity: 95 },
        { temp: 2, pressure: 1000, humidity: 40 },
        { temp: 80, pressure: 1012, humidity: 30 },
        // { temp: 270, pressure: 1012, humidity: 95 },
        // { temp: 270, pressure: 1000, humidity: 40 },
        // { temp: 80, pressure: 1012, humidity: 30 },
        // { temp: 270, pressure: 1012, humidity: 95 },
        // { temp: 270, pressure: 1000, humidity: 40 },
        // { temp: 80, pressure: 1012, humidity: 30 },
        // { temp: 270, pressure: 1000, humidity: 40 }
      ]
    };
  },
  methods: {
    decreaseDays(days) {
      const result = new Date(this.date);
      result.setDate(result.getDate() - days);
      return result;
    }
  }
};
</script>
