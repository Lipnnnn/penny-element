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
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :type="nativeType"
    :autofocus="autofocus"
  >
    <Icon v-if="loading" icon="spinner" spin />
    <Icon v-if="icon" :icon="icon" />
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonType, ButtonSize, NativeType } from "./types";
import { ref } from "vue";
import Icon from "../Icon/Icon.vue";

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
    icon?: string;
    loading?: boolean;
  }>(),
  {
    nativeType: "button",
  }
);

const _ref = ref<HTMLButtonElement>();

defineExpose({
  ref: _ref,
});
</script>
