<template>
  <section id="get-in-touch" class="hide-overflow">
    <v-layout info white--text>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/assets/contact.png')" height="100%" />
      </v-flex>
      <v-flex xs12 md6 pa-5>
        <base-bubble-1 />
        <base-heading class="mb-5">Get In Touch</base-heading>

        <v-sheet max-width="600" color="transparent">
          <v-form
            ref="form"
            method="post"
            action="https://gmail.us4.list-manage.com/subscribe/post?u=6429aaeccb0a0afdc33847559&amp;id=0f86a0ffaa"
          >
            <v-layout white--text>
              <v-flex>
                <v-text-field
                  name="FNAME"
                  v-model="fname"
                  :rules="fnameRules"
                  required
                  color="info"
                  label="First Name"
                  solo
                  flat
                />
                <v-text-field
                  name="LNAME"
                  v-model="lname"
                  :rules="lnameRules"
                  required
                  color="info"
                  label="Last Name"
                  solo
                  flat
                />
                <v-text-field
                  name="EMAIL"
                  v-model="email"
                  :rules="emailRules"
                  required
                  color="info"
                  label="Email"
                  solo
                  flat
                />
                <v-btn type="submit">Join Us</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-sheet>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
//const axios = require("axios");
export default {
  data: () => ({
    valid: false,
    fname: "",
    lname: "",
    email: "",
    fnameRules: [v => !!v || "Firstname is required"],
    lnameRules: [v => !!v || "Lastname is required"],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    /*submit() {
      console.log({ fname: this.fname, lname: this.lname, email: this.email });
      // Make a request for a user with a given ID
      axios.post('https://yahoo.us3.list-manage.com/subscribe/post?u=faa30208f90d7892be89f58b9&amp;id=e15ebf4807', {
            FNAME: this.fname,
            LNAME: this.lname,
            LNAME: this.email
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }*/
  }
};
</script>