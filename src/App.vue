<script setup>
import Header from 'components/HeaderComponent.vue';
import { onBeforeMount, ref } from 'vue';
import { getIsDesk } from 'utils';
import { RouterView } from 'vue-router';

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
    <router-view :isDesk="isDeskRef" />
  </main>
</template>

<style scoped></style>
