<template>
<div>
    <v-row>
      <date-weather
        v-for="(temp, index) in temps"
        :key="index"
        :temperature="temp.temp"
        :date="decreaseDays(index)"
      >
      </date-weather>
    </v-row>
  </div>
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
      temps: [{ temp: 270 }, { temp: 270 }]
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
