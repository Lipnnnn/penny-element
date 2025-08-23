<template>
  <i
    class="vk-icon"
    :class="{ [`vk-icon--${type}`]: type }"
    :style="customStyles"
  >
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { IconProps } from "./types";
import { omit } from "lodash-es";
import { computed } from "vue";

const props = defineProps<IconProps>();

const filteredProps = computed(() => omit(props, ["type", "color"]));

const customStyles = computed(() => {
  return props.color ? { color: props.color } : {};
});
</script>

<style scoped></style>
