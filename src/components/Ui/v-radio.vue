<template>
  <div class="d-flex padding-left">
    <template v-if="modelValue.length > 1">
      <div v-for="item in modelValue" :key="item.name" class="d-flex">
        <input
          type="radio"
          class="radio"
          v-model="item.value"
          :value="true"
          @input="this.$emit('update:modelValue', this.modelValue)"
        />
        <div class="name">{{ item.name }}</div>
        <div >
        <slot ></slot>

        </div>
      </div>
    </template>
    <template v-else>
      <input
        type="radio"
        class="radio"
        v-model="modelValue"
        @input="this.$emit('update:modelValue', this.modelValue)"
      />
      <div><slot></slot></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "v-radio",
  props: {
    modelValue: [Array, Boolean],
  }
};
</script>
