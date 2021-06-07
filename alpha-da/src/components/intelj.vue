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

    <div style="margin-right:5%; margin-left:8%; ">

     <v-row >
        <v-col md="12" style="padding-top:1%">
     <div style="background-color:#070129" >
        <v-row>
       
            <v-img
                style="padding-right:5%"
                 max-height="148"
                 max-width="100"
                src="https://picsum.photos/id/11/500/300"
           ></v-img>
        <v-col>
        <p style="color:white; margin-bottom:0%;" >גו'ן סמית </p>            
        <p style="color:#E7E7E7; margin-bottom:2%;">0502234566 </p>
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
