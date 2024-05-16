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
  <ShipToLeftIconDesk class="ship-to-left-icon" v-if="isDesk" />
  <ShipToLeftIconMobile class="ship-to-left-icon" v-else />
  <ShipToRightIconDesk class="ship-to-right-icon" v-if="isDesk" />
  <ShipToRightIconMobile class="ship-to-right-icon" v-else />
  <QuoteIconDesk class="quote-icon" v-if="isDesk" />
  <QuoteIconMobile class="quote-icon" v-else />
  <button type="button" :class="['card-btn', { 'card-btn-disabled': isDraggable }]" @click="onCardBtnClick" :disabled="isDraggable">
    <span class="card-title-wrap">
      <span class="card-title">{{ card.title }}</span>
    </span>
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
  </button>
  <Vue3Lottie :animationData="parajanovsLife" :height="card.animation[0].height" :width="card.animation[0].width" class="animation-item" />
</template>

<style scoped>
.card-btn {
  position: relative;
  display: block;
  width: 370px;
  height: 303px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.card-btn-disabled {
  pointer-events: none;
}

.icon-btn-wrap {
  position: absolute;
  top: 98px;
  left: 255px;
  width: 134px;
  height: 134px;
  padding-top: 30px;
  padding-left: 28px;
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

.card-btn:not(:is(:hover, :focus)) .nav-arrow-icon {
  transform: rotate(-90deg);
  opacity: 0;
}

.card-btn:is(:hover, :focus) .leaf-icon {
  transform: translateY(5px);
}

.card-btn:is(:hover, :focus) .main-grape-icon {
  transform: rotate(2.44deg);
}

.card-btn:is(:hover, :focus) .grape-icon {
  transform: rotate(21.65deg);
}

.card-title-wrap {
  position: absolute;
  top: 141px;
  left: 81px;
  width: 289px;
  height: 162px;
  background-image: url('icons/parajanovsLife/title-bg-mobile.svg');
  background-repeat: no-repeat;
  background-size: 289px 162px;
  background-position: 0 0;
  padding-top: 46px;
  padding-left: 88px;
  text-align: left;
}

.card-title {
  color: #353b3f;
  font-family: Shnobel;
  font-size: 38px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.ship-to-left-icon {
  position: absolute;
  top: 238px;
  left: 16px;
  display: block;
}

.ship-to-right-icon {
  position: absolute;
  top: 272px;
  left: 42px;
  display: block;
}

.quote-icon {
  position: absolute;
  top: 40px;
  left: 239px;
  display: block;
}

.animation-item {
  position: absolute;
  top: 0;
  left: 0;
}

@media screen and (max-width: 1279px) {
  .animation-item {
    transform-origin: left top;
    transform: scale(0.4277);
  }
}

@media screen and (min-width: 1280px) {
  .card-btn {
    width: 941px;
    height: 621px;
  }

  .icon-btn-wrap {
    top: 199px;
    left: 677px;
    width: 314px;
    height: 313px;
    padding-top: 70px;
    padding-left: 65px;
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

  .card-btn:is(:hover, :focus) .card-number {
    opacity: 0;
  }

  .card-btn:is(:hover, :focus) .leaf-icon {
    transform: translateY(7px);
  }

  .card-title-wrap {
    top: 299px;
    left: 271px;
    width: 670px;
    height: 321px;
    background-image: url('icons/parajanovsLife/title-bg-desk.svg');
    background-size: 670px 321px;
    padding-top: 50px;
    padding-left: 193px;
  }

  .card-title {
    font-size: 90px;
  }

  .ship-to-left-icon {
    top: 509px;
    left: 73px;
  }

  .ship-to-right-icon {
    top: 599px;
    left: 131px;
  }

  .parajanov-face-icon {
    top: -19px;
    left: 0px;
  }

  .quote-icon {
    top: 63px;
    left: 640px;
  }

  .animation-item {
  }
}
</style>
