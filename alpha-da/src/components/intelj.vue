<template>
<div>

   <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="350"
      
     
    >

    <v-card
     v-if="dialog"
     
    
    style="background-color:#070129 !important;  "
    max-width="400"  
  >
  <div style="display: flex !important; 
  align-items: center !important; flex-direction: column; padding-top:15px;">
     <v-img         
                max-width="200px"       
                max-height="200px"
                style="border-radius:100%;"
                :src="currentCriminal[0].imageURL"
                v-if="dialog"
           ></v-img>
    
      
    <div >
    <v-card-title style="color:white" >
      {{currentCriminal[0].firstname}}  {{currentCriminal[0].lastname}}
     
    </v-card-title>
   
  
    </div>

    </div>
    <v-card-actions>
    

      <v-spacer></v-spacer>

    
    </v-card-actions>

 
  
        <v-divider></v-divider>

        <v-card-text style="color:white !important; background-color:#BC263F !important; direction:rtl  ">
        מספר בטחון סוציאלי:    {{currentCriminal[0].SSN}} 
            <br/>
        פלאפון:    {{currentCriminal[0].phoneNumber}} 
            <br/>
         כתובת:     {{currentCriminal[0].address}}
        </v-card-text>

         <v-card-text style="color:white !important; background-color:#7626BC !important; direction:rtl  ">
         <h3 style="padding-right:35%;  text-decoration: underline; padding-top:3px" > רישיון נהיגה </h3>
        התחלה:    {{currentCriminal[0].drivingLicense.start.slice(0,10)}} 
            <br/>
        סיום:    {{currentCriminal[0].drivingLicense.end.slice(0,10)}} 
            <br/>
         מספר רשיון:     {{currentCriminal[0].drivingLicense.status}}
        </v-card-text>

          <v-card-text style="color:white !important; background-color:green !important; direction:rtl ">
         <h3 style="padding-right:35%;  text-decoration: underline; padding-top:3px" >צווים ודוחות</h3>
         <div v-for="(report,index) in currentCriminal[0].reports" :key="index">
        תחילת תוקף:    {{report.startingDate.slice(0,10)}} 
            <br/>
        סיום תוקף:    {{report.expiredDate.slice(0,10)}} 
            <br/>
            </div>
     </v-card-text>
     

  </v-card>


    </v-dialog>

  <v-card
    class="mx-auto"
    max-width="500"
    height="300"
    outlined
    style="background-color:#E2DFDB; direction:rtl"
  
  >
    <v-list-item three-line>
      <v-list-item-content>
      
        <h1>
          ציר מודיעיני
        </h1>
        <v-list-item-title class="text-h5 mb-1">
           <v-btn
           :class="{active:!isSuscpets}"
        outlined
          style="height:25%; width:30%"  
            
            v-on:click="wanteds()"
             
      >
        חשודים
      </v-btn>
         <v-btn
         :class="{active:!isReqested}"
        outlined
        style="height:25%; width:30%"
        v-on:click="suspects()"     
      >
        מבוקשים
      </v-btn>
        </v-list-item-title>
      
      </v-list-item-content>

    </v-list-item>

     <div style="margin-right:5%;  margin-left:8%; " class="scroll">
     <v-row style="padding-top:15px;  border-bottom-style:solid; border-width: 1px; border-color:grey; width:100%; background-color:#070129" v-for="(criminal,index) in this.criminals" :key="index" >
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
      text @click="dialog = true, getCriminalDetails(criminal.SSN)"
    > 
      מעבר לפרופיל
      <v-icon dark>
          mdi-arrow-left
      </v-icon>
    </v-btn>
     
        </v-col>
        
    </v-row>
        </div>
  


    
  </v-card>

   


  </div>

</template>

<script>
     const axios = require('axios');
     
     const {adress} = require('../../prodAdress.json');
  export default {
    name: 'intelj',

    data() { return {
   
        criminals:[{'ilay':1}],
        isSuscpets: false,
        isReqested:true,
        apiAdress:'http://app-api-f-intelscraping2.apps.openforce.openforce.biz/profile/all/total',
         dialog: false,
         currentCriminal:{} }
    },
      created: async function () {  
         this.criminals = await this.getsWanted();
    },
    methods: {
       async wanteds()   {
            this.isSuscpets = false;
            this.isReqested=true;
            this.criminals= await this.getsWanted();
        },
       async suspects () {
           
             this.isSuscpets = true;
            this.isReqested=false;
             this.criminals= await this.getSuspects();
       }

       , async getsWanted(){
           let all= await axios.get(adress+'/intelligence/all/suspectsRequested');
           return all.data.requested;
       }
       ,
       async getSuspects(){

           let all= await axios.get(adress+'/intelligence/all/suspectsRequested');
           return all.data.suspects;
       },
       async getCriminalDetails(ssn) {
           let allDataArray= await axios.get(this.apiAdress);
           this.currentCriminal= allDataArray.data.filter(criminal => 
               (criminal.SSN === ssn)
           );
       }
  },
    watch: {
    criminals: function () {
    
    },
    }
  }
</script>

<style scoped>
.active{
    background-color:grey;
}

.scroll {
  overflow-y: scroll;
  height: 60%;
  width:95%;

  
}

</style>
