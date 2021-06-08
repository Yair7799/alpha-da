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
           :class="{active:isSuscpets}"
        outlined
          style="height:25%; width:30%"  
            
            :click="wanteds()"
             
      >
        חשודים
      </v-btn>
         <v-btn
         :class="{active:isReqested}"
        outlined
        style="height:25%; width:30%"
        :click="suspects()"     
      >
        מבוקשים
      </v-btn>
        </v-list-item-title>
      
      </v-list-item-content>

    </v-list-item>

     <div style="margin-right:5%;  margin-top:2%; margin-left:8%;">
     <v-row style="padding-top:5px; background-color:#070129" v-for="criminal in this.criminals" :key="criminal.SSN" >
            <v-img 
                style="border-radius:100%; margin-right:20px; margin-top:1%; margin-bottom:1%;"
                 max-height="60"
                 max-width="60"
                :src="criminal.imageURL"
           ></v-img>
        <v-col>
        <p style="color:white; margin-bottom:0%; font-weight:bold" >{{criminal.firstname}} </p>            
        <p style="color:#E7E7E7; margin-bottom:2%; font-weight:300; font-size:80%">{{criminal.SSN}} </p>

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
  


    
  </v-card>

</template>

<script>
     const axios = require('axios');
     const {adress} = require('../../prodAdress.json');
  export default {
    name: 'intelj',

    data() { return {
   
        criminals:[{'ilay':1}],
        isSuscpets: true,
        isReqested:false
    }
    },
      created: async function () {  
            this.criminals= await this.getsWanted();
    },
    methods: {
       async wanteds()  {
            this.isSuscpets = false;
            this.isReqested=true;
           //  this.criminals= await this.getsWanted();
        },
       async suspects () {
           
             this.isSuscpets = true;
            this.isReqested=false;
          //   this.criminals= await this.getSuspects();
       }

       , async getsWanted(){
              let all= await axios.get(adress+'/intelligence/all/suspectsRequested');
           return all.data.requested;
       }
       ,
       async getSuspects(){

           let all= await axios.get(adress+'/intelligence/all/suspectsRequested');
           return all.data.suspects;
       }
  },
    // watch: {
    // criminals: function () {
     
    // },
    // }
  }
</script>

<style scoped>
.active{
    background-color:grey;
}

</style>
