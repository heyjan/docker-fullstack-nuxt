<template>
  <section class="hero w-screen mx-auto">
    <!--   A Single Content Box   -->
    <div class="content-one">
      <div class="content">
        <div class="flex flex-col justify-center items-center">
          <h3>Hey...</h3>
          <img
            class="flex h-24 w-24 rounded-full ml-4 my-2"
            src="@/assets/lulw.png"
          />
          <h3>...ich bin Jan!</h3>
          <h3 class="ms-header__title text-center">
            Und mache Digitale
          </h3>
          <WordAnim />
        </div>
      </div>
    </div>
    <!--      <h1 ref="test" class="test">-->
    <!--        Works!-->
    <!--      </h1>-->
    <div class="content-two flex">
      <div class="flex mb-4 px-3">
        <div class="w-2/5 pr-6 mr-6">
          <h1>
            Aktuell für Projektbasierte Arbeit auf freiberuflicher Basis zu
            haben.
          </h1>
          <h1 class="py-6">
            Ihr findet mich in Ulm, auf Instagram und Facebook. Schreibt mir
            einfach eine E-Mail ✉️, ich freu mich!
          </h1>
        </div>
        <div class="flex-row w-1/5 mr-6">
          <p>
            <strong>Ulm</strong><br />
            Ringstraße 143<br />
            89081 Ulm<br />
            +49 (0)15 75 23 82 116<br />
            jan@heyjan.de
          </p>
        </div>
        <div class="w-1/5 mr-6">
          <h2>Leistungen</h2>
          <ul>
            <li>Frontend / Backend Development</li>
            <li>Webdesign</li>
            <li>Branding</li>
            <li>Content</li>
            <li>Social Media</li>
            <li>SEO</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div class="w-1/5 mr-6 pr-6">
          <h2>Kund:innen</h2>
          <p>
            City Partner Hotels, Hotel Goldenes Rad Ulm, Café Konditorei & Hotel
            Praschberger, Gamerzclass, Valorant School und andere
          </p>
          <h2>Heyjan</h2>
          <p>
            Meine erste Webseite habe ich 1998 erstellt. Die Entscheidung mich
            in diesem Bereich Selbstständig zu machen, kam erst 2016. Um meine
            weitgehend autodidaktisch angeeigneten Fähigkeiten zu bestärken,
            habe ich einige Zertifikate im Bereich Marketing & Design erworben.
            Besonders wichtig ist mir eine hohe Qualität meiner Arbeit. Ich
            zähle auf Klasse statt Masse. Und das schätzen meine treuen Kunden.
            Außerdem ist es mir wichtig, immer aktuell zu bleiben und moderne
            Technologie einzusetzen.<br />
            Hier gehts zu meinem
            <a
              href="https://de.linkedin.com/in/jan-mayer-a8b7b4176"
              target="_blank"
              >Linkedin Profil</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WordAnim from '@/components/WordAnim'
export default {
  components: { WordAnim },

  //   mounted() {
  //     this.$nextTick(() => {
  //       // When using $refs, must wait for nextTick
  //       const tl = this.$gsap.timeline({
  //         repeat: -1,
  //         ease: this.$gsap.Linear.easeInOut(2),
  //       })
  //       tl.to('.test', 2, { x: 200 }) // With css selector
  //       tl.to(this.$refs.test, 0.5, { x: 0 }) // With refs
  //     })
  //   },
}
</script>

<style lang="scss" scoped>
.hero {
  /*background-image: radial-gradient(*/
  /*  circle at 0 100%,*/
  /*  palegoldenrod,*/
  /*  powderblue*/
  /*);*/
  position: relative;
}

.content-box {
  position: relative;
  background-image: radial-gradient(circle at 0 100%, #222222, #47494e);
  padding: 20em 0 4em;
  clip-path: polygon(0% 15%, 100% 50%, 100% 100%, 0% 100%);
  -webkit-clip-path: polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%);
}
.content {
  height: 350px;
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
}
button:focus,
textarea {
  outline: none !important;
}
</style>
