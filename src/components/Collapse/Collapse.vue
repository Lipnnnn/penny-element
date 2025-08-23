<template>
  <div class="vk-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from "vue";
import type { NameType } from "./types";
import { collapseContextKey } from "./types";

const props = defineProps<{
  modelValue: NameType[];
  accordion?: boolean;
}>();

const emits = defineEmits<{
  "update:modelValue": [names: NameType[]];
  change: [names: NameType[]];
}>();

const activeNames = ref<NameType[]>(props.modelValue);
watch(() => props.modelValue, (newVal) => {
  activeNames.value = newVal;
})
const handleItemClick = (item: NameType) => {
  const index = activeNames.value.indexOf(item);
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === item ? "" : item];
  } else {
    if (index > -1) {
      // 存在，删除数组中对应的一项
      activeNames.value.splice(index, 1);
    } else {
      // 不存在，插入对应的name
      activeNames.value.push(item);
    }
  }
  emits("update:modelValue", activeNames.value);
  emits("change", activeNames.value);
};

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>
