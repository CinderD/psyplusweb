<template>
  <a-layout class="layout" :style="{background:'rgb(0, 0, 0)',backgroundSize: 'cover'}">
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px', height: 'calc(100vh)', }">

      <div>
        <h1 :style="{color: '#D582D1', fontSize: '60px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', }">Subscription Plan</h1>
      </div>
      <div class="PanelCollection" >
        <div :style="{ background: '#fff', marginLeft: 'calc(20vh)',width: 'calc(20vh)',  minHeight: 'calc(60vh)', }">Free</div>
        <div :style="{ background: '#fff', width: 'calc(20vh)', minHeight: 'calc(60vh)', }">Cbt Exercise</div>
        <div :style="{ background: '#fff', marginRight: 'calc(20vh)',width: 'calc(20vh)',  minHeight: 'calc(60vh)', }">Meditation Exercise</div>
      </div>
      <a-button ghost @click="goToMainPage" :style="{marginTop:'calc(15vh)', height: 'calc(7.5vh)', width: 'calc(20vh)'}">
            <h1 :style="{color: '#D582D1', fontSize: 'calc(4vh)', fontFamily: 'Rokkitt', fontWeight: 'Lighter', marginTop: '0px'}">Back</h1>
      </a-button>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from "vue-router";
// import bgPic from '@/assets/mainPageWallPaper.png';

export default defineComponent({
  setup() {
    const router = useRouter();
    const goToMainPage = () => {
      router.push({
        name: "MainPage",
      });
    };
    return {
      selectedKeys: ref(['2']),
      goToMainPage,
      // bgPic: bgPic,
    };
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
</style>