<template>
  <v-app-bar app color="#059D42" v-if="$vuetify.breakpoint.smAndDown">
    <v-app-bar-nav-icon @click.stop="$root.$emit('toggleMenu')" color="white"></v-app-bar-nav-icon>
    <v-toolbar-title class="white--text">LOGO</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>

<style>
</style>
