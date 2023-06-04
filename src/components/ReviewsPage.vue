<template>
  <a-layout class="layout" :style="{background:'rgb(0, 0, 0)',backgroundSize: 'cover'}">
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px', height: 'calc(100vh)', }">

      <div :style="{ padding: '24px', minHeight: '100px' }">
        <h1 :style="{color: '#D582D1', fontSize: '60px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', }">About Us</h1>
      </div>
      <div class="PanelCollection">
        <div class="PanelRow" :style="{width:'calc(150vh)', overflowX:'auto'}">
          <a-list :grid="{ gutter: 50, column: 8 }" :data-source="data" :style="{width:'calc(200vh)'}">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-card :title="item.title" :style="{minHeight:'calc(40vh)'}">Review content</a-card>
              </a-list-item>
            </template>
          </a-list>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
// import bgPic from '@/assets/mainPageWallPaper.png';

const data = [{
  title: 'Title 1',
}, {
  title: 'Title 2',
}, {
  title: 'Title 3',
}, {
  title: 'Title 4',
},
{
  title: 'Title 5',
},
{
  title: 'Title 6',
},{
  title: 'Title 7',
},{
  title: 'Title 8',
}];

export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['2']),
      data,
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
.PanelRow::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.site-layout .site-layout-background {
  background: rgb(136, 33, 33);
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>



