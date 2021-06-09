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

export default {
  name: "WeatherTable",
  components: { "date-weather": dateWeather },
  data() {
    return {
      temperature: 270,
      date: new Date(),
      temps: [
        {
          temp: 96.59,
          feels_like: 96.35,
          temp_min: 92.75,
          temp_max: 97.36,
          pressure: 1012,
          humidity: 52,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 60.59,
          feels_like: 60.35,
          temp_min: 60.75,
          temp_max: 60.36,
          pressure: 1012,
          humidity: 30,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 70.59,
          feels_like: 70.35,
          temp_min: 65.75,
          temp_max: 77.36,
          pressure: 900,
          humidity: 30,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 100.59,
          feels_like: 100.35,
          temp_min: 100.75,
          temp_max: 100.36,
          pressure: 1012,
          humidity: 80,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 70.59,
          feels_like: 70.35,
          temp_min: 65.75,
          temp_max: 277.36,
          pressure: 900,
          humidity: 30,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 51.59,
          feels_like: 51.35,
          temp_min: 51.75,
          temp_max: 41.36,
          pressure: 1012,
          humidity: 15,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 90.59,
          feels_like: 90.35,
          temp_min: 90.75,
          temp_max: 90.36,
          pressure: 1024,
          humidity: 40,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 60.59,
          feels_like: 60.35,
          temp_min: 60.75,
          temp_max: 60.36,
          pressure: 1012,
          humidity: 97,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 80.59,
          feels_like: 80.35,
          temp_min: 75.75,
          temp_max: 85.36,
          pressure: 1012,
          humidity: 30,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 68.59,
          feels_like: 68.35,
          temp_min: 63.75,
          temp_max: 68.36,
          pressure: 1012,
          humidity: 30,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 70.59,
          feels_like: 70.35,
          temp_min: 65.75,
          temp_max: 77.36,
          pressure: 1012,
          humidity: 30,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 70.59,
          feels_like: 70.35,
          temp_min: 65.75,
          temp_max: 77.36,
          pressure: 1012,
          humidity: 100,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 70.59,
          feels_like: 70.35,
          temp_min: 65.75,
          temp_max: 77.36,
          pressure: 1012,
          humidity: 70,
          sea_level: 1012,
          grnd_level: 924
        },
        {
          temp: 70.59,
          feels_like: 70.35,
          temp_min: 65.75,
          temp_max: 77.36,
          pressure: 1012,
          humidity: 80,
          sea_level: 1012,
          grnd_level: 924
        }
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
