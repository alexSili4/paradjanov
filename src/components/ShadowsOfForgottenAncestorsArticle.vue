<script setup>
import ArticleTitleIconDesk from 'icons/cardArticle/article-title-icon-desk.svg?component';
import ArticleTitleIconMobile from 'icons/cardArticle/article-title-icon-mobile.svg?component';
import poster from 'images/parajanovsLife/poster.jpg';
</script>

<template>
  <div class="container">
    <div class="title-wrap">
      <div class="title-icon-wrap">
        <p class="title-icon-number">2</p>
        <ArticleTitleIconMobile class="title-icon mobile" />
        <ArticleTitleIconDesk class="title-icon desk" />
      </div>
      <p class="title-text">Тіні забутих предків</p>
    </div>
    <div class="article">
      <p class="article-title">«Візитівка» українського кіно</p>
      <p class="article-text">
        Перша хвиля світової популярності прийшла до Сергія Параджанова після виходу стрічки «Тіні забутих предків» (1964). Цей фільм є екранізацією однойменної повісті Михайла Коцюбинського про
        карпатських Ромео і Джульєтту, яким ворожнеча двох сімей заважала возз'єднатися
      </p>
    </div>
    <div class="video-wrap">
      <p class="video-title">Цікаві факти про стрічку</p>
      <iframe
        class="video"
        src="https://www.youtube.com/embed/26Bw-6ENF_E"
        title="Про стрічку «Тіні забутих предків» у проєкті «Натхнені Параджановим» від «Сільпо»"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <p class="article-text end">
      Стрічка отримала 39 міжнародних нагород та викликала великий інтерес за кордоном. Спочатку в Україні Параджанова проголосили головним національним режисером, співаком «українськості». За це ж
      згодом його посадили за ґрати.
    </p>
    <div class="quote-wrap">
      <p class="quote">Я помщуся світові любов'ю</p>
      <p class="name">- Параджанов</p>
    </div>
    <div class="poster-wrap">
      <img :src="poster" alt="Плакат до фільму «Тіні забутих предків»" class="poster-img" />
      <p class="poster-title">Плакат до фільму «Тіні забутих предків», намальований Параджановим у 1974-1977 роках.</p>
      <p class="poster-desc">Фото надано музеєм Сергія Параджанова в Єревані.</p>
    </div>
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

.video-container {
  flex-shrink: 0;
}

.video {
  width: 100%;
  height: 576.69px;
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

.article-text.end {
  margin-top: 48px;
}

.video-wrap {
  margin-top: 48px;
}

.video-title {
  color: #373730;
  font-family: Shnobel;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.video-container {
  flex-shrink: 0;
  display: block;
}

.video {
  width: 100%;
  height: 576.69px;
}

.quote-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 209px;
  margin-top: 48px;
  background-size: 100% 209px;
  background-image: url('icons/shadowsOfForgottenAncestors/quote-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: 0 0;
}

.quote {
  color: #373730;
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  text-align: center;
}

.name {
  color: #373730;
  font-family: Geologica;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.4;
  text-align: center;
}

.poster-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
}

.poster-title {
  color: rgb(55, 55, 48);
  font-family: Geologica;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}

.poster-desc {
  color: rgb(55, 55, 48);
  font-family: Geologica;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}

@media screen and (min-width: 1280px) {
  .title-wrap {
    justify-content: space-between;
  }

  .title-icon-number {
    top: 19px;
    left: 59px;
    font-size: 36.17px;
  }

  .title-text {
    width: 420px;
    font-size: 72px;
  }

  .title-icon.mobile {
    display: none;
  }

  .article {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 44px;
  }

  .article-text {
    flex-shrink: 0;
    width: 419px;
  }

  .article-text.end {
    margin-top: 72px;
    margin-left: auto;
  }

  .video-wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 72px;
  }

  .video-title {
    align-self: flex-end;
    flex-shrink: 0;
    width: 167px;
  }

  .video-container {
    width: 419px;
  }

  .video {
    width: 419px;
    height: 612px;
  }

  .quote-wrap {
    gap: 24px;
    height: 207px;
    background-size: 100% 207px;
    background-image: url('icons/shadowsOfForgottenAncestors/quote-bg-desk.svg');
    margin-top: 72px;
  }

  .poster-wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 419px;
    margin-top: 24px;
    margin-left: auto;
  }
}

@media screen and (max-width: 1280px) {
  .container {
    width: 100%;
    max-width: 343px;
    margin-left: auto;
    margin-right: auto;
  }

  .title-icon.desk {
    display: none;
  }

  .video {
    margin-top: 16px;
  }
}
</style>
