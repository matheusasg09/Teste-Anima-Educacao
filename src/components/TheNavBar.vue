<template>
  <v-app-bar app color="#059D42" v-show="$vuetify.breakpoint.smAndDown">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white"></v-app-bar-nav-icon>
    <v-toolbar-title class="white--text">LOGO</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>
