<template>
  <section class="hero w-screen mx-auto text-white">
    <!--   A Single Content Box   -->
    <div class="content-one">
      <div class="content flex flex-row">
        <div
          class="content-box-left flex flex-col justify-between w-1/2 pt-10 text-center p-4"
        >
          <h2 class="text-3xl mb-6">Hotel Goldenes Rad</h2>
          <p class="text-xl">Neue Straße 65, 89073 Ulm</p>
          <div class="content-box-left">
            <img src="../assets/hotel_mock.png" height="833" width="1250" />
          </div>
        </div>
        <div
          class="content-box-right flex flex-col justify-center w-1/2 text-center"
        >
          <p class="text-xl p-2">Wordpress</p>
          <p class="text-xl p-2">SEO</p>
          <p class="text-xl p-2">Content</p>
          <p class="text-xl p-2">Social Media</p>
        </div>
      </div>
    </div>
    <div class="content-box">
      <div class="content pl-16 mt-10">
        <h2 class="text-3xl mb-6">Hi!</h2>
        <p class="text-xl">Im open for Freelance Work - jan{at}heyjan.de</p>
        <p class="m-2 p-2">
          <a
            href="#"
            class="hbutton border border-white text-white hover:text-gray-500"
            >Mehr Erfahren!
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script></script>

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
}
.content-one * {
  color: rgba(0, 0, 0, 0.5);
}
.hbutton {
  border: 1px solid white;
  border-radius: 20%;
}
</style>
