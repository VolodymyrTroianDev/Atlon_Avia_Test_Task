<template>
  <h3>Головна сторінка</h3>
  <v-radio v-model="userInfo.radioValues" class="column"> </v-radio>
</template>

<script>
import { useStore } from "../store/store";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(useStore, {
      userInfo: "userInfo",
    }),
  },
};
</script>
