<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :color="$vuetify.breakpoint.mdAndUp ? '#059D42' : '' "
    :class="$vuetify.breakpoint.mdAndUp ? 'white--text' : '' "
    :permanent="$vuetify.breakpoint.mdAndUp"
  >
    <v-list dense>
      <v-list-item link v-if="$vuetify.breakpoint.mdAndUp">
        <v-list-item-content>
          <v-list-item-title
            class="white--text text-center py-5 title"
          >LOGO</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click.stop="drawer = !drawer">
        <v-list-item-action>
          <v-icon :color="$vuetify.breakpoint.smAndUp ? 'white' : '' ">mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title :class="$vuetify.breakpoint.smAndUp ? 'white--text' : '' ">Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click.stop="drawer = !drawer">
        <v-list-item-action>
          <v-icon :color="$vuetify.breakpoint.smAndUp ? 'white' : '' ">mdi-cog</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title :class="$vuetify.breakpoint.smAndUp ? 'white--text' : '' ">Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  methods: {
    toggleMenu() {
      this.drawer = !this.drawer;
    },
  },
  created() {
    this.$root.$on('toggleMenu', this.toggleMenu);
  },
};
</script>

<style scoped>

</style>
