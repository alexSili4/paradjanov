<script setup>
import NavBar from 'components/NavBar.vue';
import ParajanovsLife from 'components/ParajanovsLife.vue';
import ShadowsOfForgottenAncestors from 'components/ShadowsOfForgottenAncestors.vue';
import { cards } from 'constants';
import { ref, onMounted, computed } from 'vue';
import { getPositionProps, getContentGeometry, getScale, getScaleOnResizeWindow } from 'utils';
import InspiredByParajanov from 'components/InspiredByParajanov.vue';
import TastePreferences from 'components/TastePreferences.vue';
import GlassesFromSilpo from 'components/GlassesFromSilpo.vue';
import IngeniousCollages from 'components/IngeniousCollages.vue';
import GarnetColor from 'components/GarnetColor.vue';
import CardArticle from 'components/CardArticle.vue';

const props = defineProps({
  isDesk: {
    type: Boolean,
    required: true,
  },
});

document.addEventListener('mouseup', onMouseUp);
document.addEventListener('touchend', onTouchend);
window.addEventListener('resize', onResizeWindow);

const mapRef = ref(null);
const mapOriginalWidthRef = ref(null);
const mapOriginalHeightRef = ref(null);
const showAllMap = ref(false);
const offsetXRef = ref(0);
const offsetYRef = ref(0);
const prevLeftRef = ref(0);
const prevTopRef = ref(0);
const leftRef = ref(0);
const topRef = ref(0);
const scaleRef = ref(1);
const isDraggableRef = ref(false);
const activeArticle = ref(null);

onMounted(() => {
  const targetElement = mapRef.value;
  const { height, width } = getContentGeometry(targetElement);
  mapOriginalWidthRef.value = width;
  mapOriginalHeightRef.value = height;
});

function onResizeWindow() {
  const targetElement = mapRef.value;
  const { innerHeight } = window;
  const { height } = getContentGeometry(targetElement);
  const gap = topRef.value + height - innerHeight;

  if (gap <= 0) {
    const { top } = getContentGeometry(targetElement);
    topRef.value = top - gap;
  }

  if (scaleRef.value !== 1) {
    const scale = getScaleOnResizeWindow({
      width: mapOriginalWidthRef.value,
      height: mapOriginalHeightRef.value,
    });

    scaleRef.value = scale;
    topRef.value = 0;
    leftRef.value = 0;
  }
}

function onMouseMove(e) {
  isDraggableRef.value = true;
  const targetElement = mapRef.value;
  const { clientX, clientY } = e;
  const { shouldUpdatePositionTop, shouldUpdatePositionLeft, leftPosition, topPosition } = getPositionProps({
    element: targetElement,
    offsetY: offsetYRef.value,
    offsetX: offsetXRef.value,
    clientX,
    clientY,
  });

  if (shouldUpdatePositionLeft) {
    leftRef.value = leftPosition;
  }

  if (shouldUpdatePositionTop) {
    topRef.value = topPosition;
  }
}

function onMouseDown(e) {
  if (activeArticle.value) {
    return;
  }

  const targetElement = mapRef.value;
  const { left, top } = getContentGeometry(targetElement);
  const { clientX, clientY } = e;

  document.addEventListener('mousemove', onMouseMove);
  offsetXRef.value = clientX - left;
  offsetYRef.value = clientY - top;
}

function onTouchmove(e) {
  if (activeArticle.value) {
    return;
  }

  const targetElement = mapRef.value;
  const { clientX, clientY } = e.changedTouches[0];
  const { shouldUpdatePositionTop, shouldUpdatePositionLeft, leftPosition, topPosition } = getPositionProps({
    element: targetElement,
    offsetY: offsetYRef.value,
    offsetX: offsetXRef.value,
    clientX,
    clientY,
  });

  if (shouldUpdatePositionLeft) {
    leftRef.value = leftPosition;
  }

  if (shouldUpdatePositionTop) {
    topRef.value = topPosition;
  }
}

function onTouchstart(e) {
  const targetElement = mapRef.value;
  isDraggableRef.value = true;
  const { left, top } = getContentGeometry(targetElement);
  const { clientX, clientY } = e.changedTouches[0];

  document.addEventListener('touchmove', onTouchmove);
  offsetXRef.value = clientX - left;
  offsetYRef.value = clientY - top;
}

function onMouseUp() {
  document.removeEventListener('mousemove', onMouseMove);
  isDraggableRef.value = false;
}

