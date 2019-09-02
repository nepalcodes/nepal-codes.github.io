<template>
  <section id="welcome" class="hide-overflow">
    <v-layout>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/assets/welcome.png')" height="100vh" />
      </v-flex>

      <v-flex
        xs12
        md6
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <base-bubble-1 style="transform: rotate(180deg) translateY(25%)" />

        <v-layout align-center justify-center>
          <v-flex xs10 md6>
            <base-heading>Nepal Codes</base-heading>
            <base-text>
              Nepal codes is a community for students, professionals and specialists in software development and technology. we collaborate with different institutions to empower nepalese with innovations in technology.<br />
Nepal codes is a not-for-profit, inclusive organization we welcome all including youth, women and minorities in technology to participate in meetups, workshops and projects. please join us!.
            </base-text>
            <!-- <base-btn href="" class="mt-4">Learn More!</base-btn> -->
          </v-flex>
        </v-layout>

        <base-bubble-2 style="transform: rotate(180deg) translate(-200px, -15%)" />
      </v-flex>
    </v-layout>
  </section>
</template>
