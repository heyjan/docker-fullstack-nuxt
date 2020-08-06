<template>
  <footer class="flex justify-center text-center w-full fixed">
    <nuxt-link to="/impressum">
      Impressum
    </nuxt-link>
  </footer>
</template>

<script>
export default {
  name: 'FootR',
}
</script>

<style scoped>
footer {
  background-image: linear-gradient(
    to right,
    hsl(169, 63%, 57%),
    hsl(272, 83%, 64%)
  );
  bottom: 0;
  left: 0;
}
</style>
