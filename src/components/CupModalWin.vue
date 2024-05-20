<script setup>
import ArrowIcon from 'icons/arrow.svg?component';

defineProps({
  isShow: { type: Boolean, required: true },
});
</script>

<template>
  <Teleport to="body">
    <Transition name="container">
      <div class="cup-modal-win" v-show="isShow">
        <div class="container">
          <div class="slider"></div>
          <div class="content-wrap">
            <div class="volume-of-glasses-wrap">
              <p class="volume-of-glasses-text">Натхнені стакани 350 мл</p>
              <ul class="controls-list">
                <li class="controls-list-item">
                  <button type="button" class="nav-btn">
                    <ArrowIcon class="nav-btn-icon prev-btn-icon" />
                  </button>
                </li>
                <li class="controls-list-item">
                  <button type="button" class="nav-btn">
                    <ArrowIcon class="nav-btn-icon" />
                  </button>
                </li>
              </ul>
            </div>
            <div class="text-wrap">
              <p class="title">Натхнені стакани</p>
              <p class="description">
                100 років тому народився хлопчик якому судилося зняти кілька фільмів, визнаних шедеврами, потрапити до радянської в'язниці, вижити там у найважчих умовах і стати одним із найвидатніших
                кінорежисерів ХХ століття.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.container-enter-active,
.container-leave-active {
  transform-origin: top right;
  transition: transform var(--transition-duration-and-func);
}

.container-enter-from,
.container-leave-to {
  transform: scale(0);
}

.cup-modal-win {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 109px;
  padding-bottom: 46px;
  background-color: #6572b5;
  background-image: url('icons/cupModalWin/lower-star-mobile.svg'), url('icons/cupModalWin/top-star-mobile.svg'), url('icons/cupModalWin/bubbles-mobile.svg');
  background-position:
    bottom 228px left calc(50% - 138px),
    top 65px right calc(50% - 54px),
    top 74px left calc(50% - 18px);
  background-size:
    47px 48px,
    38px 39px,
    309px 306px;
  background-repeat: no-repeat;
  overflow-y: scroll;
}

.container {
  width: 343px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}

.slider {
  width: 264px;
  height: 358px;
  margin-left: calc(50% - 5px - 264px / 2);
  outline: 1px solid greenyellow;
}

.content-wrap {
}

.volume-of-glasses-wrap {
  position: relative;
  width: 161px;
  margin-left: auto;
  margin-right: auto;
}

.volume-of-glasses-text {
  color: var(--white-color);
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  text-align: center;
}

.controls-list {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 343px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateX(-50%) translateY(-50%);
}

.controls-list-item {
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background-color: #3d3f7f;
}

.nav-btn-icon {
}

.prev-btn-icon {
}

.text-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.title {
  color: var(--white-color);
  font-family: Shnobel;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
}

.description {
  color: var(--white-color);
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
}

@media screen and (max-width: 1279px) {
  .content-wrap {
    margin-top: 52px;
  }

  .text-wrap {
    margin-top: 67px;
  }
}

@media screen and (min-width: 1280px) {
  .cup-modal-win {
    background-image: url('icons/cupModalWin/lower-star-desk.svg'), url('icons/cupModalWin/top-star-desk.svg'), url('icons/cupModalWin/lower-bubbles-desk.svg'),
      url('icons/cupModalWin/top-bubbles-desk.svg');
    background-position:
      bottom 63px right 49px,
      top 112px left 380px,
      bottom -236px left 198px,
      top -254px left 817px;
    background-size:
      65px 67px,
      47px 48px,
      492px 469px,
      416px 486px;
    background-repeat: no-repeat;
  }
}
</style>
