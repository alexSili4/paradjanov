<script setup>
import ArticleTitleIconDesk from 'icons/cardArticle/article-title-icon-desk.svg?component';
import ArticleTitleIconMobile from 'icons/cardArticle/article-title-icon-mobile.svg?component';
</script>

<template>
  <div class="container">
    <div class="title-wrap">
      <div class="title-icon-wrap">
        <p class="title-icon-number">4</p>
        <ArticleTitleIconMobile class="title-icon mobile" />
        <ArticleTitleIconDesk class="title-icon desk" />
      </div>
      <p class="title-text">Смакові вподобання</p>
    </div>
    <div class="article">
      <p class="article-title">Їжа як мистецтво</p>
      <p class="article-text">
        Сергій Параджанов - найгастрономічніший режисер світового кіно. Про їжу він вмів говорити й показувати так, як мало хто. В іншу епоху схоже смакуватиме страви у своїх фільмах лише Квентін
        Тарантіно. Але американець живописав бургери, колу, картоплю фрі, молочні коктейлі. А Сергій Параджанов - яблука, рибу, хліб, сир, гранат.
      </p>
    </div>
    <div class="video-wrap">
      <p class="video-title">Про їжу у кіно і в житті</p>
      <div class="video-container">
        <iframe
          class="video"
          src="https://www.youtube.com/embed/as6YmuevjUo"
          title="Про смакові вподобання Сергія Параджанова у проєкті «Натхнені Параджановим» від «Сільпо»"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="article end">
      <p class="article-title">Більше, ніж просто їжа</p>
      <p class="article-text">
        Їжа була для нього сакральною на екрані і в побуті. Якось сусідка принесла Сергію каструлю з м'ясом та картоплею. Режисер царським жестом відіслав її назад. За кілька хвилин сусідка
        повернулася знову, цього разу вона прикрасила страву зеленню, а зверху встромила… троянду!<br />«Це інша справа», - сказав Параджанов і вдячно прийняв страву з рук жінки.
      </p>
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
}

.article.end {
  margin-top: 48px;
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

@media screen and (min-width: 1280px) {
  .title-wrap {
    justify-content: space-between;
  }

  .title-icon-number {
    top: 19px;
    left: 58px;
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

  .article.end {
    margin-top: 72px;
  }

  .article-title {
    width: 173px;
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
    width: 365px;
    height: 612px;
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
