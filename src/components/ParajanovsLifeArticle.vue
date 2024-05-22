<script setup>
import ArticleTitleIconDesk from 'icons/cardArticle/article-title-icon-desk.svg?component';
import ArticleTitleIconMobile from 'icons/cardArticle/article-title-icon-mobile.svg?component';
</script>

<template>
  <div class="container">
    <div class="title-wrap">
      <div class="title-icon-wrap">
        <p class="title-icon-number">1</p>
        <ArticleTitleIconMobile class="title-icon mobile" />
        <ArticleTitleIconDesk class="title-icon desk" />
      </div>
      <p class="title-text">жИТТЯ ПАРАДЖАНОВА</p>
    </div>
    <div class="article">
      <p class="article-title">100 років з дня народження</p>
      <p class="article-text">
        100 років тому народився Сергій Параджанов - видатний український та вірменський кінорежисер, автор легендарних «Тіней забутих предків», які посідають 1-ше місце у списку 100 найкращих
        українських фільмів
      </p>
    </div>
    <p class="article-text end">
      Але крім того, він геній і провокатор, що вигадав свою альтернативну біографію, згідно з якою він є нащадком грузинських князів, за життя товаришував з англійською королевою Єлизаветою; торгував
      діамантами, які отримував від Папи Римського, був рідним братом Федеріко Фелліні. І все це чиста правда, бо Параджанов не вмів вигадувати нічого, окрім правди
    </p>
    <div class="video-wrap">
      <p class="video-title">Цікаві факти з життя майстра</p>
      <div class="video-container">
        <video class="video" controls loop preload="auto"></video>
        <!-- src="@/video/parajanovsLife.webm"  -->
      </div>
    </div>
    <div class="quote-wrap">
      <p class="quote">Я - вірменин, який народився у Тбілісі й сидів у російській в&#8217;язниці за український<br />націоналізм</p>
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
  background-image: url('icons/parajanovsLife/quote-bg-mobile.svg');
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
    top: 20px;
    left: 66px;
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
    background-image: url('icons/parajanovsLife/quote-bg-desk.svg');
  }

  .quote {
    width: 409px;
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

  .video {
    margin-top: 16px;
  }
}
</style>
