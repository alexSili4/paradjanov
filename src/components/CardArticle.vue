<script setup>
import CloseBtnIcon from 'icons/cardArticle/close-btn.svg';
import { getPrevAndNextCardId } from 'utils';
import { cardValidator } from 'validator';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const nextCardIdRef = ref(null);
const prevCardIdRef = ref(null);

const props = defineProps({
  card: cardValidator,
  onCloseBtnClick: { type: Function, required: true },
  onNavBtnClick: { type: Function, required: true },
  isShow: { type: Boolean, required: true },
  isDesk: { type: Boolean, required: true },
});

onBeforeMount(() => {
  const defaultCardId = props.card.id;
  const query = route.query;
  const cardId = query.cardId || defaultCardId;
  const { prevCardId, nextCardId } = getPrevAndNextCardId(cardId);
  prevCardIdRef.value = prevCardId;
  nextCardIdRef.value = nextCardId;
});
</script>

<template>
  <Teleport to="body">
    <Transition name="container">
      <div class="article-wrap" v-show="isShow">
        <div class="article-decorative-element"></div>
        <div class="article-container">
          <button type="button" class="close-btn" @click="onCloseBtnClick">
            <CloseBtnIcon class="close-btn-icon" />
          </button>
          <slot></slot>
          <ul class="nav-btn-list" v-show="isDesk">
            <li class="nav-btn-list-item"><button class="nav-btn" type="button" @click="onNavBtnClick" :data-card-id="prevCardIdRef">Попередній</button></li>
            <li class="nav-btn-list-item"><button class="nav-btn" type="button" @click="onNavBtnClick" :data-card-id="nextCardIdRef">Наступний</button></li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.container-enter-active,
.container-leave-active {
  transition: transform var(--transition-duration-and-func);
}

.article-wrap {
  position: fixed;
  z-index: 10;
  top: 100px;
  right: 0;
  width: 100%;
  height: calc(100% - 100px);
  background-color: var(--white-color);
}

.article-decorative-element {
  position: absolute;
  top: -22px;
  left: 0;
  width: 100%;
  height: 22px;
  background-image: url('icons/cardArticle/article-bg-mobile.svg');
}

.article-container {
  height: 100%;
  padding: 24px 16px;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 24px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #939ccb;
  transition: background-color var(--transition-duration-and-func);
}

.close-btn:is(:hover, :focus) {
  background-color: #3d3f7f;
}

@media screen and (min-width: 1280px) {
  .container-enter-from,
  .container-leave-to {
    transform: translateX(100%);
  }

  .article-wrap {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    width: 726px;
    height: 100%;
    background-color: var(--white-color);
  }

  .article-decorative-element {
    position: absolute;
    top: 0px;
    left: -53px;
    width: 53px;
    min-height: 100%;
    background-image: url('icons/cardArticle/article-bg-desk.svg');
  }

  .article-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 64px;
    padding: 92px 48px 56px;
  }

  .close-btn {
    top: 24px;
    right: 48px;
    width: 40px;
    height: 40px;
  }

  .nav-btn-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-btn-list-item {
  }
  .nav-btn {
  }
}

@media screen and (max-width: 1279px) {
  .container-enter-from,
  .container-leave-to {
    transform: translateY(100%);
  }
}
</style>
