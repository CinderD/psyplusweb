<template>
  <a-layout class="layout" :style="{background:'rgb(0, 0, 0)',backgroundSize: 'cover'}">
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px', height: 'calc(70vh)', }">

      <div class = "logo" :style="{ left: '50%', }">
        <img class="logoPic" src="../assets/psy_logo.png" :style="{ left: '45%', position: 'absolute',background: 'rgb(0,0,0)',  width:'calc(20vh)', height:'calc(20vh)'}" >
        
      </div>
      <img src="../assets/sample_final_page.png"  width="800" height="350" style="margin-top:150px" >
      <!-- <div class="Panel" >
        <div class="getAPP" :style="{  width:'calc(30vh)', height:'calc(30vh)'}">
          <h1 :style="{color: 'white', fontSize: '25px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', }">Get the APP</h1>
          <div class="PanelCollection" :style="{ marginTop:'calc(10vh)'}">
            <div :style="{ background: '#fff',width: 'calc(10vh)',  minHeight: 'calc(10vh)', borderRadius:'15px', }">App Store</div>
            <div :style="{ background: '#fff', width: 'calc(10vh)', minHeight: 'calc(10vh)', borderRadius:'15px',}">Google Play</div>
          </div>
        </div>
        <div class="followUs" :style="{ width:'calc(30vh)', height:'calc(30vh)'}">
          <h1 :style="{color: 'white', fontSize: '25px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', }">Follow Us</h1>
          <div class="PanelCollection" :style="{ marginTop:'calc(10vh)'}">
            <div :style="{ background: '#fff',width: 'calc(5vh)',  minHeight: 'calc(10vh)', borderRadius:'25px', }"></div>
            <div :style="{ background: '#fff', width: 'calc(5vh)', minHeight: 'calc(10vh)', borderRadius:'25px',}"></div>
            <div :style="{ background: '#fff', width: 'calc(5vh)', minHeight: 'calc(10vh)', borderRadius:'25px',}"></div>
            <div :style="{ background: '#fff', width: 'calc(5vh)', minHeight: 'calc(10vh)', borderRadius:'25px',}"></div>
          </div>
        </div>
      </div> -->
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center',background:'black' }">
      <p :style="{color: 'white'}">
        @ 2022 PSY+. All Rights Reserved.
      </p>
    </a-layout-footer>
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
.logo{
  align-items: center;  
}
.logoPic {
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
.Panel{
    margin-top: calc(25vh);
    /* margin-left: calc(30vh); */
    display: flex;
    justify-content: space-around;
}

.PanelCollection{
    display: flex;
    justify-content: space-around;
}

.iconName{
    display: flex;
    justify-content: space-around;
}
.featureContent{
    word-wrap:break-word;
}
.site-layout .site-layout-background {
  background: rgb(136, 33, 33);
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>