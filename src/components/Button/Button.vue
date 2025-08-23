<template>
  <button
    ref="_ref"
    class="vk-button"
    :class="{
      [`vk-button--${type}`]: type,
      [`vk-button--${size}`]: size,
      'is-disabled': disabled,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
    }"
    :disabled="disabled"
    :type="nativeType"
    :autofocus="autofocus"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonType, ButtonSize, NativeType } from "./types";
import { ref } from "vue";

withDefaults(
  defineProps<{
    type?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    nativeType?: NativeType;
    autofocus?: boolean;
  }>(),
  {
    nativeType: "button",
  }
);

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref
})
</script>