function onTouchend() {
  document.removeEventListener('touchmove', onMouseMove);
  isDraggableRef.value = false;
}

const onCloseArticleBtnClick = (e) => {
  e.currentTarget.blur();
  activeArticle.value = null;
};

const onCardBtnClick = (e) => {
  e.currentTarget.blur();
  const { cardId } = e.currentTarget.dataset;
  activeArticle.value = cardId;
};

const toggleShowAllMap = (e) => {
  e.currentTarget.blur();
  showAllMap.value = !showAllMap.value;

  if (showAllMap.value) {
    prevLeftRef.value = leftRef.value;
    prevTopRef.value = topRef.value;
  }

  const scale = showAllMap.value ? getScale(mapRef.value) : 1;
  scaleRef.value = scale;

  topRef.value = showAllMap.value ? 0 : prevTopRef.value;
  leftRef.value = showAllMap.value ? 0 : prevLeftRef.value;
};

const getMapInlineStyles = () => {
  const scale = props.isDesk ? scaleRef.value : 1;
  const cursor = activeArticle.value ? 'auto' : 'move';

  return {
    top: `${topRef.value}px`,
    left: `${leftRef.value}px`,
    cursor: isDraggableRef.value ? 'grabbing' : cursor,
    transform: `scale(${scale})`,
  };
};

const getMapClassNames = () => ['map', { 'map-transform': !isDraggableRef.value }];

const mapInlineStyles = computed(getMapInlineStyles);
const mapClassNames = computed(getMapClassNames);
</script>

