<template>
  <div>
    <h1>Create Character</h1>
    <form action="" @submit.prevent="createCharacter">
      <div>
        <input
          v-model="name"
          type="text"
          class="shadow border rounded py-2 px-3 my-1 text-gray-700 leading-tight"
          placeholder="name"
        />
      </div>
      <div>
        <input
          v-model="gender"
          type="text"
          class="shadow border rounded py-2 px-3 my-1 text-gray-700 leading-tight"
          placeholder="gender"
        />
      </div>
      <div>
        <input
          v-model="status"
          type="text"
          class="shadow border rounded py-2 px-3 my-1 text-gray-700 leading-tight"
          placeholder="status"
        />
      </div>
      <div>
        <input
          v-model="image"
          type="text"
          class="shadow border rounded py-2 px-3 my-1 text-gray-700 leading-tight"
          placeholder="image"
        />
      </div>
      <button type="submit" class="bg-yellow-300 rounded p-2 m-2 font-bold">
        Create Character
      </button>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'CreateCharacter',
  data() {
    return {
      name: '',
      status: '',
      gender: '',
      image: '',
      errors: [],
    }
  },
  methods: {
    createCharacter(event) {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation(
              $name: String!
              $status: String!
              $gender: String
              $image: String
            ) {
              addCharacter(
                name: $name
                status: $status
                gender: $gender
                image: $image
              ) {
                name
                gender
              }
            }
          `,
          variables: {
            name: this.name,
            status: this.status,
            gender: this.gender,
            image: this.image,
          },
        })
        .then((data) => {
          event.target.reset()
        })
        .catch((e) => {
          this.errors = e.graphQLErrors
        })
    },
  },
}
</script>

<style scoped></style>
