<template>
  <v-app id="inspire" style="background-color: #e9ebee">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link @click.stop="drawer = !drawer">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click.stop="drawer = !drawer">
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#059D42">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">LOGO</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <p class="text-uppercase text-center mt-5 font-weight-bold title-3">
          Pessoas que vão ganhar
          <span class="green--text">Dinheiro</span>
        </p>
        <v-row align="center" justify="center">
          <v-col>
            <profile-card v-for="card in 2" :key="card"></profile-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app color="#059D42" class="text-center d-block">
      <span class="white--text">Ânima Educação &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue';

export default {
  name: 'App',
  components: {
    ProfileCard,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>
