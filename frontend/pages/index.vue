<template>
  <section class="hero w-screen mx-auto text-white">
    <!--   A Single Content Box   -->
    <div class="content-one">
      <div class="content">
        <div class="flex">
          <h1 class="font-yellow px4">
            HELLO FROM WORLD
          </h1>
          <button class="button bg-red">Test</button>
        </div>
      </div>
    </div>
    <div class="content-box">
      <img
        src="https://davidwalsh.name/demo/graphql-intro/graphql.png"
        class="h-20 w-30 pt-4"
      />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.hero {
  background-image: radial-gradient(
    circle at 0 100%,
    palegoldenrod,
    powderblue
  );
  position: relative;
}
.content-box {
  position: relative;
  background-image: radial-gradient(circle at 0 100%, #222222, #47494e);
  padding: 20em 0 4em;
  clip-path: polygon(0% 20%, 100% 50%, 100% 100%, 0% 100%);
  -webkit-clip-path: polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%);
}
.content {
  height: 600px;
  padding-left: 4rem;
  padding-top: 2.5rem;
}
@media (max-width: 767px) {
  .content {
    padding-left: 0.5rem;
    padding-top: 2rem;
  }
}
.content-one * {
  color: rgba(0, 0, 0, 0.5);
}
button:focus,
textarea {
  outline: none !important;
}
</style>
