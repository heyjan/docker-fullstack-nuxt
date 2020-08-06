<template>
  <div class="app-container">
    <NavBar />
    <SideNavBar />
    <div class="app-content">
      <nuxt />
    </div>
    <Footr />
  </div>
</template>

<script>
import Footr from '../components/FootR'
import NavBar from '../components/NavBar'
import SideNavBar from '../components/SideNavBar'
export default {
  components: { SideNavBar, NavBar, Footr },

  computed: {
    isSidebar() {
      return this.$store.getters['nav/toggleSidebar']
    },
  },
  watch: {
    $route() {
      if (process.client && this.isSidebar && window.innerWidth < 768) {
        this.$store.dispatch('nav/toggleSidebar')
      }
    },
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
