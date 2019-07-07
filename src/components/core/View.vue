<template>
  <div>
    <welcome />
    <recent-projects />
    <mission />
    <about-me />
    <get-in-touch />
  </div>
</template>

<script>
export default {
  components: {
    AboutMe: () => import('@/components/AboutMe'),
    GetInTouch: () => import('@/components/GetInTouch'),
    RecentProjects: () => import('@/components/RecentProjects'),
    Mission: () => import('@/components/Mission'),
    Welcome: () => import('@/components/Welcome')
  }
}
</script>
