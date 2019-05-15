<template>
  <v-container text-xs-center mt-5 pt-5>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Welcome back</h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card dark color="secondary">
          <v-container>
            <v-form @submit.prevent="handleSignInUser">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="username"
                    prepend-icon="face"
                    name="username"
                    label="username"
                    id="username"
                    type="text"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="password"
                    prepend-icon="extension"
                    name="password"
                    label="password"
                    id="password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn color="accent" type="submit">Sign In</v-btn>
                  <h5>
                    Don't have an account?
                    <router-link to="/signup">Sign Up</router-link>
                  </h5>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSignInUser() {
      this.$store.dispatch("signinUser", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>
