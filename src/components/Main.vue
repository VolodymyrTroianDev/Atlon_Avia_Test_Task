<template>
  <div class="main">
    <div :class="{ blur: loaderStatus }">
      <h3>Дані користувача</h3>
      <input-user />
      <div class="error" v-if="errors.userInfo">{{errors.userInfo}}</div>
      <check-box-page/>
      <radio-page />
      <div class="error" v-if="errors.radio">{{errors.radio}}</div>
      <div class="saccess" v-if="validationConfirm">Дані відправлені</div>
      <v-button @click="sendData">Надіслати Дані</v-button>
    </div>
    <div class="bg-modal" v-if="loaderStatus">
      <span class="loader"></span>
    </div>
  </div>
</template>

<script>
import { useStore } from "../store/store";
import { mapState } from "pinia";
import vRadio from "./Ui/v-radio.vue";
import InputUser from "./InputUser.vue";
import RadioPage from "./RadioPage.vue";
import CheckBoxPage from './CheckBoxPage.vue';

export default {
  components: { vRadio, InputUser, RadioPage, CheckBoxPage },
  data() {
    return {
      someVal: false,
    };
  },
  computed: {
    ...mapState(useStore, {
      userInfo: "userInfo",
      loaderStatus: "loaderStatus",
      errors: "errors",
      validationConfirm:"validationConfirm"
    }),
  },
  methods: {
    sendData() {
      useStore().validationData();
    },
  },
};
</script>
