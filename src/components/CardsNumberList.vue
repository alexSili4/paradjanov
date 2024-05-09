<script setup>
import { onMounted, ref } from 'vue';
import { getIsDesk } from 'utils';

window.addEventListener('resize', onWindowResize);

const isDeskRef = ref(false);
defineProps({
  cards: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every((item) => {
        const keys = Object.keys(item);

        return (
          typeof item === 'object' &&
          keys.includes('id') &&
          typeof item.id === 'string'
        );
      }),
  },
});

onMounted(() => {
  getIsDesk(isDeskRef);
});

function onWindowResize() {
  getIsDesk(isDeskRef);
}
</script>

<template>
  <ul class="cards-number-list" v-show="isDeskRef">
    <li class="cards-number-list-item" :key="id" v-for="{ id } in cards">
      <button type="button" class="cards-number-btn">
        <span class="cards-number-btn-title">{{ id }}</span>
      </button>
    </li>
  </ul>
</template>

<style scoped>
.cards-number-list {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cards-number-list-item {
  padding: 10px;
}

.cards-number-btn {
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-bottom: 2px dashed;
  border-color: transparent;
  transition: border-color var(--transition-duration-and-func);
}

.cards-number-btn-title {
  position: absolute;
  top: 0;
  left: 50%;
  color: var(--white-color);
  font-family: Shnobel;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.04;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%) translateY(1.5px);
  transition: transform var(--transition-duration-and-func);
}

.cards-number-btn:is(:hover, :focus) {
  border-color: var(--white-color);
}

.cards-number-btn:is(:hover, :focus) .cards-number-btn-title {
  transform: translateX(-50%) translateY(-1.5px) scale(0.83);
  transform-origin: top center;
}
</style>
