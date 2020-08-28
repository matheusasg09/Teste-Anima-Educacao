<template>
  <v-container fluid>
    <p
      class="text-uppercase text-center mt-5 font-weight-bold"
      :class="$vuetify.breakpoint.mdAndUp ? 'title-lg' : 'title-sm'"
    >
      Lista de
      <span class="green--text">Colaboradores</span>
    </p>
    <div v-if="isProgress" class="d-flex justify-center spinner mt-10">
      <v-progress-circular :width="4" color="green" indeterminate></v-progress-circular>
    </div>
    <v-row v-else align="center" justify="center">
      <v-col>
        <profile-card :worker="worker" v-for="worker in workersList" :key="worker.id"></profile-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue';
import workerService from '@/services/workerService';

export default {
  components: {
    ProfileCard,
  },
  data: () => ({
    workersList: [],
    isProgress: false,
  }),
  methods: {
    async fetchWorkers() {
      try {
        const response = await workerService.workersList();
        const { data } = response;
        this.workersList = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isProgress = false;
      }
    },
    getWorkers() {
      this.isProgress = true;
      setTimeout(() => {
        this.isProgress = true;
        this.fetchWorkers();
      }, 3000);
    },
  },
  created() {
    this.getWorkers();
  },
};
</script>

<style scoped>
.title-sm {
  font-size: 1.2em;
}
.title-lg {
  font-size: 2.5em;
}
</style>
