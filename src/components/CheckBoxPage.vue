<template>
  <div class="">
    <h3>Склад</h3>
    <v-checkbox v-model="userInfo.checkBoxesStorage"></v-checkbox>

    <h3>Категорії</h3>
    <v-checkbox v-model="userInfo.checkBoxesCategories"></v-checkbox>

    <h3>Характеристики</h3>
    <v-checkbox v-model="userInfo.checkBoxesCharacteristics"></v-checkbox>
    <div class="error" v-if="errors.checkbox">{{errors.checkbox}}</div>

    <h3>Зміна</h3>
    <v-checkbox v-model="userInfo.someVal">Робітник 1 зміни</v-checkbox>
  </div>
</template>

<script>
import { useStore } from "../store/store";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(useStore, {
      userInfo: "userInfo",
      errors: "errors",
    }),
  },
};
</script>
