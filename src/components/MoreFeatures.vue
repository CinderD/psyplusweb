<template>
  <a-layout class="layout" :style="{background:'rgb(0, 0, 0)',backgroundSize: 'cover'}">
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px', height: 'calc(100vh)', }">

      <div :style="{ padding: '24px', minHeight: '100px' }">
        <h1 :style="{color: '#D582D1', fontSize: '60px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', }">Our Team</h1>
      </div>
      <div :style="{ background: '#fff', marginLeft: 'calc(20vh)', marginRight: 'calc(20vh)', marginTop: 'calc(5vh)', minHeight: 'calc(60vh)' }">Team Picture</div>
      <!-- <div class="PanelCollection" :style="{marginTop: 'calc(10vh)'}">
        <div class="features" :style="{marginLeft: 'calc(30vh)'}">
            <div class="iconName" >
                <div :style="{ background: '#fff',width: 'calc(6vh)',  height: 'calc(6vh)', }"></div>
                <div :style="{ marginLeft: 'calc(3vh)',fontSize: '20px', marginTop: 'calc(1.5vh)', color: 'white'}">Book appointment</div>
            </div>    
            <div class="featureContent" :style="{marginTop: 'calc(1.5vh)', color: 'white', width: 'calc(30vh)'}">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>        
        </div>
        <div class="features" :style="{marginRight: 'calc(30vh)'}">
            <div class="iconName">
                <div :style="{ background: '#fff', width: 'calc(6vh)',  height: 'calc(6vh)', }"></div>
                <div :style="{ marginLeft: 'calc(3vh)',fontSize: '20px', marginTop: 'calc(1.5vh)', color: 'white'}">Book appointment</div>
            </div>    
            <div class="featureContent" :style="{marginTop: 'calc(1.5vh)', color: 'white', width: 'calc(30vh)'}">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>        
        </div>
      </div> -->
      
      <!-- <div class="PanelCollection" :style="{marginTop: 'calc(10vh)'}">
        <div class="features" :style="{marginLeft: 'calc(30vh)'}">
            <div class="iconName" >
                <div :style="{ background: '#fff',width: 'calc(6vh)',  height: 'calc(6vh)', }"></div>
                <div :style="{ marginLeft: 'calc(3vh)',fontSize: '20px', marginTop: 'calc(1.5vh)', color: 'white'}">Book appointment</div>
            </div>    
            <div class="featureContent" :style="{marginTop: 'calc(1.5vh)', color: 'white', width: 'calc(30vh)'}">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>        
        </div>
        <div class="features" :style="{marginRight: 'calc(30vh)'}">
            <div class="iconName">
                <div :style="{ background: '#fff', width: 'calc(6vh)',  height: 'calc(6vh)', }"></div>
                <div :style="{ marginLeft: 'calc(3vh)',fontSize: '20px', marginTop: 'calc(1.5vh)', color: 'white'}">Book appointment</div>
            </div>    
            <div class="featureContent" :style="{marginTop: 'calc(1.5vh)', color: 'white', width: 'calc(30vh)'}">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>        
        </div>
      </div> -->
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