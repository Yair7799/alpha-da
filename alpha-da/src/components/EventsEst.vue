<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
    <v-card
  outlined
  class="text-h6"
  @click="dialog = !dialog">

<v-dialog
    v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="600"
>
<v-card  >
 
            
            <v-row justify="center">
                <v-date-picker v-model="picker"></v-date-picker>
            </v-row>
                
            
                
                <v-text-field label="מס' צפוי של אירועים"></v-text-field>
               
                

            <v-card-actions class="justify-center whiteBackground">
              <v-btn
              outlined
                text
                @click="dialog = false"
              >פרסם</v-btn>
            </v-card-actions>
          </v-card></v-dialog>
</v-card>
      <v-card>
        <v-toolbar>
            <v-btn @click="dialog = !dialog">
              צפי אירועים
            </v-btn>
        </v-toolbar>
        
       
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        picker: new Date().toISOString().substr(0, 10)
      }
    },
  }
</script>