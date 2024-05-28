<script setup>
import ArticleTitleIconDesk from 'icons/cardArticle/article-title-icon-desk.svg?component';
import ArticleTitleIconMobile from 'icons/cardArticle/article-title-icon-mobile.svg?component';
</script>

<template>
  <div class="container">
    <div class="title-wrap">
      <div class="title-icon-wrap">
        <p class="title-icon-number">3</p>
        <ArticleTitleIconMobile class="title-icon mobile" />
        <ArticleTitleIconDesk class="title-icon desk" />
      </div>
      <p class="title-text">Натхнені Параджановим</p>
    </div>
    <div class="article">
      <p class="article-title">Вплив на попкультуру</p>
      <p class="article-text">Сергій Параджанов і попкультура перебувають у доволі тісних відносинах. Режисери, кліпмейкери та митці постійно надихаються творчістю Параджанова.</p>
    </div>
    <div class="video-wrap">
      <div class="video-container">
        <iframe
          class="video"
          src="https://www.youtube.com/embed/GPabBaL_fCY"
          title="Про митців, натхнених Параджановим, у проєкті «Натхнені Параджановим» від «Сільпо»"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="quote-wrap">
      <p class="quote">Найстрашніше — проґавити прекрасне!</p>
      <p class="name">- Параджанов</p>
    </div>
    <div class="article">
      <p class="article-title">Натхненник для митців</p>
      <p class="article-text">
        Посилання на його кінотвори нескладно віднайти в кліпах Девіда Бові «Black star» та Леді Гаги «911», а також у першому сезоні культового серіалу HBO «Справжній детектив» Кері Фукунаґи та Ніка
        Піццолато.
      </p>
    </div>
    <p class="article-text end">
      Ще в середині 1990-х ікона попмузики - Мадонна зняла експериментальне музичне відео на пісню «Bedtime Story» з бюджетом 5 мільйонів доларів, яке нашпиговане «відеоцитатами» з «Кольору граната».
    </p>
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
  width: 212px;
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
  margin-top: 24px;
  background-size: 100% 209px;
  background-image: url('icons/inspiredByParajanov/quote-bg-mobile.svg');
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

@media screen and (min-width: 1280px) {
  .title-wrap {
    justify-content: space-between;
  }

  .title-icon-number {
    top: 19px;
    left: 61px;
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
    margin-bottom: 24px;
  }

  .article-text {
    flex-shrink: 0;
    width: 419px;
  }

  .article-text.end {
    margin-left: auto;
  }

  .video-wrap {
    display: flex;
    justify-content: space-between;
  }

  .video-title {
    flex-shrink: 0;
    width: 167px;
  }

  .video-container {
    width: 419px;
    margin-left: auto;
  }

  .video {
    width: 365px;
    height: 612px;
  }

  .quote-wrap {
    gap: 24px;
    height: 207px;
    background-size: 100% 207px;
    background-image: url('icons/inspiredByParajanov/quote-bg-desk.svg');
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
