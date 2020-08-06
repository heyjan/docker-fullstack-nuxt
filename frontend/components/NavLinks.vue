<template>
  <ul class="nav-links p-0 m-0">
    <li class="nav-item mx-3 my-0">
      <nuxt-link to="/photography"> PHOTOGRAPHY</nuxt-link>
    </li>
    <li class="nav-item mx-3 my-0">
      <nuxt-link to="/referenzen"> REFERENZEN</nuxt-link>
    </li>
    <li class="nav-item mx-3 my-0">
      <nuxt-link to="/dev">
        DEV
      </nuxt-link>
    </li>
    <li class="nav-item mx-3 my-0">
      <nuxt-link to="/Test">
        TEST PROJECT
      </nuxt-link>
    </li>
    <li class="nav-item mx-3 my-0 p-9">
      <nuxt-link to="/blog" class="">
        BLOG
      </nuxt-link>
    </li>
    <li class="nav-item mx-3 my-0">
      <nuxt-link to="/kontakt" class="">
        KONTAKT
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavLinks',
}
</script>

<style scoped>
.nav-item a:active {
  color: #30180d;
}
.nav-item a:active,
.nav-item a:hover {
  text-decoration: underline;
}
@media (max-width: 767px) {
  .nav-links {
    display: block;
  }
  .nav-item {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}
@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}
</style>
