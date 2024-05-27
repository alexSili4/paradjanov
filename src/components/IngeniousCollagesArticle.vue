<script setup>
import collage1 from 'images/ingeniousCollages/collage1.jpg';
import collage2 from 'images/ingeniousCollages/collage2.jpg';
import collage3 from 'images/ingeniousCollages/collage3.jpg';
import collage4 from 'images/ingeniousCollages/collage4.jpg';
import collage5 from 'images/ingeniousCollages/collage5.jpg';
import collage6 from 'images/ingeniousCollages/collage6.png';
import collage7 from 'images/ingeniousCollages/collage7.jpg';
import collage8 from 'images/ingeniousCollages/collage8.jpg';
import collage9 from 'images/ingeniousCollages/collage9.jpg';
import DecorativeElement1 from 'icons/ingeniousCollages/collage-decorative-elem-1.svg?component';
import DecorativeElement2 from 'icons/ingeniousCollages/collage-decorative-elem-2.svg?component';
import DecorativeElement3 from 'icons/ingeniousCollages/collage-decorative-elem-3.svg?component';
import decorativeElement4Desk from 'icons/ingeniousCollages/collage-decorative-elem-4-desk.jpg';
import decorativeElement4Mobile from 'icons/ingeniousCollages/collage-decorative-elem-4-mobile.jpg';
import ArticleTitleIconDesk from 'icons/cardArticle/article-title-icon-desk.svg?component';
import ArticleTitleIconMobile from 'icons/cardArticle/article-title-icon-mobile.svg?component';
import DecorativeElement5 from 'icons/ingeniousCollages/collage-decorative-elem-5.svg?component';
import { ref } from 'vue';
import Carousel from './CarouselComponent.vue';

const showCarousel = ref(false);
const targetIndex = ref(0);

const toggleShowCarousel = (e) => {
  const { index } = e.currentTarget.dataset;
  targetIndex.value = Number(index);
  showCarousel.value = !showCarousel.value;
};
</script>

<template>
  <div class="container">
    <div class="title-wrap">
      <div class="title-icon-wrap">
        <p class="title-icon-number">6</p>
        <ArticleTitleIconMobile class="title-icon mobile" />
        <ArticleTitleIconDesk class="title-icon desk" />
      </div>
      <p class="title-text">Геніальні<br />колажі</p>
    </div>
    <div class="article">
      <p class="article-title">спресовані фільми</p>
      <p class="article-text">
        Любов до старих речей та антураж антикварного магазину завжди надихали Параджанова на майбутні картини. Під час підготовки до фільмів режисер створював колажі, які допомагали візуалізувати
        майбутні кадри, Параджанов назвав їх «спресованими фільмами». Після того як радянська влада заборонила йому знімати, колажі стали його основною практикою.
      </p>
    </div>
    <ul class="collages-list">
      <li class="collages-list-item">
        <div class="collage-wrap">
          <DecorativeElement1 class="collage-icon collage-icon-1" />
          <DecorativeElement2 class="collage-icon collage-icon-2" />
          <img :src="collage1" alt="колаж" class="collage-img collage-img-1" @click="toggleShowCarousel" data-index="0" />
          <div class="collage-text-wrap">
            <p class="collage-title">Назва Колажа №1</p>
            <p class="collage-year">1967 рік</p>
          </div>
        </div>
      </li>
      <li class="collages-list-item two">
        <div class="collage-wrap two">
          <div class="collage-wrap">
            <DecorativeElement3 class="collage-icon collage-icon-3" />
            <img :src="collage2" alt="колаж" class="collage-img collage-img-2" @click="toggleShowCarousel" data-index="1" />
            <div class="collage-text-wrap two">
              <p class="collage-title">Назва Колажа №2</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
          <div class="collage-wrap second">
            <img :src="collage3" alt="колаж" class="collage-img collage-img-3" @click="toggleShowCarousel" data-index="2" />
            <div class="collage-text-wrap">
              <p class="collage-title">Назва Колажа №3</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
        </div>
      </li>
      <li class="collages-list-item">
        <div class="collage-wrap">
          <img :src="collage4" alt="колаж" class="collage-img collage-img-4" @click="toggleShowCarousel" data-index="3" />
          <div class="collage-text-wrap">
            <p class="collage-title">Назва Колажа №4</p>
            <p class="collage-year">1967 рік</p>
          </div>
        </div>
      </li>
      <li class="collages-list-item two">
        <div class="collage-wrap two">
          <div class="collage-wrap third">
            <img :src="collage5" alt="колаж" class="collage-img collage-img-5" @click="toggleShowCarousel" data-index="4" />
            <div class="collage-text-wrap two">
              <p class="collage-title">Назва Колажа №5</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
          <div class="collage-wrap">
            <DecorativeElement5 class="collage-icon collage-icon-5" />
            <img :src="collage6" alt="колаж" class="collage-img collage-img-6" @click="toggleShowCarousel" data-index="5" />
            <div class="collage-text-wrap">
              <p class="collage-title">Назва Колажа №6</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
        </div>
      </li>
      <li class="collages-list-item">
        <div class="collage-wrap">
          <img :src="decorativeElement4Desk" alt="колаж" class="collage-icon collage-icon-4 desk" @click="toggleShowCarousel" />
          <img :src="decorativeElement4Mobile" alt="колаж" class="collage-icon collage-icon-4 mobile" @click="toggleShowCarousel" />
          <img :src="collage7" alt="колаж" class="collage-img collage-img-7" @click="toggleShowCarousel" data-index="6" />
          <div class="collage-text-wrap">
            <p class="collage-title">Назва Колажа №7</p>
            <p class="collage-year">1967 рік</p>
          </div>
        </div>
      </li>
      <li class="collages-list-item two">
        <div class="collage-wrap two">
          <div class="collage-wrap fourth">
            <DecorativeElement3 class="collage-icon collage-icon-4" />
            <img :src="collage8" alt="колаж" class="collage-img collage-img-8" @click="toggleShowCarousel" data-index="7" />
            <div class="collage-text-wrap two">
              <p class="collage-title">Назва Колажа №8</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
          <div class="collage-wrap">
            <img :src="collage9" alt="колаж" class="collage-img collage-img-9" @click="toggleShowCarousel" data-index="8" />
            <div class="collage-text-wrap two">
              <p class="collage-title">Назва Колажа №9</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <Carousel
      :show="showCarousel"
      :onCloseBtnClick="toggleShowCarousel"
      :slides="[collage1, collage2, collage3, collage4, collage5, collage6, collage7, collage8, collage9]"
      :targetIndex="targetIndex"
    />
  </div>
