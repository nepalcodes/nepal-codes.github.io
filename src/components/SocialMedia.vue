<template>
  <div>
   <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      fab
      class="ma-2"
      :large="large"
      color="info"
      :href=item.href
      target="_blank"
    >
      <v-icon
        dark
        v-text="item.icon"
      />
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    items: [
      {
        name: 'Twitter',
        icon: 'mdi-twitter',
        href: 'https://twitter.com/nepalcodes'
      },
      {
        name: 'Github',
        icon: 'mdi-github-circle',
        href: 'https://github.com/nepal-codes'
      },
      {
        name: 'Facebook',
        icon: 'mdi-facebook',
        href: 'https://www.facebook.com/groups/892067427822061/'
      },
      {
        name: 'Slack',
        icon: 'mdi-slack',
        href: 'https://join.slack.com/t/nepalcodes/shared_invite/enQtNjYzMjE5MjY3MDI4LWI5NWEyNDljZDgzNzExOWQ0NjRhNDU4NDdmZGYzNmE1MDM4NDA3NjRmMWNkZDljMWU1NDhlMjk0NGZmMTU4MjQ'
      },
      {
        name: 'Email',
        icon: 'mdi-email',
        href: 'mailto:team@nepalcodes.com'
      },
      {
        name: 'Phone',
        icon: 'mdi-phone',
        href: 'tel:+1647901CODE'
      }
    ]
  })
}
</script>