<template>
  <div class="map-container">
    <ul :class="mapClassNames" @mousedown="onMouseDown" @touchstart="onTouchstart" ref="mapRef" :style="mapInlineStyles">
      <ParajanovsLife :isDesk="isDesk" :card="cards[0]" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggableRef" />
      <ShadowsOfForgottenAncestors :card="cards[1]" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggableRef" />
      <InspiredByParajanov :card="cards[2]" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggableRef" />
      <TastePreferences :card="cards[3]" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggableRef" />
      <GlassesFromSilpo :card="cards[4]" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggableRef" />
      <IngeniousCollages :card="cards[5]" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggableRef" />
      <GarnetColor :card="cards[6]" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggableRef" />
    </ul>
  </div>
  <NavBar :cards="cards" :toggleShowAllMap="toggleShowAllMap" :isDesk="isDesk" />
  <CardArticle :isShow="Boolean(activeArticle)" :onCloseBtnClick="onCloseArticleBtnClick"
    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aspernatur quaerat doloremque perferendis rerum tempore, voluptatibus quasi tempora? Vero ipsa eius eos labore impedit architecto ut
    totam quod officia! Ipsa veritatis obcaecati quos id sequi maiores sunt, eius, minima nam labore blanditiis itaque ipsam. Facilis maxime consectetur nisi quis nostrum doloremque nemo laboriosam
    deleniti, eum vitae. Aspernatur cumque recusandae optio ratione animi libero excepturi ea similique, corrupti quo accusantium quas pariatur maiores nam distinctio. Iusto velit officiis numquam
    voluptates error a illum placeat pariatur consequatur atque aliquid voluptate deserunt voluptatibus voluptas architecto nam quis quidem itaque, molestias quod minima? Aliquid vel laudantium
    repellat cumque magnam totam, minima repellendus suscipit numquam excepturi vero illo ex tempore fuga ad odio eum sequi cupiditate eaque rerum, iste hic ipsum? Cumque distinctio dignissimos
    praesentium numquam porro, id consequatur nesciunt velit maiores dolores ipsam sed deserunt minus. Error quis eaque animi obcaecati rerum eius, veniam doloremque, adipisci facilis voluptates
    beatae voluptas. Veniam, voluptatem? Error veritatis iure est iusto a optio molestias omnis facere! Pariatur consequuntur excepturi, placeat nihil tempore explicabo quos fuga nesciunt voluptatem,
    neque distinctio quia quasi, soluta vitae voluptates aliquid repellendus architecto quam beatae. Neque facere voluptas exercitationem aliquid delectus, dolores est voluptatibus nisi excepturi
    quibusdam voluptate velit sequi fuga eligendi ipsam laborum rerum molestiae aspernatur earum, numquam aut. Facilis ut, tenetur assumenda sapiente in sed. Officiis, fuga. Voluptatum odit voluptas
    mollitia quasi sapiente similique officia aut a. Consequuntur est, quo ipsa veniam iure reprehenderit atque autem esse adipisci voluptatibus magni in nemo fuga ad officiis reiciendis ut
    praesentium porro, nostrum cupiditate sint magnam quasi. Veniam, quibusdam suscipit consequatur animi voluptatibus odio dolores perferendis laboriosam possimus. Quod laudantium sed ratione
    aspernatur consequuntur voluptates id minus doloribus reiciendis veniam qui necessitatibus optio, dolorem, temporibus laboriosam ab ad, vero repudiandae et assumenda nulla! Perferendis tempore
    provident et quia dolores! Ex praesentium delectus blanditiis mollitia eligendi eius perspiciatis commodi, soluta quas, provident ratione nulla saepe consequuntur ut libero esse velit? Nesciunt
    delectus odit assumenda eveniet dicta fuga quae, repudiandae enim explicabo molestias harum repellat non quibusdam optio numquam impedit nisi, at excepturi. Architecto illum numquam, id deserunt
    nesciunt nostrum? Velit libero exercitationem dignissimos hic maxime unde dolorem laborum debitis minus consequatur magni modi saepe quod id, natus autem eligendi quas earum! Amet, neque. Animi
    nesciunt corporis nostrum labore accusantium doloremque molestiae eligendi sunt modi quos minus distinctio, nam rem aspernatur tenetur? Reprehenderit, omnis. Nihil repellat quisquam iusto in quia
    totam ut asperiores reprehenderit modi tempore, molestiae nesciunt. Unde maxime in corrupti autem iure aliquid amet necessitatibus reprehenderit totam fugiat, explicabo eligendi illum veniam natus
    voluptas quae cum! Incidunt eum aliquid nisi accusamus non temporibus tempore voluptatum provident iure voluptas autem cum ab, excepturi quibusdam numquam praesentium ipsam deserunt tempora
    repellat. Amet blanditiis corporis voluptas eveniet dolores similique quasi molestias quae totam odit quisquam maxime iste omnis suscipit architecto fuga, nobis voluptate itaque officiis maiores
    quis sunt perspiciatis nulla. In totam accusantium quam porro modi facere id rerum natus sit. Tempora quae itaque optio dolorum dolores amet suscipit corrupti officiis dolore corporis totam ipsa
    voluptatem, aliquid recusandae nisi fuga! Distinctio aspernatur doloremque aut illum, quia nesciunt eligendi tempore perspiciatis ipsum ipsam quidem, ad asperiores quisquam officiis deserunt
    sapiente sed fuga, ex beatae omnis esse praesentium. Neque, a! Inventore, rem. Aliquam cum excepturi molestias repellat porro sed labore officiis earum magni quis? Inventore id, suscipit eaque et
    excepturi nemo adipisci dolor totam, similique fugiat voluptates aliquam ratione, fugit explicabo natus ea cum optio eveniet mollitia voluptatem tempora ipsum temporibus! Quia delectus illum ut
    suscipit! Commodi placeat autem ipsam non corrupti tempora eveniet illo numquam rerum cumque excepturi voluptatum dolor, recusandae est voluptatibus aspernatur omnis molestiae accusantium officiis
    blanditiis quam rem. Ratione, iure numquam nam, nihil modi, maiores exercitationem itaque libero rerum neque architecto! Earum cum quibusdam hic, obcaecati accusantium distinctio rem maiores minus
    harum veniam aperiam sapiente explicabo temporibus, delectus necessitatibus. Quae iusto minima, et architecto ipsa neque dignissimos quo id consectetur aut illum laboriosam aliquam maiores, atque
    veniam obcaecati est amet, nihil dolor? Nostrum tempora laboriosam, libero quo enim numquam obcaecati commodi exercitationem iure eos dolor, dolorum natus quod! Repellendus earum rem numquam
    dolorem hic laudantium neque, soluta deserunt, quos fugiat vitae natus sunt! Aliquid expedita officia facilis blanditiis, architecto et nesciunt voluptatum. Incidunt iure architecto labore aliquid
    accusamus necessitatibus ut iste velit dolorem? Itaque est tempore exercitationem hic unde nobis numquam at nesciunt! Repudiandae dignissimos perferendis ipsam nihil obcaecati in explicabo dolores
    veniam commodi ullam atque, ipsa, aliquam error aperiam beatae vitae recusandae at tenetur nisi pariatur id eius doloremque. Porro labore velit est nihil, nesciunt distinctio libero voluptate
    optio. Officia assumenda eaque, sed est totam laborum itaque quidem aliquam earum. Labore dicta qui quam minus optio, placeat libero earum sequi magnam, consectetur dolores facere numquam aliquid
    cumque officiis, dolorem consequatur iste non ab. Deserunt omnis at officia vel asperiores id in consectetur veritatis, nemo sit doloremque recusandae labore illo voluptatibus modi incidunt error
    ullam odit? Officiis esse sapiente maiores velit dolore! Magnam, eos quo a culpa quaerat minima nisi, eum accusamus quis officia sapiente nam illo voluptatum facilis quod expedita! Rerum accusamus
    ex aliquam distinctio asperiores dicta atque vel, dolorem sit quidem sequi dolorum mollitia cupiditate magnam quas placeat voluptates. Amet omnis asperiores sapiente voluptas blanditiis quam
    repudiandae voluptate tempora ullam illum placeat quod reiciendis consequatur, atque ad molestiae modi. Similique molestiae officia eligendi quis reiciendis est amet tempore, quidem perferendis
    aliquid veniam repellat sint quasi natus totam ipsum ullam accusamus adipisci sequi enim voluptatem cupiditate. Itaque non voluptates dicta commodi accusamus nostrum modi totam est animi? Facilis
    nobis corrupti debitis incidunt odio quas cum, quae modi eaque, dignissimos architecto id expedita voluptate nulla, tenetur alias fuga voluptates veniam. Dolores, tenetur! Expedita autem impedit
    ad optio, deserunt hic nisi eligendi aspernatur fuga animi consectetur quos aperiam explicabo esse ex ratione deleniti amet atque laudantium quisquam aliquam velit nobis quaerat. Aut veritatis
    tenetur nisi, odit eveniet alias quam minima rem cum, hic illum cumque? Consectetur ullam, ipsa perferendis facere magni earum accusantium autem soluta natus architecto.</CardArticle
  >
