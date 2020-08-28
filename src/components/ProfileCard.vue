<template>
  <div>
    <v-card
      class="mx-auto mb-10 py-3"
      :max-width="$vuetify.breakpoint.smAndDown ? '344' : ''"
      outlined
      :elevation="9"
      v-for="worker in workersList"
      :key="worker.id"
    >
      <!-- CARD  -->
      <div id="wrapper">
        <!-- TAG CARD  -->
        <div
          id="card"
          class="rounded"
          :class="value ? 'background-color: green' :  'background-color: red'"
        >
          <span>
            <v-icon
              color="white"
              class="mx-1"
            >{{ value > 0 ? "mdi-clock-time-four-outline" : "mdi-currency-usd"}}</v-icon>
            {{value > 0 ? `Você já adicionou R$ ${value}` : "Você não adicionou nada"}}
          </span>
        </div>

        <!-- BODY CARD  -->
        <v-list-item three-line>
          <v-list-item-content>
            <div class="title mb-4 green--text">
              <v-icon v-show="$vuetify.breakpoint.lg" color="#059D42">mdi-currency-usd</v-icon>
              {{worker.name}}
            </div>
            <v-list-item-subtitle>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <!-- PROGRESS BAR  -->
        <span class="d-block text-right mr-4">Total R$ {{worker.maxValue}}</span>
        <v-row justify="center" align="center">
          <v-container class="mx-4">
            <v-progress-linear
              class="justify-start"
              :active="active"
              :background-opacity="opacity"
              :bottom="bottom"
              :buffer-value="buffer"
              :height="height"
              :indeterminate="indeterminate"
              :query="query"
              :rounded="rounded"
              :stream="stream"
              :striped="striped"
              :top="top"
              :value="value"
              color="#059D42"
            >
              <div class="w-100 ml-2">
                <span class="white--text">{{value > 0 ? `R$ ${value}` : "R$ 0"}}</span>
              </div>
            </v-progress-linear>
          </v-container>
        </v-row>
      </div>
      <!-- MODAL -->
      <v-dialog v-model="dialog" persistent max-width="290">
        <!-- BUTTON OPEN MODAL  -->
        <template v-slot:activator="{ on, attrs }">
          <v-card-actions>
            <v-btn text class="green--text caption" v-bind="attrs" v-on="on">
              <v-icon>mdi-plus</v-icon>Clique aqui para adicionar reais
            </v-btn>
          </v-card-actions>
        </template>
        <!-- MODAL  -->
        <v-card class="mx-auto">
          <v-system-bar color="#059D42" height="30">
            <v-spacer class="white--text">Quantos reais quer adicionar?</v-spacer>
            <v-icon color="white" @click="dialog = false">mdi-close</v-icon>
          </v-system-bar>
          <v-container>
            <v-row>
              <v-col cols="6" v-for="valueButton in valueButtons" :key="valueButton">
                <v-btn width="100" @click="addValue(valueButton)">R$ {{valueButton}}</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
import workerService from '@/services/workerService';

export default {
  components: {},
  data() {
    return {
      workersList: [],
      dialog: false,
      absolute: false,
      active: true,
      opacity: 0.5,
      bottom: false,
      buffer: 100,
      fixed: false,
      height: 20,
      indeterminate: false,
      query: false,
      rounded: true,
      stream: false,
      striped: false,
      top: false,
      value: 0,
      valueButtons: [25, 50, 75, 100],
    };
  },
  methods: {
    addValue(value) {
      this.value += value;
      this.dialog = false;
    },
    async fetchWorkers() {
      try {
        const response = await workerService.workersList();
        const { data } = response;
        this.workersList = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchWorkers();
  },
};
</script>

<style>
#wrapper {
  position: relative;
}
#card {
  width: 250px;
  height: 30px;
  text-align: center;
  position: absolute;
  top: -10px;
  left: 66%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
}
#card span {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
}
.w-100 {
  width: 100%;
}
.title-3 {
  font-size: 1.2em;
}
</style>
