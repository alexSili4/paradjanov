<script setup>
import MainGrapeIconDesk from 'icons/parajanovsLife/main-grape-desk.svg?component';
import MainGrapeIconMobile from 'icons/parajanovsLife/main-grape-mobile.svg?component';
import GrapeIconDesk from 'icons/parajanovsLife/grape-desk.svg?component';
import GrapeIconMobile from 'icons/parajanovsLife/grape-mobile.svg?component';
import NavArroWIconDesk from 'icons/parajanovsLife/nav-arrow-desk.svg?component';
import LeafIconDesk from 'icons/parajanovsLife/leaf-desk.svg?component';
import LeafIconMobile from 'icons/parajanovsLife/leaf-mobile.svg?component';
import { cardValidator } from 'validator';
import ShipToLeftIconDesk from 'icons/parajanovsLife/ship-to-left-desk.svg?component';
import ShipToRightIconDesk from 'icons/parajanovsLife/ship-to-right-desk.svg?component';
import QuoteIconDesk from 'icons/parajanovsLife/quote-desk.svg?component';
import ShipToLeftIconMobile from 'icons/parajanovsLife/ship-to-left-mobile.svg?component';
import ShipToRightIconMobile from 'icons/parajanovsLife/ship-to-right-mobile.svg?component';
import QuoteIconMobile from 'icons/parajanovsLife/quote-mobile.svg?component';
import { Vue3Lottie } from 'vue3-lottie';
import parajanovsLife from 'animations/parajanovsLife.json';

defineProps({
  isDesk: Boolean,
  playAnimation: {
    type: Boolean,
    required: true,
  },
  card: cardValidator,
  onCardBtnClick: {
    type: Function,
    required: true,
  },
  isDraggable: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="map-item-card">
    <ShipToLeftIconDesk class="ship-to-left-icon" v-if="isDesk" />
    <ShipToLeftIconMobile class="ship-to-left-icon" v-else />
    <ShipToRightIconDesk class="ship-to-right-icon" v-if="isDesk" />
    <ShipToRightIconMobile class="ship-to-right-icon" v-else />
    <QuoteIconDesk class="quote-icon" v-if="isDesk" />
    <QuoteIconMobile class="quote-icon" v-else />
    <!-- <Vue3Lottie :autoPlay="playAnimation" :animationData="parajanovsLife" :height="card.animation[0].height" :width="card.animation[0].width" class="animation-item" /> -->
    <div class="card-title-wrap">
      <p class="card-title">{{ card.title }}</p>
      <button type="button" class="card-btn card-article-btn" @click="onCardBtnClick" :disabled="isDraggable"></button>
      <span class="icon-btn-wrap">
        <LeafIconDesk class="leaf-icon btn-icon" v-if="isDesk" />
        <LeafIconMobile class="leaf-icon btn-icon" v-else />
        <MainGrapeIconDesk class="main-grape-icon btn-icon" v-if="isDesk" />
        <MainGrapeIconMobile class="main-grape-icon btn-icon" v-else />
        <GrapeIconDesk class="grape-icon btn-icon" v-if="isDesk" />
        <GrapeIconMobile class="grape-icon btn-icon" v-else />
        <NavArroWIconDesk class="nav-arrow-icon btn-icon" v-show="isDesk" />
        <span class="card-number">{{ card.number }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.map-item-card {
  position: relative;
  padding: 190px 177px 1px 150px;
}

.card-title-wrap {
  position: relative;
  width: 288px;
  height: 161px;
  background-image: url('icons/parajanovsLife/title-bg-mobile.svg');
  background-repeat: no-repeat;
  background-size: 288px 161px;
  background-position: 0 0;
}

.card-btn {
  position: absolute;
  z-index: 10;
  top: 20px;
  width: 100%;
  height: 120px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.icon-btn-wrap {
  position: absolute;
  top: -43px;
  left: 174px;
  pointer-events: none;
}

.main-grape-icon {
  position: relative;
  display: block;
}

.btn-icon {
  transition:
    transform var(--transition-duration-and-func),
    opacity var(--transition-duration-and-func);
}

.grape-icon {
  position: absolute;
  top: 36px;
  left: 8px;
  display: block;
}

.leaf-icon {
  position: absolute;
  top: 59px;
  left: 4px;
  display: block;
}

.card-number {
  position: absolute;
  top: 52px;
  left: 63px;
  color: var(--white-color);
  font-family: Shnobel;
  font-size: 25.66px;
  font-weight: 400;
  line-height: 1.3;
  transition: opacity var(--transition-duration-and-func);
}

.card-btn:is(:hover, :focus) {
  cursor:
    url('icons/cursor-pointer.svg') 25 0,
    auto;
}

.card-btn:not(:is(:hover, :focus)) ~ .icon-btn-wrap > .nav-arrow-icon {
  transform: rotate(-90deg);
  opacity: 0;
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .leaf-icon {
  transform: translateY(5px);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .main-grape-icon {
  transform: rotate(2.44deg);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .grape-icon {
  transform: rotate(21.65deg);
}

.card-title {
  position: absolute;
  top: 46px;
  left: 88px;
  color: #353b3f;
  font-family: Shnobel;
  font-size: 38px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.ship-to-left-icon {
  position: absolute;
  top: 287px;
  left: 85px;
  display: block;
}

.ship-to-right-icon {
  position: absolute;
  top: 321px;
  left: 111px;
  display: block;
}

.quote-icon {
  position: absolute;
  top: 89px;
  left: 308px;
  display: block;
}

.animation-item {
  position: absolute;
  z-index: 10;
  top: 50px;
  left: 69px;
}

@media screen and (max-width: 1279px) {
  .animation-item {
    transform-origin: left top;
    transform: scale(0.4277);
  }
}

@media screen and (min-width: 1280px) {
  .map-item-card {
    padding: 445px 420px 54px 351px;
  }

  .card-title-wrap {
    width: 670px;
    height: 321px;
    background-image: url('icons/parajanovsLife/title-bg-desk.svg');
    background-size: 670px 321px;
  }

  .card-btn {
    top: 30px;
    width: 100%;
    height: 250px;
  }

  .icon-btn-wrap {
    top: -100px;
    left: 406px;
  }

  .grape-icon {
    top: 83px;
    left: 19px;
  }

  .leaf-icon {
    top: 138px;
    left: 8px;
  }

  .card-number {
    top: 123px;
    left: 145px;
    font-size: 60px;
  }

  .nav-arrow-icon {
    position: absolute;
    top: 128px;
    left: 118px;
    display: block;
    transform-origin: center top;
  }

  .card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .card-number {
    opacity: 0;
  }

  .card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .leaf-icon {
    transform: translateY(7px);
  }

  .card-title {
    top: 50px;
    left: 193px;
    font-size: 90px;
  }

  .ship-to-left-icon {
    top: 655px;
    left: 152px;
  }

  .ship-to-right-icon {
    top: 745px;
    left: 211px;
  }

  .quote-icon {
    top: 209px;
    left: 720px;
  }

  .animation-item {
    top: 127px;
    left: 80px;
  }
}
</style>