</template>

<style scoped>
.map-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.map {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 2669.77px;
  height: 1380px;
  background-image: url('icons/map/path-06-mobile.svg'), url('icons/map/path-05-mobile.svg'), url('icons/map/path-04-mobile.svg'), url('icons/map/path-03-mobile.svg'),
    url('icons/map/path-02-mobile.svg'), url('icons/map/path-01-mobile.svg'), url('icons/map/inscriptions-mobile.svg'), url('icons/map/stars-mobile.svg'), url('images/map/map-bg-mobile.jpg');
  background-size:
    375.2px 417.94px,
    698.4px 412.39px,
    404.39px 563.63px,
    1017.89px 206.34px,
    372.94px 343.74px,
    697.1px 455.62px,
    2669.77px 1380px,
    2670px 1380px,
    2669.77px 1380px;
  background-position:
    top 715.87px left 1913.33px,
    top 214.53px left 1759.11px,
    top 388.3px left 1346.96px,
    top 1087.92px left 448.07px,
    top 679.18px left 526.26px,
    top 212.73px left 425.07px,
    0 0,
    0 0,
    0 0;
  background-repeat: no-repeat;
  transform-origin: left top;
}

.map-transform {
  transition:
    top var(--smooth-transition),
    left var(--smooth-transition),
    transform var(--smooth-transition);
}

@media screen and (min-width: 1280px) {
  .map {
    width: 6243px;
    height: 3227px;
    background-image: url('icons/map/path-06-desk.svg'), url('icons/map/path-05-desk.svg'), url('icons/map/path-04-desk.svg'), url('icons/map/path-03-desk.svg'), url('icons/map/path-02-desk.svg'),
      url('icons/map/path-01-desk.svg'), url('icons/map/inscriptions-desk.svg'), url('icons/map/stars-desk.svg'), url('images/map/map-bg-desk.jpg');
    background-size:
      877.36px 977.32px,
      1633.13px 964.34px,
      945.62px 1318px,
      2380.24px 482.51px,
      872.08px 803.8px,
      1630.1px 1065.43px,
      6243px 3227px,
      6244px 3228px,
      6243px 3227px;
    background-position:
      top 1674px left 4474.14px,
      top 501.67px left 4113.5px,
      top 908px left 3149.75px,
      top 2544px left 1047.76px,
      top 1588.2px left 1230.61px,
      top 497.46px left 994px,
      0 0,
      0 0,
      0 0;
  }
}
</style>
