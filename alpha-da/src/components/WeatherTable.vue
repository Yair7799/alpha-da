<template>
  <v-row>
    <date-weather
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
import axios from "axios";
const { adress } = require("../../prodAdress.json");

export default {
  name: "WeatherTable",
  components: { "date-weather": dateWeather },
  data() {
    return {
      temperature: 270,
      date: new Date(),
      temps: []
    };
  },
  mounted() {
    axios
      .get(adress + "/weatherDates/weather")
      .then(res => (this.temps = res.data));
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
