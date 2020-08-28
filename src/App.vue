<template>
  <v-app id="inspire" style="background-color: #e9ebee">
    <the-side-bar></the-side-bar>
    <the-nav-bar></the-nav-bar>
    <v-main>
      <v-container fluid>
        <p class="text-uppercase text-center mt-5 font-weight-bold title-3">
          Pessoas que vão ganhar
          <span class="green--text">Dinheiro</span>
        </p>
        <v-row align="center" justify="center">
          <v-col>
            <profile-card></profile-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue';
import TheNavBar from '@/components/TheNavBar.vue';
import TheSideBar from '@/components/TheSideBar.vue';

export default {
  name: 'App',
  components: {
    ProfileCard,
    TheNavBar,
    TheSideBar,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>
