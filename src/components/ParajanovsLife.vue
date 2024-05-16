<script setup>
import ParajanovsLifeBtn from 'components/ParajanovsLifeBtn.vue';
import ParajanovsLifeArticle from 'components/ParajanovsLifeArticle.vue';
import { cardValidator } from 'validator';
import CardArticle from 'components/CardArticle.vue';
import { computed } from 'vue';

const props = defineProps({
  card: cardValidator,
  activeArticle: {
    type: [String, null],
    required: true,
  },
  onCloseArticleBtnClick: {
    type: Function,
    required: true,
  },
  isDesk: {
    type: Boolean,
    required: true,
  },
  onCardBtnClick: {
    type: Function,
    required: true,
  },
  isDraggable: {
    type: Boolean,
    required: true,
  },
});

const isShow = computed(() => props.activeArticle === props.card.id);
</script>

<template>
  <li class="map-item">
    <div class="map-item-card">
      <ParajanovsLifeBtn :isDesk="isDesk" :card="card" :data-card-id="card.id" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggable" />
      <CardArticle :isShow="isShow" :onCloseBtnClick="onCloseArticleBtnClick">
        <ParajanovsLifeArticle />
      </CardArticle>
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
