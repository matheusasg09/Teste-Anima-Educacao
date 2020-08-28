<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :height="$vuetify.breakpoint.smAndDown ? '60vh' : '100vh' "
    :color="$vuetify.breakpoint.smAndUp ? '#059D42' : '' "
    :class="$vuetify.breakpoint.smAndUp ? 'white--text' : '' "
  >
    <v-list dense>
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
export default {};
</script>

<style>
</style>
