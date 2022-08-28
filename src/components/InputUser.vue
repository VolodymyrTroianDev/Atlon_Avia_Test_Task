<template>
  <div class="user-info d-flex">
    <div class="d-flex">
      <v-input v-model="userInfo.name" type="text" placeholder="Ім'я"></v-input>
      <v-input
        v-model="userInfo.surname"
        type="text"
        placeholder="Прізвище"
      ></v-input>
    </div>
    <div class="d-flex">
      <v-input
        v-model="userInfo.login"
        type="text"
        placeholder="Логін"
      ></v-input>
      <v-input
        v-model="userInfo.password"
        type="password"
        name="input"
        placeholder="Пароль"
      ></v-input>
    </div>
  </div>
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

<style lang="scss" scoped>
.user-info {
  .d-flex {
    justify-content: center;
    flex-direction: column;
  }
}
.d-flex {
  justify-content: space-around;
}
</style>