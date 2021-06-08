<template>
  <v-form class="mt-6">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="givenUserName"
            label="שם משתמש"
            filled
            rounded
            dense
            background-color="info"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="givenPassword"
            label="סיסמא"
            type="password"
            filled
            rounded
            dense
            text
            background-color="info"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <v-btn
            @click="login(givenUserName, givenPassword)"
            rounded
            color="primary"
            dark
            >התחבר</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import userService from "../userService";

export default {
  name: "LoginPage",

  data() {
    return {
      user: {},
      givenUserName: "",
      givenPassword: ""
    };
  },
  methods: {
    async login(givenUserName, givenPassword) { 
      this.user = await userService.login(givenUserName, givenPassword);
    }
  }
};
</script>
