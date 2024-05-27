<script setup>
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
      <p class="title-text">Колір граната</p>
    </div>
    <div class="article">
      <p class="article-title">Унікальна естетика стрічки</p>
      <p class="article-text">
        «Колір граната» (1968) - поетична кінопритча, що розповідає про життя видатного вірменського поета Саят-Нову. Цей кіношедевр став візитівкою Параджанова та одним із найкрасивіших фільмів
        світового кінематографу.
      </p>
    </div>
    <p class="article-text end">
      «Колір граната» є найбільш цитованим кінотвором режисера, бо кожен кадр стрічки заворожує своєю естетикою - кольором, ритмом, фактурою. Численні посилання на цей шедевр можна побачити,
      наприклад, у кліпах: «Bedtime Story» Мадонни та «911» американської співачки Леді Гаги, в якому відтворено цілі сцени з цього параджанівського шедевру.
    </p>
    <div class="video-wrap">
      <p class="video-title">Цікаві факти з життя майстра</p>
      <div class="video-container">
        <video class="video" controls loop preload="auto"></video>
        <!-- src="@/video/parajanovsLife.webm"  -->
      </div>
    </div>
    <div class="quote-wrap">
      <p class="quote">Мною все життя рухає заздрість. Я заздрив красивим — і став привабливим, я заздрив розумним — і став несподіваним</p>
      <p class="name">- Параджанов</p>
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
  left: 40px;
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
  margin-bottom: 32px;
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
  margin-top: 80px;
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
  height: 236px;
  margin-top: 80px;
  background-size: 100% 236px;
  background-image: url('icons/garnetColor/quote-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: 0 0;
}

.quote {
  width: 279px;
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
  }

  .video {
    width: 365px;
    height: 612px;
  }

  .quote-wrap {
    gap: 24px;
    height: 222px;
    background-size: 100% 222px;
    background-image: url('icons/garnetColor/quote-bg-desk.svg');
  }

  .quote {
    width: 409px;
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
