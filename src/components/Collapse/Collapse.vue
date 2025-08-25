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
watch(
  () => props.modelValue,
  (newVal) => {
    activeNames.value = newVal;
  }
);
const handleItemClick = (item: NameType) => {
  let _activeNames = [...activeNames.value];
  if (props.accordion) {
    _activeNames = [activeNames.value[0] === item ? "" : item];
    activeNames.value = _activeNames;
  } else {
    const index = _activeNames.indexOf(item);
    if (index > -1) {
      // 存在，删除数组中对应的一项
      _activeNames.splice(index, 1);
    } else {
      // 不存在，插入对应的name
      _activeNames.push(item);
    }
    activeNames.value = _activeNames;
  }
  emits("update:modelValue", activeNames.value);
  emits("change", activeNames.value);
};

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>
