<template>
  <v-card id="date-weather" class="mx-auto" width="14%" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80">
        <v-img style="width:100%" :src="getImgUrl(this.image)"/>
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{ this.date.toLocaleDateString("en-GB") }}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ this.displayTemperatureCelsius }}&deg;C
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
<script>
const weatherImages = {
  unavailable: "unavailable",
  cloud: "cloud",
  sun: "sun",
  windy: "windy",
  cloudyWithSun: "cloudy",
  raining: "raining"
};

export default {
  name: "DateWeather",
  props: {
    temperature: Number,
    humidity: Number,
    pressure: Number,
    date: Date
  },
  computed: {
    displayTemperatureCelsius() {
      return (((this.temperature - 32) * 5) / 9).toFixed(0);
    },
    image() {
      return [this.pressure, this.humidity, this.temperature].some(
        el => typeof el === undefined
      )
        ? weatherImages.unavailable
        : this.humidity > 90
        ? weatherImages.raining
        : this.displayTemperatureCelsius > 24
        ? weatherImages.sun
        : this.pressure < 1000
        ? weatherImages.windy
        : this.humidity > 40
        ? weatherImages.cloud
        : weatherImages.cloudyWithSun;
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
  margin: 2px;
}
</style>
