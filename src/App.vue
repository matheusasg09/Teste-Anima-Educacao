<template>
  <v-app id="inspire" style="background-color: #e9ebee">
    <the-side-bar></the-side-bar>
    <the-nav-bar></the-nav-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';
import TheSideBar from '@/components/TheSideBar.vue';

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheSideBar,
  },

};
</script>
