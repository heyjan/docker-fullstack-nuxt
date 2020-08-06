<template>
  <div
    v-if="!$apollo.queries.character.loading"
    class="rounded border m-2 flex flex-wrap"
  >
    <img :src="character.image" />
    <div class="flex-grow m-4">
      <span>{{ character.status }}</span>
      <h1>{{ character.name }}</h1>
      <h1>{{ character.gender }}</h1>
      <!--      <h1>{{ character.origin.name }}</h1>-->
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Character',
  apollo: {
    character: {
      query: gql`
        query getCharacters($id: ID!) {
          character(id: $id) {
            id
            name
            status
            gender
            image
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
    },
  },
}
</script>

<style scoped></style>
