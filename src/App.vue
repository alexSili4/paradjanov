<script setup>
import Header from 'components/HeaderComponent.vue';
import { onBeforeMount, ref } from 'vue';
import { getIsDesk } from 'utils';
import { RouterView } from 'vue-router';

window.addEventListener('resize', onWindowResize);

const isDeskRef = ref(false);
const showGlassesModalWinRef = ref(false);

onBeforeMount(() => {
  getIsDesk(isDeskRef);
});

function onWindowResize() {
  getIsDesk(isDeskRef);
}

const toggleShowGlassesModalWin = () => {
  showGlassesModalWinRef.value = !showGlassesModalWinRef.value;
};
</script>

<template>
  <main>
    <router-view :isDesk="isDeskRef" :toggleShowGlassesModalWin="toggleShowGlassesModalWin" />
  </main>
  <Header :isDesk="isDeskRef" :showGlassesModalWin="showGlassesModalWinRef" :toggleShowGlassesModalWin="toggleShowGlassesModalWin" />
</template>

<style scoped></style>