</template>

<style scoped>
.title-wrap {
  display: flex;
  gap: 16px;
  align-items: center;
}

.title-icon-wrap {
  position: relative;
}

.title-icon-number {
  position: absolute;
  top: 13px;
  left: 43px;
  color: var(--white-color);
  font-family: Shnobel;
  font-size: 23.35px;
  font-weight: 400;
  line-height: 1.3;
}

.title-icon {
  display: block;
}

.title-text {
  color: #353b3f;
  font-family: Shnobel;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.article {
  margin-top: 44px;
}

.article-title {
  color: #373730;
  font-family: Shnobel;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.article-text {
  margin-top: 16px;
  color: #373730;
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
}

.collages-list {
  margin-top: 80px;
}

.collages-list-item:not(:first-child) {
  margin-top: 48px;
}

.collage-wrap {
  position: relative;
}

.collage-icon-2 {
  position: absolute;
  top: -29px;
  left: 33px;
  display: block;
}

.collage-icon-1 {
  position: absolute;
  top: -29px;
  left: 281px;
  display: block;
}

.collage-img {
  position: relative;
  max-width: 100%;
  height: auto;
  cursor: pointer;
}

.collage-text-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.collage-title {
  color: #373730;
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
}

.collage-year {
  color: #373730;
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
}

.collage-icon-3 {
  position: absolute;
  top: -36px;
  left: 142px;
  display: block;
}

.collage-img-2 {
  width: 307px;
  height: 433.33px;
}

.collage-wrap.third {
  width: 314px;
  margin-left: auto;
}

.collage-wrap.third + .collage-wrap {
  position: relative;
  margin-top: 48px;
}

.collage-icon-5 {
  position: absolute;
  top: -23px;
  left: 142px;
  display: block;
}

.collage-icon-4.mobile {
  display: block;
  margin-left: auto;
}

.collage-wrap.fourth {
  width: 307px;
  margin-left: auto;
}

.collage-icon-4 {
  position: absolute;
  top: -36px;
  left: 101px;
  display: block;
}

.collage-wrap.fourth + .collage-wrap {
  margin-top: 48px;
}

@media screen and (min-width: 1280px) {
  .title-wrap {
    justify-content: space-between;
  }

  .title-icon-number {
    top: 20px;
    left: 66px;
    font-size: 36.17px;
  }

  .title-icon.mobile {
    display: none;
  }

  .title-text {
    width: 420px;
    font-size: 72px;
  }

  .article {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 44px;
    margin-bottom: 24px;
  }

  .article-title {
    width: 150px;
  }

  .article-text {
    flex-shrink: 0;
    width: 419px;
  }

  .collages-list-item:not(:first-child) {
    margin-top: 80px;
  }

  .collage-wrap.two {
    display: flex;
    justify-content: space-between;
  }

  .collage-wrap.two > .collage-wrap {
    margin: 0;
  }

  .collage-img-2 {
    width: 226px;
    height: 319px;
  }

  .collage-img-3 {
    width: 261px;
    height: 348px;
  }

  .collage-img-5 {
    width: 314px;
    height: 276px;
  }

  .collage-img-6 {
    width: 261px;
    height: 328px;
  }

  .collage-img-7 {
    width: 440px;
    height: 382px;
    margin-left: auto;
  }

  .collage-icon-4.mobile {
    display: none;
  }

  .collage-icon-4.desk {
    position: absolute;
    top: 0px;
    left: -50px;
    display: block;
  }

  .collages-list-item:not(.two) .collage-text-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 419px;
    margin-left: auto;
  }

  .collage-icon-1 {
    left: 568px;
  }

  .collage-icon-2 {
    left: 32px;
  }

  .collage-icon-3 {
    left: 101px;
  }

  .collage-icon-5 {
    left: 119px;
  }
}

@media screen and (max-width: 1280px) {
  .container {
    width: 343px;
    margin-left: auto;
    margin-right: auto;
  }

  .title-icon.desk {
    display: none;
  }

  .title-icon.desc {
    display: none;
  }

  .collage-icon-4.desk {
    display: none;
  }

  .collage-wrap.second {
    width: 307px;
    margin-top: 48px;
    margin-left: auto;
  }
}
</style>
