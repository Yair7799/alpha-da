<template>
  <v-card
    class="mx-auto"
    max-width="450"
    height="300"
    outlined
    style="background-color:#E2DFDB; direction:rtl"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <h2>
          ציר מודיעיני
        </h2>
        <v-list-item-title class="text-h5 mb-1">
           <v-btn
        outlined
          style="height:25%; width:30%"      
      >
        חשודים
      </v-btn>
         <v-btn
        outlined
        style="height:25%; width:30%"

        
      >
        מבוקשים
      </v-btn>
        </v-list-item-title>
      
      </v-list-item-content>

   
    </v-list-item>

    <div style="margin-right:5%;  margin-top:2%; margin-left:8%;">

     <v-row style="padding-top:5px;">
        <v-col md="12" style="padding-top:1%">
     <div style="background-color:#070129" >
        <v-row>
       
            <v-img 
                style="border-radius:100%; margin-right:20px; margin-top:1%; margin-bottom:1%;"
                 max-height="90"
                 max-width="90"
                src="https://picsum.photos/id/11/500/300"
           ></v-img>
        <v-col>
        <p style="color:white; margin-bottom:0%; font-weight:bold" >גו'ן סמית </p>            
        <p style="color:#E7E7E7; margin-bottom:2%; font-weight:300; font-size:80%">0502234566 </p>

        </v-col>
        <v-col style="padding-left:25px">
    <v-btn
      tile
      color="success"
      style="margin-top:2%"
    > 
      מעבר לפרופיל
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
     
        </v-col>
        </v-row>
     </div>
     </v-col>
    </v-row>

    
    

    
    

    </div>
    
    
  </v-card>

</template>

<script>
  export default {
    name: 'intelj',

    data: () => ({}
    ),
  }
</script>
