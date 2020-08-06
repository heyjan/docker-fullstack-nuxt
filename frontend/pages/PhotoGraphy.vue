<template>
  <div class="lg:w-full gallery">
    <figure class="gallery__item gallery__item--1">
      <img
        src="../assets/Bewerbungsfoto.jpg"
        class="gallery__img"
        alt="Image 1"
      />
    </figure>
    <figure class="gallery__item gallery__item--2">
      <img src="../assets/BlaueStd.jpg" class="gallery__img" alt="Image 2" />
    </figure>
    <figure class="gallery__item gallery__item--3">
      <img src="../assets/holy.jpg" class="gallery__img" alt="Image 3" />
    </figure>
    <figure class="gallery__item gallery__item--4">
      <img src="../assets/Tan.jpg" class="gallery__img" alt="Image 4" />
    </figure>
    <figure class="gallery__item gallery__item--5">
      <img src="../assets/Bjj.jpg" class="gallery__img" alt="Image 5" />
    </figure>
    <figure class="gallery__item gallery__item--6">
      <img src="../assets/Tirol.jpg" class="gallery__img" alt="Image 6" />
    </figure>
    <figure class="gallery__item gallery__item--7">
      <img src="../assets/Hotelzimmer.jpg" class="gallery__img" alt="Image 7" />
    </figure>
    <figure class="gallery__item gallery__item--8">
      <img src="../assets/Shoot.jpg" class="gallery__img" alt="Image 8" />
    </figure>
  </div>
</template>

<script>
export default {
  name: 'PhotoGraphy',
}
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 15px;
}
.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery__item--1 {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 7;
}
.gallery__item--2 {
  grid-column-start: 5;
  grid-column-end: 8;
  grid-row-start: 4;
  grid-row-end: 6;
}
.gallery__item--3 {
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 7;
}
.gallery__item--4 {
  grid-column-start: 7;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 4;
}
.gallery__item--5 {
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 4;
}
.gallery__item--6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 7;
}
.gallery__item--7 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.gallery__item--8 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
}
</style>
