<template>
  <div class="sidenav-container h-full w-full">
    <div v-if="isSidebar" class="backdrop" @click="hideSidebar"></div>

    <transition name="slide-side">
      <div v-if="isSidebar" class="sidenav h-full fixed p-10">
        <svg
          class="close"
          viewBox="0 0 1 1"
          height="1em"
          width="1em"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          @click="hideSidebar"
        >
          <line x1="0" y1="1" x2="1" y2="0" stroke="black" stroke-width="0.1" />
          <line x1="0" y1="0" x2="1" y2="1" stroke="black" stroke-width="0.1" />
        </svg>
        <NavLinks></NavLinks>
      </div>
    </transition>
  </div>
</template>

<script>
import NavLinks from './NavLinks'
export default {
  components: { NavLinks },
  computed: {
    isSidebar() {
      return this.$store.getters['nav/toggleSidebar']
    },
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch('nav/toggleSidebar')
    },
  },
}
</script>

<style scoped>
.sidenav {
  width: 300px;
  background-color: #a856ef;
  z-index: 10000;
  top: 0;
  left: 0;
  box-sizing: border-box;
}
.sidenav ul li {
  color: rgba(255, 255, 255, 0.1) !important;
}
.sidenav svg {
  position: absolute;
  right: 20px;
  top: 20px;
}
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>
