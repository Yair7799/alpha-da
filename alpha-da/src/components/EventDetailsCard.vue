<template>
<v-card
  outlined
  class="text-h6"
  @click="activateDialog"
>
{{time + "    " + details}}
<v-dialog
    v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="600"
>
<v-card style="direction:rtl" >
            <v-toolbar
              color="primary"
              dark            
            >פרטים נוספים</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-4">פרטים נוספים</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                text
                outlined
                @click="dialog = false"
              >סגירה</v-btn>
            </v-card-actions>
          </v-card></v-dialog>
</v-card>
    
</template>

<script>
export default {
    name: 'EventDetailsCard',
    data: () => ({
        dialog: false,
    }),
    props: {
        time: {
            type: String
        },
        details: {
            type: String
        }
    },
    methods: {
        activateDialog() {
            this.dialog = true;
        }

    }
    
}
</script>

<style >
.v-card {
    width: 100%;
    background-color: #a3a3a3 !important;
}



</style>