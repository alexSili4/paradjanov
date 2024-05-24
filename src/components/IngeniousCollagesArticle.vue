<script setup>
import collage1 from 'images/ingeniousCollages/collage1.jpg';
import collage2 from 'images/ingeniousCollages/collage2.jpg';
import collage3 from 'images/ingeniousCollages/collage3.jpg';
import collage4 from 'images/ingeniousCollages/collage4.jpg';
import collage5 from 'images/ingeniousCollages/collage5.jpg';
import collage6 from 'images/ingeniousCollages/collage6.jpg';
import collage7 from 'images/ingeniousCollages/collage7.jpg';
import collage8 from 'images/ingeniousCollages/collage8.jpg';
import collage9 from 'images/ingeniousCollages/collage9.jpg';
import DecorativeElement1 from 'icons/ingeniousCollages/collage-decorative-elem-1.svg?component';
import DecorativeElement2 from 'icons/ingeniousCollages/collage-decorative-elem-2.svg?component';
import DecorativeElement3 from 'icons/ingeniousCollages/collage-decorative-elem-3.svg?component';
import DecorativeElement4Desk from 'icons/ingeniousCollages/collage-decorative-elem-4-desk.svg?component';
import DecorativeElement4Mobile from 'icons/ingeniousCollages/collage-decorative-elem-4-mobile.svg?component';
import ArticleTitleIconDesk from 'icons/cardArticle/article-title-icon-desk.svg?component';
import ArticleTitleIconMobile from 'icons/cardArticle/article-title-icon-mobile.svg?component';
</script>

<template>
  <div class="container">
    <div class="title-wrap">
      <div class="title-icon-wrap">
        <p class="title-icon-number">7</p>
        <ArticleTitleIconMobile class="title-icon mobile" />
        <ArticleTitleIconDesk class="title-icon desk" />
      </div>
      <p class="title-text">Геніальні колажі</p>
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
          <DecorativeElement1 class="collage-icon collage-icon-2" />
          <DecorativeElement2 class="collage-icon collage-icon-3" />
          <img :src="collage1" alt="колаж" class="collage-img collage-img-1" />
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
            <img :src="collage2" alt="колаж" class="collage-img collage-img-2" />
            <div class="collage-text-wrap two">
              <p class="collage-title">Назва Колажа №2</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
          <div class="collage-wrap">
            <img :src="collage3" alt="колаж" class="collage-img collage-img-3" />
            <div class="collage-text-wrap">
              <p class="collage-title">Назва Колажа №3</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
        </div>
      </li>
      <li class="collages-list-item">
        <div class="collage-wrap">
          <img :src="collage4" alt="колаж" class="collage-img collage-img-4" />
          <div class="collage-text-wrap">
            <p class="collage-title">Назва Колажа №4</p>
            <p class="collage-year">1967 рік</p>
          </div>
        </div>
      </li>
      <li class="collages-list-item two">
        <div class="collage-wrap two">
          <div class="collage-wrap">
            <img :src="collage5" alt="колаж" class="collage-img collage-img-5" />
            <div class="collage-text-wrap two">
              <p class="collage-title">Назва Колажа №5</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
          <div class="collage-wrap">
            <DecorativeElement3 class="collage-icon collage-icon-3" />
            <img :src="collage6" alt="колаж" class="collage-img collage-img-6" />
            <div class="collage-text-wrap">
              <p class="collage-title">Назва Колажа №6</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
        </div>
      </li>
      <li class="collages-list-item">
        <div class="collage-wrap">
          <DecorativeElement4Desk class="collage-icon collage-icon-4 desk" />
          <DecorativeElement4Mobile class="collage-icon collage-icon-4 mobile" />
          <img :src="collage7" alt="колаж" class="collage-img collage-img-7" />
          <div>
            <p>Назва Колажа №7</p>
            <p>1967 рік</p>
          </div>
        </div>
      </li>
      <li class="collages-list-item two">
        <div class="collage-wrap two">
          <div class="collage-wrap">
            <DecorativeElement3 class="collage-icon collage-icon-3" />
            <img :src="collage8" alt="колаж" class="collage-img collage-img-8" />
            <div class="collage-text-wrap two">
              <p class="collage-title">Назва Колажа №8</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
          <div class="collage-wrap">
            <img :src="collage9" alt="колаж" class="collage-img collage-img-9" />
            <div class="collage-text-wrap two">
              <p class="collage-title">Назва Колажа №9</p>
              <p class="collage-year">1967 рік</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
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

.mobile {
}
.desk {
}
.title-text {
}
.article {
}
.article-title {
}
.article-text {
}
.collages-list {
}
.collages-list-item {
}
.collage-wrap {
}
.collage-icon {
}
.collage-icon-2 {
}
.collage-icon-3 {
}
.collage-img {
}
.collage-img-1 {
}
.collage-text-wrap {
}
.collage-title {
}
.collage-year {
}
.two {
}
.collage-img-2 {
}
.collage-img-3 {
}
.collage-img-4 {
}
.collage-img-5 {
}
.collage-img-6 {
}
.collage-icon-4 {
}
.collage-img-7 {
}
.collage-img-8 {
}
.collage-img-9 {
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
}
</style>
