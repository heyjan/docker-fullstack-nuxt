<template>
  <div class="container">
    <h1>
      Pulling Data with Axios and Store with VueX, styled with TailwindCSS
    </h1>
    <div class="news_card">
      <ul class="upper">
        <li v-for="item in items" :key="item.id" class="item_list p-3 m-4">
          <div class="score">{{ item.score }}</div>
          <div class="title">{{ item.title }}</div>
          <a :href="item.url">{{ item.url }}</a>
          <div class="details">
            by {{ item.by }} {{ item.time | timeSince }} ago
          </div>
          <div class="comments">{{ item.descendants }} comments</div>
        </li>
      </ul>
      {{ users }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['ids', 'items']),
}
</script>

<style scoped>
.item_list {
  display: grid;
  grid: repeat(4, 1em) / repeat(10, 1fr);
  grid-row-gap: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: ghostwhite;
}
.score {
  grid-row: 1 / -1;
  grid-column: span 1;
  align-self: center;
  justify-self: center;
}
.title {
  grid-row: 2 / 3;
  grid-column: 3 / 8;
  align-self: end;
}
.details {
  grid-row: 3 / -1;
  grid-column: 7 / -2;
  justify-self: end;
  align-self: center;
}
.comments {
  grid-row: 3 / -1;
  grid-column: 3 / 6;
  align-self: center;
  justify-self: center;
  background: aliceblue;
}
</style>
