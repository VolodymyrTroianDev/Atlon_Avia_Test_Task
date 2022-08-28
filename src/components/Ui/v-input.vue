<template>
  <input
    class="input"
    type="text"
    v-model="modelValue"
    @input="this.$emit('update:modelValue', modelValue)"
  />
</template>

<script>
export default {
  name: "v-input",
  props: {
    modelValue: [String, Number],
  },
};
</script>

<style lang="scss" scoped>
.input {
  background: none;
  outline: none;
  padding: 0;
  width: 300px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: #1d2b3a;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-size: 10px;
  margin-bottom: 20px;


  &[type="text"],
  &[type="password"] {
    padding-left: 5px;
  }
}
</style>