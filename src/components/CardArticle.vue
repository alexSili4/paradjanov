<script setup>
import CloseBtnIcon from 'icons/close-btn.svg?component';
import { getPrevAndNextCardId } from 'utils';
import { cardValidator } from 'validator';
import { computed, onBeforeMount, ref } from 'vue';
import NextBtnIcon from 'icons/cardArticle/next-btn-icon.svg?component';
import { cards } from 'constants';
import Arrow from 'icons/arrow.svg?component';
import MenuMobile from 'icons/navBar/menu-mobile.svg?component';
import BurgerMenu from 'components/BurgerMenu.vue';

const nextCardIdRef = ref(null);
const prevCardIdRef = ref(null);

const props = defineProps({
  card: cardValidator,
  onCloseBtnClick: { type: Function, required: true },
  onNavBtnClick: { type: Function, required: true },
  isShow: { type: Boolean, required: true },
  isDesk: { type: Boolean, required: true },
  isOpenMenu: { type: Boolean, required: true },
  onMenuBtnClick: { type: Function, required: true },
});

const hideModalWin = (e) => {
  if (e.target === e.currentTarget) {
    props.onCloseBtnClick(e);
  }
};

onBeforeMount(() => {
  const defaultCardId = props.card.id;
  const cardId = defaultCardId;
  const { prevCardId, nextCardId } = getPrevAndNextCardId({ cardId, cards });
  prevCardIdRef.value = prevCardId;
  nextCardIdRef.value = nextCardId;
});

const prevDataCardId = computed(() => (prevCardIdRef.value !== cards[4].id ? prevCardIdRef.value : cards[3].id));
const nextDataCardId = computed(() => (nextCardIdRef.value !== cards[4].id ? nextCardIdRef.value : cards[5].id));

const getPrevHideBtn = () => ['nav-btn-list-item', { 'hide-btn': props.card.id === cards[0].id }];
const getNextHideBtn = () => ['nav-btn-list-item', { 'hide-btn': props.card.id === cards[cards.length - 1].id }];
const getPrevNavBarHideBtn = () => [{ 'hide-btn': props.card.id === cards[0].id }];
const getNextNavBarHideBtn = () => [{ 'hide-btn': props.card.id === cards[cards.length - 1].id }];
const getMenuBtnClassNames = () => ['menu-btn', { 'menu-open': props.isOpenMenu }];
const getMenuBtnWrapClassNames = () => ['menu-btn-wrap', { 'menu-open': props.isOpenMenu }];

const prevHideBtn = computed(getPrevHideBtn);
const nextHideBtn = computed(getNextHideBtn);
const prevNavBarHideBtn = computed(getPrevNavBarHideBtn);
const nextNavBarHideBtn = computed(getNextNavBarHideBtn);
const menuBtnClassNames = computed(getMenuBtnClassNames);
const menuBtnWrapClassNames = computed(getMenuBtnWrapClassNames);
</script>

<template>
  <Teleport to="body">
    <Transition name="container">
      <div class="backdrop" v-show="isDesk ? isShow : isShow && !isOpenMenu" @click="hideModalWin">
        <div class="article-wrap">
          <div class="article-decorative-element"></div>
          <div class="article-container">
            <button type="button" class="close-btn" @click="onCloseBtnClick">
              <CloseBtnIcon class="close-btn-icon" />
            </button>
            <slot></slot>
            <ul class="nav-btn-list" v-if="isDesk">
              <li :class="prevHideBtn">
                <button class="nav-btn" type="button" @click="onNavBtnClick" :data-card-id="prevDataCardId">
                  <span class="nav-btn-title">Попередній</span>
                </button>
              </li>
              <li :class="nextHideBtn">
                <button class="nav-btn next" type="button" @click="onNavBtnClick" :data-card-id="nextDataCardId">
                  <span class="nav-btn-title">Наступний</span>
                  <NextBtnIcon class="nav-btn-icon" />
                </button>
              </li>
            </ul>
            <ul class="nav-bar" v-else>
              <li :class="prevNavBarHideBtn">
                <button type="button" class="nav-btn" :data-card-id="prevDataCardId" @click="onNavBtnClick">
                  <Arrow class="nav-btn-icon prev-btn-icon" />
                </button>
              </li>
              <li>
                <div :class="menuBtnWrapClassNames">
                  <button type="button" :class="menuBtnClassNames" @click="onMenuBtnClick">
                    <MenuMobile class="menu-btn-icon" />
                    <BurgerMenu :isOpenMenu="isOpenMenu" :isDesk="isDesk" />
                  </button>
                </div>
              </li>
              <li :class="nextNavBarHideBtn">
                <button type="button" class="nav-btn" :data-card-id="nextDataCardId" @click="onNavBtnClick">
                  <Arrow class="nav-btn-icon" />
                </button>
              </li>
            </ul>
          </div>
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

.backdrop {
  position: fixed;
  z-index: 1000000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.article-wrap {
  position: fixed;
  z-index: 1000001;
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
  background-size: cover;
  background-repeat: no-repeat;
}

.article-container {
  height: 100%;
  padding: 24px 16px;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  z-index: 1000003;
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

.nav-btn {
  flex-shrink: 0;
  padding: 15px;
  border: none;
  border-radius: 100px;
  backdrop-filter: blur(20px);
  background-color: #939ccb;
  transition:
    opacity var(--transition-duration-and-func),
    visibility var(--transition-duration-and-func),
    background-color var(--transition-duration-and-func);
}

.nav-btn-icon {
  display: block;
}

.prev-btn-icon {
  transform: rotate(180deg);
}

.menu-btn {
  position: relative;
  display: block;
  border: none;
  padding: 0;
  background-color: transparent;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 75px;
}

.hide-btn {
  pointer-events: none;
  opacity: 0;
}

@media screen and (min-width: 1280px) {
  .container-enter-from,
  .container-leave-to {
    transform: translateX(100%);
  }

  .article-wrap {
    position: fixed;
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
    gap: 80px;
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

  .nav-btn {
    position: relative;
    display: block;
    padding: 0;
    background-color: transparent;
    border: none;
  }

  .nav-btn-title {
    color: rgb(53, 59, 63);
    font-family: Shnobel;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .nav-btn-icon {
    position: absolute;
    top: 0px;
    left: -64px;
    pointer-events: none;
  }
}

@media screen and (max-width: 1279px) {
  .container-enter-from,
  .container-leave-to {
    transform: translateY(100%);
  }
}
</style>
