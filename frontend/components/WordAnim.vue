<template
  ><h4 class="wordCarousel flex justify-center text-center content-center my-4">
    <div>
      <!--        Use classes 2,3, or 4 to match the number of words -->
      <ul class="flip3">
        <li>Marken</li>
        <li>Erlebnisse</li>
        <li>Produkte</li>
      </ul>
    </div>
  </h4>
</template>

<script>
export default {
  name: 'WordAnim',
}
</script>

<style lang="scss" scoped>
.wordCarousel {
  color: #000000;
  font-family: 'Noe Display', sans-serif;
  line-height: 1.5;
  font-size: 1.875rem;
  div {
    overflow: hidden;
    position: relative;
    float: right;
    height: 65px;
    padding-top: 10px;
    margin-top: -10px;
    li {
      font-weight: 700;
      padding: 0 10px;
      height: 45px;
      margin-bottom: 45px;
      display: block;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }
}

.flip2 {
  animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}
.flip3 {
  animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}
.flip4 {
  animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}

@keyframes flip2 {
  0% {
    margin-top: -180px;
  }
  5% {
    margin-top: -90px;
  }
  50% {
    margin-top: -90px;
  }
  55% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

@keyframes flip3 {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

@keyframes flip4 {
  0% {
    margin-top: -360px;
  }
  5% {
    margin-top: -270px;
  }
  25% {
    margin-top: -270px;
  }
  30% {
    margin-top: -180px;
  }
  50% {
    margin-top: -180px;
  }
  55% {
    margin-top: -90px;
  }
  75% {
    margin-top: -90px;
  }
  80% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}
</style>
