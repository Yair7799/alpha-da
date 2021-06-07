<template>
  <v-container class=" lighten-5">
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        sm="5"
        md="6"
      >
       <intelj> </intelj>
      </v-col>
      <v-col
        sm="5"
        offset-sm="2"
        md="6"
        offset-md="0"
      >
      
        <v-card
          class="pa-2"
          outlined
          tile
        >
          .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        sm="6"
        md="5"
        lg="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          .col-sm-6 .col-md-5 .col-lg-6
        </v-card>
      </v-col>
      <v-col
        sm="6"
        md="5"
        offset-md="2"
        lg="6"
        offset-lg="0"
      >
       <events> </events>
      </v-col>
    </v-row>
    <graph />
    <pie />
  </v-container>
</template>

<script>
   import intelj from '../components/intelj.vue' 
 import envents from '../components/Events.vue' 
 import graph from '../components/Graph.vue'
 import pie from '../components/PieChart.vue'
  export default {
    name: 'MainPage',
    components:{
        intelj:intelj,
        events:envents,
        graph:graph,
        pie:pie
    },
    data: () => ({}
    ),
  }
</script>
