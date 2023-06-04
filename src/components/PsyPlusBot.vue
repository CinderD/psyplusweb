<template>
  <a-layout class="layout" :style="{background:'rgb(0, 0, 0)',backgroundSize: 'cover'}">
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px', height: 'calc(100vh)', }">

      <div :style="{ padding: '24px', minHeight: '100px' }">
        <h1 :style="{color: '#D582D1', fontSize: '60px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', }">Psy+ Bot</h1>
        <h1 :style="{color: 'white', fontSize: '40px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', }">a VR NLP CBT Bot</h1>
      </div>
      <div class="PanelCollection" >
        <div :style="{ background: '#fff', marginLeft: 'calc(20vh)',width: 'calc(20vh)',  minHeight: 'calc(60vh)', }">Take care of the mental health with a low cost</div>
        <div :style="{ background: '#fff', width: 'calc(20vh)', minHeight: 'calc(60vh)', }">Settle mental problems at any time</div>
        <div :style="{ background: '#fff', marginRight: 'calc(20vh)',width: 'calc(20vh)',  minHeight: 'calc(60vh)', }">Talk with the bot in a more immersive way</div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
// import bgPic from '@/assets/mainPageWallPaper.png';

export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['2']),
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