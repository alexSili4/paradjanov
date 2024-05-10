<script setup>
// import ParajanovsLifeBtn from 'components/ParajanovsLifeBtn.vue';
import ParajanovsLifeArticle from 'components/ParajanovsLifeArticle.vue';
import { getIsDesk } from 'utils';
import { onMounted, ref } from 'vue';

window.addEventListener('resize', onWindowResize);

const isDeskRef = ref(false);

onMounted(() => {
  getIsDesk(isDeskRef);
});

function onWindowResize() {
  getIsDesk(isDeskRef);
}
</script>

<template>
  <li class="map-item">
    <div>
      <!-- <ParajanovsLifeBtn :isDesk="isDeskRef" /> -->
      <ParajanovsLifeArticle />
      <div></div>
    </div>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 143px;
  left: 103px;
}

@media screen and (min-width: 1280px) {
  .map-item {
    top: 334px;
    left: 241px;
  }
}
</style>
