<template>
  <div id="date-weather">
    <v-row>
      <span>{{ this.date.toLocaleDateString("en-GB") }}</span>
    </v-row>
    <v-row class="d-flex flex-flex-nowrap">
      <v-col>
        <v-img :src="getImgUrl(this.image)" />
      </v-col>
      <v-col>
        <span>{{ this.temperatureCelsius }}</span>
      </v-col>
    </v-row>
  </div>
</template>
<script>
const weatherImages = {
  unavailable: "unavailable",
  cloud: "cloud",
  sun: "sun",
  windy: "windy",
  cloudy: "cloudy",
  raining: "raining"
};

export default {
  name: "DateWeather",
  data() {
    return {
      image: weatherImages.unavailable
    };
  },
  props: {
    temperature: Number,
    date: Date
  },
  computed: {
    temperatureCelsius() {
      return ((this.temperature - 32) * 5) / 9;
    }
  },
  methods: {
    getImgUrl(pic) {
      const images = require.context("../../images/weather/", false, /\.png$/);
      return images("./" + pic + ".png");
    }
  }
};
</script>
<style scoped>
#date-weather {
  background-color: lightgray;
  width: 14%;
}
</style>
