<template>
  <a-layout class="layout" :style="{background:'rgb(0, 0, 0)',backgroundSize: 'cover'}">
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px', height: 'calc(100vh)', }">

      <div :style="{ padding: '24px', minHeight: '100px' }">
        <h1 :style="{color: '#D582D1', fontSize: '60px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', }">Our Vision</h1>
      </div>
      <div class="PanelCollection" :style="{marginTop: 'calc(20vh)'}">
        <div :style="{ background: '#fff', marginLeft: 'calc(20vh)',width: 'calc(50vh)',  height: 'calc(30vh)', }">Map</div>
        <a-timeline mode="left" :style="{marginRight: 'calc(20vh)'}">
            <a-timeline-item>
             
                <p :style="{color: 'white'}">Small-scale trials in Hong Kong</p>
            </a-timeline-item>
            <a-timeline-item>
                <p :style="{color: 'white'}">Explore a sustainable business model in Singapore</p>
            </a-timeline-item>
            <a-timeline-item color="red" label="2022">
                <p :style="{color: 'white'}">Cover the most Europe markets</p>
            </a-timeline-item>
            <a-timeline-item>
                <p :style="{color: 'white'}">Cover the most Greater China markets</p>
            </a-timeline-item>
    </a-timeline>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
// import { ClockCircleOutlined } from '@ant-design/icons-vue';
// import bgPic from '@/assets/mainPageWallPaper.png';

export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['2']),
    //   ClockCircleOutlined,
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