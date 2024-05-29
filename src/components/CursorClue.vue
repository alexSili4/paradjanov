<script setup>
import { onBeforeMount, ref } from 'vue';

const props = defineProps({
  isDesk: { type: Boolean, required: true },
});

const showClue = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);

onBeforeMount(() => {
  if (props.isDesk) {
    showClue.value = true;
  }
});

window.addEventListener('mousemove', updateMousePosition);
window.addEventListener('mousedown', onMouseDown);
window.addEventListener('mouseup', onMouseUp);

function onMouseDown() {
  window.addEventListener('mousemove', setShowClue);
}

function onMouseUp() {
  window.removeEventListener('mousemove', setShowClue);
}

function setShowClue() {
  showClue.value = false;
  window.removeEventListener('mousemove', updateMousePosition);
}

function updateMousePosition(e) {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
}
</script>

<template>
  <Transition name="container">
    <div v-show="showClue" class="floating-block" :style="{ left: mouseX + 20 + 'px', top: mouseY + 20 + 'px' }">111111111111</div>
  </Transition>
</template>

<style scoped>
.container-enter-active,
.container-leave-active {
  transition: opacity var(--smooth-transition);
}

.container-enter-from,
.container-leave-to {
  opacity: 0;
}

.floating-block {
  position: absolute;
  z-index: 100000000000000;
  width: 50px;
  height: 50px;
  background-color: red;
  pointer-events: none;
}
</style>
