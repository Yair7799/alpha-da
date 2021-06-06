<template>

  <v-app>
    <v-app-bar
      app
      color="#658cc5"
      dark
    >
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

       
        <v-img
          alt="brain"
          class="shrink mr-2"
          contain
          src="../images/brain.jpg"
          transition="scale-transition"
          width="150"
         
        />
    
    </v-app-bar>

    <v-main style="background-color:#101a30">
      
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
</style>
