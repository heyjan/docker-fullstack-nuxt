<template>
  <header class="grid items-center relative p-4">
    <div class="brand-name mx-2 my-0">
      <nuxt-link to="/">
        <img src="@/assets/brand.png" class="logo" alt="Firmenlogo" />
      </nuxt-link>
    </div>

    <div
      class="drawer-toggle flex flex-col justify-around pr-4 w-10"
      role="button"
      @click="$store.dispatch('nav/toggleSidebar')"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="app-links">
      <NavLinks></NavLinks>
    </div>
  </header>
</template>

<script>
import NavLinks from './NavLinks'
export default {
  components: { NavLinks },
}
</script>

<style scoped>
header {
  grid-template: 105px / auto 1fr;
  z-index: 1;
  /*background-image: linear-gradient(*/
  /*  to right,*/
  /*  hsl(280, 30%, 96%),*/
  /*  hsl(47, 83%, 85%)*/
  /*);*/
}

header::before {
  z-index: -1;
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.5s linear;
  opacity: 0;
  /*background-image: linear-gradient(*/
  /*  to right,*/
  /*  hsl(169, 34%, 74%),*/
  /*  hsl(276, 22%, 95%)*/
  /*);*/
}

header:hover::before {
  opacity: 1;
}
.app-links {
  justify-self: end;
}
.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: #000000;
}
.drawer-toggle {
  justify-self: end;
  height: 20%;
  cursor: pointer;
}
@media (max-width: 767px) {
  header {
    padding: 0 16px;
  }
  header:nth-child {
    justify-self: end !important;
  }
  .app-links {
    display: none;
  }
}
@media (min-width: 768px) {
  header {
    padding: 0 64px;
  }
  .app-links {
    display: block;
  }
  .drawer-toggle {
    display: none;
  }
}

/*hsl(272, 83%, 64%),*/
/*hsl(169, 63%, 57%)*/
</style>
