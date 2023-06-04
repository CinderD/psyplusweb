<template>
  <a-layout class="layout" :style="{backgroundImage:'url('+require('../assets/mainPageBg.svg')+')',backgroundSize: 'cover'}">
    <a-layout-header :style="{ zIndex: 1, width: '100%' }">
      <img class="logo" src="../assets/psy_logo.png"  >
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px'}"
      >
        <a-menu-item key="1" @click="goToMainPage">HOME</a-menu-item>
        <a-menu-item key="2">PRODUCT</a-menu-item>
        <a-menu-item key="3" @click="goToSubscriptionPage">SUBSCRIPTION</a-menu-item>
        <a-menu-item key="4">ABOUT US</a-menu-item>
        <a-menu-item key="5">LOGIN</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px', height: 'calc(100vh)', }">
      <!-- <a-breadcrumb :style="{ margin: '16px 0',color: 'white' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb> -->
      <div :style="{ padding: '24px', minHeight: '380px' }">
        <h1 :style="{color: 'white', fontSize: '80px', fontFamily: 'Rokkitt', fontWeight: 'Lighter', }">PSY+</h1>
        <h1 :style="{color: 'white', fontSize: '50px', fontFamily: 'Rokkitt', fontWeight: 'Lighter',}">"Connect, Create"</h1>
        </div>
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

    const goToSubscriptionPage = () => {
      router.push({
        name: "SubscriptionPage",
      });
    };

    return {
      selectedKeys: ref(['2']),
      goToMainPage,
      goToSubscriptionPage,
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
.site-layout .site-layout-background {
  background: rgb(136, 33, 33);
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>