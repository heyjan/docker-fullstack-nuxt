<template>
  <div class="container mx-auto">
    <div class="page">
      <div class="tailwind flex flex-col items-center">
        <h1 class="heading">Card Design in Tailwind CSS</h1>
        <div class="card flex">
          <div class="card-left flex flex-col justify-between items-center">
            <a href="#" class="card-button">CSS</a>
            <img
              src="https://storage.googleapis.com/vue-mastery.appspot.com/flamelink%2Fmedia%2F1570027224019_10.png?GoogleAccessId=firebase-adminsdk-otdiq%40vue-mastery.iam.gserviceaccount.com&Expires=16725225600&Signature=XPKda4kinSPOQsTdejn4mzfux95eCwEWyYQZZtJCRAyPt0HtCx2nR7SQ0yx%2BRW3tR0a0BraYiPj7qMR1XjHLo8e9h5rdA1aQA7aiPhqTH4bwDMyWxiCWaVJLspspGBN9CdLfId5XWLxHCU%2Fma%2Be5wkg6t%2Bt7WUx6piH9os0%2F%2FpAP3fwIfTnzUDXsrKfQeQIQWlq3jO6vIy6P8f%2BzauKF%2F0XJF75bse7glhvJyo8VYKl1A0eRE9pFZkq4osaijiHvm9UAZ%2FKlfYi%2BQoZWTBi%2BBNRu2P8q5TAPTZ3UIzI5dMr36A%2FMBy9q4pGiXEL0Tygx73ZD%2FoPSFV9cvpJ4UwujUA%3D%3D"
            />
            <span class="card-difficulty">Intermediate Difficulty</span>
          </div>
          <div class="card-right flex flex-col text-gray-600">
            <h2 class="card-title">Tailwind CSS Expert</h2>

            <p class="card-text">
              Credibly maintain professional initiatives and high-payoff
              collaboration and idea-sharing. Efficiently benchmark extensible.
            </p>
            <div class="card-meta flex justify-start items-center">
              <img
                src="https://vueschool.io/img/runtime.png"
                class="mr-2"
                height="25px"
                width="25px"
              />
              5 Lessons, 53:10 min
            </div>
          </div>
        </div>
      </div>
      <h1 class="heading">Plan Cards in Tailwind CSS</h1>
      <div class="flex mx-2">
        <!--   A Single Plan   -->
        <div
          class="flex flex-col justify-around shadow p-6 mx-3 w-1/4 text-center"
        >
          <header class="flex justify-between mb-6">
            <h5 class="uppercase text-gray-900 tracking-tighter">Monthly</h5>
            <a
              href="#"
              class="flex text-blue-500 font-bold items-baseline no-underline leading-none"
            >
              <span class="text-lg">$</span>
              <span class="text-3xl">15</span>
            </a>
          </header>
          <img
            src="@/assets/test.svg"
            alt="Monthly Plan"
            class="mb-6 mx-auto"
          />
          <p class="mb-8">
            Progressively aggregate cross functional internal or "organic"
            sources without flexible.
          </p>
          <a
            href="#"
            class="bg-blue-500 text-white py-3 px-5 rounded-full font-semibold uppercase"
            >Start Learning</a
          >
        </div>
        <!--   A Single Plan   -->
        <div
          class="flex flex-col justify-around shadow mx-3 p-6 w-1/4 text-center"
        >
          <header class="flex justify-between mb-6">
            <h5 class="uppercase text-gray-900 tracking-tighter">Monthly</h5>
            <a
              href="#"
              class="flex text-blue-500 font-bold items-baseline no-underline leading-none"
            >
              <span class="text-lg">$</span>
              <span class="text-3xl">15</span>
            </a>
          </header>
          <img
            src="@/assets/test.svg"
            alt="Monthly Plan"
            class="mb-6 mx-auto"
          />
          <p class="mb-8">
            Progressively aggregate cross functional internal or "organic"
            sources without flexible.
          </p>
          <a
            href="#"
            class="bg-blue-500 text-white py-3 px-5 rounded-full font-semibold uppercase"
            >Start Learning</a
          >
        </div>

        <!--   A Single Plan   -->
        <div
          class="flex flex-col justify-around shadow mx-3 p-6 w-1/4 text-center"
        >
          <header class="flex justify-between mb-6">
            <h5 class="uppercase text-gray-900 tracking-tighter">Monthly</h5>
            <a
              href="#"
              class="flex text-blue-500 font-bold items-baseline no-underline leading-none"
            >
              <span class="text-lg">$</span>
              <span class="text-3xl">15</span>
            </a>
          </header>
          <img
            src="@/assets/test.svg"
            alt="Monthly Plan"
            class="mb-6 mx-auto"
          />
          <p class="mb-8">
            Progressively aggregate cross functional internal or "organic"
            sources without flexible.
          </p>
          <a
            href="#"
            class="bg-blue-500 text-white py-3 px-5 rounded-full font-semibold uppercase"
            >Start Learning</a
          >
        </div>

        <!--   A Single Plan   -->
        <div
          class="flex flex-col justify-around shadow mx-3 p-6 w-1/4 text-center"
        >
          <header class="flex justify-between mb-6">
            <h5 class="uppercase text-gray-900 tracking-tighter">Monthly</h5>
            <a
              href="#"
              class="flex text-blue-500 font-bold items-baseline no-underline leading-none"
            >
              <span class="text-lg">$</span>
              <span class="text-3xl">15</span>
            </a>
          </header>
          <img
            src="@/assets/test.svg"
            alt="Monthly Plan"
            class="mb-6 mx-auto"
          />
          <p class="mb-8">
            Progressively aggregate cross functional internal or "organic"
            sources without flexible.
          </p>
          <a
            href="#"
            class="bg-blue-500 text-white py-3 px-5 rounded-full font-semibold uppercase"
            >Start Learning</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dev',
}
</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: scale(0.95);
  transform-origin: 50% 50%;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 475px;
  height: 258px;
  border-radius: 10px;
}
.heading {
  padding: 25px 25px;
}
.card-right,
.card-left {
  padding: 20px;
}
.card-left {
  text-align: center;
  background: linear-gradient(to bottom, #21c8f6, #637bff);
  color: white;
  border-radius: 10px;
}
.card-button {
  background: rgba(0, 0, 0, 0.4);
  padding: 3px 20px;
  border-radius: 9999px;
}
.card-title {
  text-decoration: none;
  color: #222;
  font-size: 1.8em;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 40px;
}
.card-text {
  flex: 1;
  font-size: 1.1em;
}
.card-difficulty {
  font-size: 1.1em;
}
.card-meta {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.card-meta img {
  margin-right: 1em;
}
</style>
