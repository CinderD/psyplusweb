<template>
    <PageFront />
    <AnimationPage />
    <PsyPlusBot />
    <MoreFeatures />
    <ReviewsPage />
    <router-view/>
    <!-- <div @click="goToSubscriptionPage">Page A</div> -->
    <a-layout class="layout" :style="{background:'rgb(0, 0, 0)',backgroundSize: 'cover'}">
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px', height: 'calc(50vh)', }">

      <div :style="{ marginBottom: 'calc(40vh)', minHeight: 'calc(10vh)' }">
        <a-button ghost @click="goToSubscriptionPage" :style="{height: 'calc(15vh)', width: 'calc(70vh)'}">
            <h1 :style="{color: '#D582D1', fontSize: '60px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', marginTop: 'calc(0vh)'}">Subscription Plans -></h1>
        </a-button>
      </div>
    </a-layout-content>
    <OurVision />
    <OurStory />
    <PageTail />
  </a-layout>
</template>

<script>
import PageFront from '../components/PageFront.vue'
import AnimationPage from '../components/AnimationPage.vue'
import PsyPlusBot from '../components/PsyPlusBot.vue'
import MoreFeatures from '../components/MoreFeatures.vue'
import ReviewsPage from '../components/ReviewsPage.vue'
import OurVision from '../components/OurVision.vue'
import OurStory from '../components/OurStory.vue'
import PageTail from '../components/PageTail.vue'

import { useRouter } from "vue-router";
import { defineComponent, ref } from 'vue';
// import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    PageFront,
    AnimationPage,
    PsyPlusBot,
    MoreFeatures,
    ReviewsPage,
    // SubscriptionPlan,
    OurVision,
    OurStory,
    PageTail,
    // MainPage,
    // AnimationPage,
    // PsyPlusBot,
    // MoreFeatures,
    // ReviewsPage,
    // SubscriptionPlan,
    // OurVision,
    // OurStory,
    // PageTail,
    // SubscriptionPage,
  },
  setup(){
    const router = useRouter();
    const goToSubscriptionPage = () => {
      router.push({
        name: "SubscriptionPage",
      });
    };

    return{
        goToSubscriptionPage,
        selectedKeys: ref(['2']),
        // selectedKeys: ref(['2']),
    }
  },
});
</script>

<style>
.logo {
  width: 64px;
  height: 64px;
  /* background: rgba(255, 255, 255, 0.2); */
  /* margin: 16px 24px 16px 0; */
  float: left;
}
.layout{
  /* width: 64px; */
  background: rgba(136, 33, 33, 1);
  /* background-image: `url('../assets/mainPageWallPaper.png')`; */
}
.PanelCollection{
    display: flex;
    justify-content: space-around;
}
.site-layout .site-layout-background {
  background: rgb(136, 33, 33);
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
