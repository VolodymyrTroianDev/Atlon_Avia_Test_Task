<template>
  <div class="d-flex padding-left">
    <template v-if="modelValue.length > 1">
      <div v-for="item in modelValue" :key="item.name" class="d-flex p-5">
        <input
          type="checkbox"
          class="checkboxes"
          v-model="item.value"
          @change="this.$emit('update:modelValue', this.modelValue)"
        />
        <div class="name">{{ item.name }}</div>
      </div>
    </template>
    <template v-else>
      <input
        type="checkbox"
        class="checkbox"
        v-model="modelValue"
        @change="this.$emit('update:modelValue', this.modelValue)"
      />
      <div class="name"><slot></slot></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "v-checkbox",
  props: {
    modelValue: [Array, Boolean],
  },
};
</script>
<style lang="scss" scoped>
.name {
  margin-left: 3px;
  margin-right: 10px;
}
</style>
