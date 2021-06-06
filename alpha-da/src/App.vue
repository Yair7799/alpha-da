<template>
  <v-app>
    <v-app-bar
      app
      color="#64B5F6"
      dark
    >
      <div class="d-flex align-end">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="../images/ny.png"
          transition="scale-transition"
          width="40"
         
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

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.main_aria{
  background-color:
}
</style>
