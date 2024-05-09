<script setup>
import MainGrapeIconDesk from 'icons/parajanovsLife/main-grape-desk.svg?component';
import MainGrapeIconMobile from 'icons/parajanovsLife/main-grape-mobile.svg?component';
import GrapeIconDesk from 'icons/parajanovsLife/grape-desk.svg?component';
import GrapeIconMobile from 'icons/parajanovsLife/grape-mobile.svg?component';
import NavArroWIconDesk from 'icons/parajanovsLife/nav-arrow-desk.svg?component';
import LeafIconDesk from 'icons/parajanovsLife/leaf-desk.svg?component';
import LeafIconMobile from 'icons/parajanovsLife/leaf-mobile.svg?component';

defineProps({
  isDesk: Boolean,
});
</script>

<template>
  <button type="button" class="card-btn">
    <span class="icon-btn-wrap">
      <LeafIconDesk class="leaf-icon btn-icon" v-if="isDesk" />
      <LeafIconMobile class="leaf-icon btn-icon" v-else />
      <MainGrapeIconDesk class="main-grape-icon btn-icon" v-if="isDesk" />
      <MainGrapeIconMobile class="main-grape-icon btn-icon" v-else />
      <GrapeIconDesk class="grape-icon btn-icon" v-if="isDesk" />
      <GrapeIconMobile class="grape-icon btn-icon" v-else />
      <NavArroWIconDesk class="nav-arrow-icon btn-icon" v-show="isDesk" />
      <span class="card-number">1</span>
    </span>
  </button>
</template>

<style scoped>
.card-btn {
  display: block;
  width: 616px;
  height: 352px;
  padding: 0;
  border: none;
  background-color: transparent;
  background-image: url('images/parajanovsLife/card-bg-mobile.png');
  background-repeat: no-repeat;
  background-size: 616px 352px;
}

.icon-btn-wrap {
  position: absolute;
  top: 148px;
  left: 324px;
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

.card-btn:is(:hover, :focus) .leaf-icon {
  transform: translateY(5px);
}

.card-btn:is(:hover, :focus) .main-grape-icon {
  transform: rotate(2.44deg);
}

.card-btn:is(:hover, :focus) .grape-icon {
  transform: rotate(21.65deg);
}

@media screen and (min-width: 1280px) {
  .card-btn {
    width: 1440.5px;
    height: 820px;
    background-image: url('images/parajanovsLife/card-bg-desk.png');
    background-size: 1441px 820px;
  }

  .icon-btn-wrap {
    top: 345px;
    left: 757px;
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
    left: 9px;
  }

  .nav-arrow-icon {
    position: absolute;
    top: 128px;
    left: 118px;
    display: block;
    transform-origin: center top;
  }

  .card-btn:not(:is(:hover, :focus)) .nav-arrow-icon {
    transform: rotate(-90deg);
    opacity: 0;
  }

  .card-number {
    top: 123px;
    left: 147px;
    font-size: 60px;
  }

  .card-btn:is(:hover, :focus) .card-number {
    opacity: 0;
  }

  .card-btn:is(:hover, :focus) .leaf-icon {
    transform: translateY(7px);
  }
}
</style>
