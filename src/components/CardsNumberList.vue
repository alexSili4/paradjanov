<script setup>
import { cardsValidator } from 'validator';

defineProps({
  cards: cardsValidator,
  activeCardId: { type: String, required: true },
  isDesk: { type: Boolean, required: true },
  onNavBtnClick: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <ul class="cards-number-list" v-show="isDesk">
    <li class="cards-number-list-item" :key="id" v-for="{ id } in cards">
      <button type="button" :class="['cards-number-btn', { active: id === activeCardId }]" @click="onNavBtnClick" :data-card-id="id">
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

.cards-number-btn:is(:hover, :focus, .active) {
  border-color: var(--white-color);
}

.cards-number-btn:is(:hover, :focus, .active) .cards-number-btn-title {
  transform: translateX(-50%) translateY(-1.5px) scale(0.83);
  transform-origin: top center;
}
</style>
