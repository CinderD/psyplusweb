<template>
  <a-layout class="layout" :style="{background:'rgb(0, 0, 0)',backgroundSize: 'cover'}">
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px', height: 'calc(100vh)', }">

      <div>
        <h1 :style="{color: '#D582D1', fontSize: '60px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', }">Our Story</h1>
      </div>
      <div class="PanelCollection" :style="{ textAlign: 'center', margin: 'calc(10vh)' }">
        <!-- <h1 :style="{textAlign: 'center',color: 'white', fontSize: '30px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', }">UST is a global digital transformation solutions provider. For more than 20 years, UST has worked side by side with the world’s best companies to make a real impact through transformation. Powered by technology, inspired by people and led by purpose, UST partners with their clients from design to operation. With deep domain expertise and a future-proof philosophy, UST embeds innovation and agility into their clients’ organizations. With over 30,000 employees in 30 countries, UST builds for boundless impact—touching billions of lives in the process.</h1> -->
        <img src="../assets/sample_email_page.png"  width="800" height="600">
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