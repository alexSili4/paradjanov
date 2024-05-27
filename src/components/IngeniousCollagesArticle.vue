<script setup>
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
import { collages } from 'constants';

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
          <img :src="collages[0].src" alt="колаж" class="collage-img collage-img-1" @click="toggleShowCarousel" data-index="0" />
          <div class="collage-text-wrap">
            <p class="collage-title">{{ collages[0].title }}</p>
            <p class="collage-year">{{ collages[0].year }}</p>
          </div>
        </div>
      </li>
      <li class="collages-list-item two">
        <div class="collage-wrap two">
          <div class="collage-wrap">
            <DecorativeElement3 class="collage-icon collage-icon-3" />
            <img :src="collages[1].src" alt="колаж" class="collage-img collage-img-2" @click="toggleShowCarousel" data-index="1" />
            <div class="collage-text-wrap two">
              <p class="collage-title">{{ collages[1].title }}</p>
              <p class="collage-year">{{ collages[1].year }}</p>
            </div>
          </div>
          <div class="collage-wrap second">
            <img :src="collages[2].src" alt="колаж" class="collage-img collage-img-3" @click="toggleShowCarousel" data-index="2" />
            <div class="collage-text-wrap">
              <p class="collage-title">{{ collages[2].title }}</p>
              <p class="collage-year">{{ collages[2].year }}</p>
            </div>
          </div>
        </div>
      </li>
      <li class="collages-list-item">
        <div class="collage-wrap">
          <img :src="collages[3].src" alt="колаж" class="collage-img collage-img-4" @click="toggleShowCarousel" data-index="3" />
          <div class="collage-text-wrap">
            <p class="collage-title">{{ collages[3].title }}</p>
            <p class="collage-year">{{ collages[3].year }}</p>
          </div>
        </div>
      </li>
      <li class="collages-list-item two">
        <div class="collage-wrap two">
          <div class="collage-wrap third">
            <img :src="collages[4].src" alt="колаж" class="collage-img collage-img-5" @click="toggleShowCarousel" data-index="4" />
            <div class="collage-text-wrap two">
              <p class="collage-title">{{ collages[4].title }}</p>
              <p class="collage-year">{{ collages[4].year }}</p>
            </div>
          </div>
          <div class="collage-wrap">
            <DecorativeElement5 class="collage-icon collage-icon-5" />
            <img :src="collages[5].src" alt="колаж" class="collage-img collage-img-6" @click="toggleShowCarousel" data-index="5" />
            <div class="collage-text-wrap">
              <p class="collage-title">{{ collages[5].title }}</p>
              <p class="collage-year">{{ collages[5].year }}</p>
            </div>
          </div>
        </div>
      </li>
      <li class="collages-list-item collage-7">
        <div class="collage-wrap">
          <img :src="decorativeElement4Desk" alt="колаж" class="collage-icon collage-icon-4 desk" @click="toggleShowCarousel" />
          <img :src="decorativeElement4Mobile" alt="колаж" class="collage-icon collage-icon-4 mobile" @click="toggleShowCarousel" />
          <img :src="collages[6].src" alt="колаж" class="collage-img collage-img-7" @click="toggleShowCarousel" data-index="6" />
          <div class="collage-text-wrap">
            <p class="collage-title">{{ collages[6].title }}</p>
            <p class="collage-year">{{ collages[6].year }}</p>
          </div>
        </div>
      </li>
      <li class="collages-list-item two">
        <div class="collage-wrap two">
          <div class="collage-wrap fourth">
            <DecorativeElement3 class="collage-icon collage-icon-4" />
            <img :src="collages[7].src" alt="колаж" class="collage-img collage-img-8" @click="toggleShowCarousel" data-index="7" />
            <div class="collage-text-wrap two">
              <p class="collage-title">{{ collages[7].title }}</p>
              <p class="collage-year">{{ collages[7].year }}</p>
            </div>
          </div>
          <div class="collage-wrap">
            <img :src="collages[8].src" alt="колаж" class="collage-img collage-img-9" @click="toggleShowCarousel" data-index="8" />
            <div class="collage-text-wrap two">
              <p class="collage-title">{{ collages[8].title }}</p>
              <p class="collage-year">{{ collages[8].year }}</p>
            </div>
          </div>
        </div>
      </li>
      <li class="collages-list-item">
        <div class="collage-wrap">
          <img :src="collages[9].src" alt="колаж" class="collage-img collage-img-4" @click="toggleShowCarousel" data-index="9" />
          <div class="collage-text-wrap">
            <p class="collage-title">{{ collages[9].title }}</p>
            <p class="collage-year">{{ collages[9].year }}</p>
          </div>
        </div>
      </li>
      <li class="collages-list-item two">
        <div class="collage-wrap two">
          <div class="collage-wrap third">
            <img :src="collages[10].src" alt="колаж" class="collage-img collage-img-10" @click="toggleShowCarousel" data-index="10" />
            <div class="collage-text-wrap two">
              <p class="collage-title">{{ collages[10].title }}</p>
              <p class="collage-year">{{ collages[10].year }}</p>
            </div>
          </div>
          <div class="collage-wrap">
            <DecorativeElement5 class="collage-icon collage-icon-6" />
            <img :src="collages[11].src" alt="колаж" class="collage-img collage-img-11" @click="toggleShowCarousel" data-index="11" />
            <div class="collage-text-wrap">
              <p class="collage-title">{{ collages[11].title }}</p>
              <p class="collage-year">{{ collages[11].year }}</p>
            </div>
          </div>
        </div>
      </li>
      <li class="collages-list-item two">
        <div class="collage-wrap two">
          <div class="collage-wrap third">
            <img :src="collages[12].src" alt="колаж" class="collage-img collage-img-12" @click="toggleShowCarousel" data-index="12" />
            <div class="collage-text-wrap two">
              <p class="collage-title">{{ collages[12].title }}</p>
              <p class="collage-year">{{ collages[12].year }}</p>
            </div>
          </div>
          <div class="collage-wrap">
            <DecorativeElement5 class="collage-icon collage-icon-6" />
            <img :src="collages[13].src" alt="колаж" class="collage-img collage-img-13" @click="toggleShowCarousel" data-index="13" />
            <div class="collage-text-wrap">
              <p class="collage-title">{{ collages[13].title }}</p>
              <p class="collage-year">{{ collages[13].year }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <p class="gratitude">
      Дякуємо <a href="https://parajanovmuseum.am/" target="_blank" noopener noreferrer nofollow>музею Сергія Параджанова</a> у Єревані, який ласкаво надав нам фотографії колажів великого митця.
    </p>
    <Carousel :show="showCarousel" :onCloseBtnClick="toggleShowCarousel" :slides="collages" :targetIndex="targetIndex" />
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

.collage-icon-6 {
  position: absolute;
  top: -23px;
  left: 128px;
}

.collage-img-9 {
  width: 307px;
  height: 316px;
}

.collage-img-10 {
  width: 242px;
  height: 356px;
}

.collage-img-11 {
  width: 269px;
  height: 386px;
}

.gratitude {
  margin-top: 48px;
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
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

  .collage-icon-6 {
    position: absolute;
    top: -23px;
    left: 103px;
  }

  .collage-img-9 {
    width: 261px;
    height: 269px;
  }

  .collage-img-10 {
    width: 260px;
    height: 386px;
  }

  .collage-img-11 {
    width: 229px;
    height: 328px;
  }

  .collage-img-12 {
    width: 212px;
    height: 319px;
  }

  .collage-img-13 {
    width: 232px;
    height: 348px;
  }

  .gratitude {
    width: 419px;
    margin-top: 72px;
    margin-left: auto;
  }

  .gratitude > a {
    color: currentColor;
    text-decoration: underline;
  }
}

@media screen and (max-width: 1280px) {
  .container {
    width: 100%;
    max-width: 343px;
    margin-left: auto;
    margin-right: auto;
  }

  .collage-icon-4.mobile {
    top: -128px;
    left: 100%;
    transform: translateX(-100%);
  }

  .title-icon.desk {
    display: none;
  }

  .title-icon.desc {
    display: none;
  }

  .collages-list-item.collage-7 {
    margin-top: 176px;
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
