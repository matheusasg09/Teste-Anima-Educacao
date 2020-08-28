<template>
  <div>
    <v-container>
      <v-card
        class="mx-auto mb-8 py-3"
        :max-width="$vuetify.breakpoint.mdAndDown ? '344' : ''"
        outlined
        :elevation="9"
      >
        <!-- CARD  -->
        <div id="wrapper">
          <!-- TAG CARD  -->
          <div
            id="card"
            class="rounded"
            :class="value ? 'background-color: green' :  'background-color: red'"
            :style="$vuetify.breakpoint.mdAndDown ? 'left: 65%' : 'left: 90%'"
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
                <v-icon v-show="$vuetify.breakpoint.mdAndUp" color="#059D42">mdi-currency-usd</v-icon>
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
                :buffer-value="buffer"
                :height="height"
                :rounded="rounded"
                :value="(value / worker.maxValue) * 100"
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
        <v-dialog v-model="dialog" persistent max-width="720">
          <!-- BUTTON OPEN MODAL  -->
          <template v-slot:activator="{ on, attrs }">
            <v-card-actions>
              <v-btn
                text
                class="green--text caption"
                v-bind="attrs"
                v-on="on"
                :disabled="value === worker.maxValue ? true : false"
              >
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
                  <v-btn
                    width="100"
                    @click="addValue(valueButton)"
                    :disabled="valueButton > worker.maxValue - value ? true : false"
                  >R$ {{valueButton}}</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    worker: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      active: true,
      opacity: 0.5,
      buffer: 100,
      height: 25,
      query: false,
      rounded: true,
      value: 0,
      valueButtons: [25, 50, 75, 100],
    };
  },
  methods: {
    addValue(value) {
      this.value += value;
      this.dialog = false;
    },
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

</style>
