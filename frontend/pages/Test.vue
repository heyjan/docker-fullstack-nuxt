<template>
  <Items></Items>
</template>

<script>
import Items from '../components/Items'
export default {
  components: { Items },
  async fetch({ store }) {
    await store.dispatch('LOAD_ITEMS', 'topstories.json')
  },
}
</script>

<style scoped></style>
