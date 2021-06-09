<template>
  <v-app>
    <v-app-bar app color="#658cc5" dark>
     
      <div class="d-flex align-end">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="../images/ny.png"
          transition="scale-transition"
          width="50"
        />

        <h5
          alt="ny Name"
          style="color:black"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          width="80"
        >
          NY POLICE DEPARTMENT
        </h5>
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="logout()" rounded color="secondary" class="mr-4" dark>התנתק</v-btn>

      <v-img
        alt="brain"
        class="shrink"
        contain
        src="../images/brain.jpg"
        transition="scale-transition"
        width="150"
      />
    </v-app-bar>
    <v-main style="background-color:#101a30">
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>
<script>
import userService from "./userService";
import router from "./router";


export default {
  name: "App",
  data: () => ({
  }),
  methods: {
    logout() {
      userService.logout();
      router.push({ name: "login" });
    }
  }
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');
#app {
    font-family: 'Arimo', sans-serif !important;
}

html, body {margin: 0; height: 100%; overflow: hidden}
</style>

