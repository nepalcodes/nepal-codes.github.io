<template>
  <section
    id="about"
    class="hide-overflow"
  >
    <v-layout white>
      <v-flex
        xs12
        md6
        pa-5
      >
        <base-bubble-1
          style="transform: translate(5%, -5%)"
        />
        <base-heading class="info--text">
          About Us
        </base-heading>

        <base-text class="mb-5">
          Nepal codes is a community for students, professionals and specialists in software development and technology. we collaborate with different institutions to empower nepalese with innovations in technology.<br />
Nepal codes is a not-for-profit, inclusive organization we welcome all including youth, women and minorities in technology to participate in meetups, workshops and projects. please join us!.
        </base-text>

        <base-subheading class="info--text">
          Skills
        </base-subheading>
        <base-text class="mb-5">
          Lorem ipsum dolor sit amet, consecte tur adipi scin e<br>
          lit. Etiam vulputate augu e vel felis gravida porta.
        </base-text>

        <v-alert
          outlined
          color="info"
        >
          <v-layout
            v-for="(skill, i) in skills"
            :key="i"
            style="color: #69A1BB;"
            wrap
          >
            <v-flex
              xs6
              text-uppercase
              v-text="skill.name"
            />
            <v-flex
              xs6
              text-xs-right
              v-text="`${skill.value}%`"
            />
            <v-progress-linear
              :value="skill.value"
              color="info"
              height="8"
            />
          </v-layout>
        </v-alert>
      </v-flex>
      <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="require('@/assets/aboutme.png')"
          height="100%"
        />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        name: 'Web Design',
        value: 100
      },
      {
        name: 'Web Development',
        value: 75
      },
      {
        name: 'Web Support',
        value: 90
      }
    ]
  })
}
</script>
