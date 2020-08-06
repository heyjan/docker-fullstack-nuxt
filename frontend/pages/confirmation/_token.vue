<template>
  <div v-if="confirmEmail" class="container">
    <h1 class="my-8">You have confirmed your email adress</h1>
    <img src="../../assets/confirm_meme.jpg" height="400" width="320" />
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'ConfirmationEmail',
  async asyncData({ params, app }) {
    const { token } = params
    const isValid = await app.apolloProvider.defaultClient.mutate({
      mutation: gql`
        mutation($token: String!) {
          confirmEmail(token: $token)
        }
      `,
      variables: {
        token,
      },
    })
    return isValid.data
  },
}
</script>

<style scoped></style>
