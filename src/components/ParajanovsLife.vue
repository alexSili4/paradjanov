<script setup>
import ParajanovsLifeBtn from 'components/ParajanovsLifeBtn.vue';
import ParajanovsLifeArticle from 'components/ParajanovsLifeArticle.vue';
import { cardValidator } from 'validator';

defineProps({
  card: cardValidator,
  isDesk: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <li class="map-item">
    <div class="map-item-card">
      <ParajanovsLifeBtn :isDesk="isDesk" :card="card" />
      <ParajanovsLifeArticle />
      <div class="no-hover"></div>
      <div></div>
    </div>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 143px;
  left: 103px;
  padding: 49px 177px 0px 69px;
}

.map-item-card {
  position: relative;
}

@media screen and (min-width: 1280px) {
  .map-item {
    top: 334px;
    left: 241px;
    padding: 145px 419px 54px 80px;
  }
}


</style>
