<template>
  <div
    class="vk-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="vk-collapse-item__header"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <Icon icon="angle-right" class="header-angle" />
    </div>

    <Transition name="slide" v-on="transitionEvents" style="overflow: hidden;">
      <div v-show="isActive" class="vk-collapse-item__wrapper">
        <div
          class="vk-collapse-item__content"
          :id="`item-content-${name}`"
        >
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import type { NameType } from "./types";
import { collapseContextKey } from "./types";
import Icon from "../Icon/Icon.vue";

const props = defineProps<{
  name: NameType;
  title?: string;
  disabled?: boolean;
}>();

const collapseContext = inject(collapseContextKey);
const isActive = computed(() =>
  collapseContext?.activeNames.value.includes(props.name)
);
const handleClick = () => {
  if (props.disabled) {
    return;
  }
  collapseContext?.handleItemClick(props.name);
};

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = "0px";
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;
  },
  afterEnter(el) {
    el.style.height = "";
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
  },
  leave(el) {
    el.style.height = "0px";
  },
  afterLeave(el) {
    el.style.height = "";
  },
};
</script>
