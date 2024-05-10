<script setup>
import MapComponent from 'components/MapComponent.vue';
import Header from 'components/HeaderComponent.vue';
import { onBeforeMount, ref } from 'vue';
import { getIsDesk } from 'utils';

window.addEventListener('resize', onWindowResize);

const isDeskRef = ref(false);

onBeforeMount(() => {
  getIsDesk(isDeskRef);
});

function onWindowResize() {
  getIsDesk(isDeskRef);
}
</script>

<template>
  <Header :isDesk="isDeskRef" />
  <main>
    <MapComponent :isDesk="isDeskRef" />
  </main>
</template>

<style scoped></style>
