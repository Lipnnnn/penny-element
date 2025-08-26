<template>
  <div
    v-if="show"
    ref="_ref"
    class="vk-alert"
    :class="{
      [`vk-alert--${type}`]: type,
      'is-plain': plain,
      'is-show': showIcon,
      'is-center': center,
    }"
  >
    <div class="flex-1 flex items-center" :class="{ 'justify-center': center }">
      <Icon v-if="showIcon" :icon="icon" />
      <span>
        <slot>{{ content }}</slot>
      </span>
    </div>
    <Icon
      v-if="closable"
      icon="fa-solid fa-xmark"
      class="cursor-pointer ml-auto"
      @click="handleClose"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { AlertType } from "./types";
import Icon from "../Icon/Icon.vue";

const props = withDefaults(
  defineProps<{
    content?: string;
    type?: AlertType;
    closable?: boolean;
    plain?: boolean;
    showIcon?: boolean;
    center?: boolean;
  }>(),
  {
    type: "primary",
    content: "Alert info",
    showIcon: false,
    closable: true,
  }
);

const emits = defineEmits<{
  close: []
}>()

const typeArr = ["primary", "success", "info", "warning", "danger"];
const iconArr = [
  "fa-solid fa-circle-info",
  "fa-solid fa-circle-check",
  "fa-solid fa-circle-info",
  "fa-solid fa-circle-exclamation",
  "fa-solid fa-circle-xmark",
];
const icon = computed(() => {
  if (props.showIcon) {
    return iconArr[typeArr.indexOf(props.type || "primary")];
  }
  return "";
});

const show = ref(true);
function handleClose() {
  show.value = false;
  emits("close");
}
</script>

<style scoped></style>
