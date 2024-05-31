<script setup>
import { computed, onBeforeMount, ref } from 'vue';

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

const getCursorInlineStyles = () => ({ left: `${mouseX.value + 20}px`, top: `${mouseY.value - 80}px` });

const cursorInlineStyles = computed(getCursorInlineStyles);
</script>

<template>
  <Transition name="container">
    <div v-show="showClue" class="floating-block" :style="cursorInlineStyles">ТЯГНИ ТА ПІЗНАВАЙ</div>
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
  width: 117.3px;
  height: 69.5px;
  background-image: url('icons/cursor-clue-bg.svg');
  background-size: 117.3px 69.5px;
  pointer-events: none;
}
</style>
