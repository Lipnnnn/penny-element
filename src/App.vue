<script setup lang="ts">
// import Button from "./components/Button/Button.vue";
import Button from '@/components/Button/Button.vue'
import Collapse from "./components/Collapse/Collapse.vue";
import CollapseItem from "./components/Collapse/CollapseItem.vue";
import Alert from "./components/Alert/Alert.vue";
import Icon from "./components/Icon/Icon.vue";
import { onMounted, ref } from "vue";
import type { NameType } from "./components/Collapse/types";
import type { ButtonInstance } from "./components/Button/types";

const buttonRef = ref<ButtonInstance>();

const openedValue = ref<NameType[]>(["1"]);

function handleClose() {
  alert("哈哈哈");
}

onMounted(() => {
  console.log(buttonRef.value?.ref);
});
</script>

<template>
  <hr />
  <Button ref="buttonRef">Test Button</Button>
  <Button plain>Plain Button</Button>
  <Button round>Round Button</Button>
  <Button circle>VK</Button>
  <Button disabled>Disabled Button</Button><br /><br />
  <Button type="primary">Primary</Button>
  <Button type="success">Success</Button>
  <Button type="info">Info</Button>
  <Button type="warning">Warning</Button>
  <Button type="danger">Danger</Button><br /><br />
  <Button type="primary" plain>Primary</Button>
  <Button type="success" plain>Success</Button>
  <Button type="info" plain>Info</Button>
  <Button type="warning" plain>Warning</Button>
  <Button type="danger" plain>Danger</Button><br /><br />
  <Button size="large">Large</Button>
  <Button size="small">Small</Button>
  <Button icon="fa-solid fa-house" type="primary">Home</Button>
  <Button size="large" loading>Loading</Button>
  <hr />
  <Collapse v-model="openedValue">
    <CollapseItem name="1" title="Title 1"> Content 1 </CollapseItem>
    <CollapseItem name="2">
      <template #title> Title 2 </template>
      Content 2
    </CollapseItem>
    <CollapseItem name="3" disabled>
      <template #title> Title 3 </template>
      Content 3
    </CollapseItem>
  </Collapse>
  <hr />
  <Icon icon="fa-solid fa-house" type="primary" color="black" />
  <Icon icon="fa-solid fa-user-secret" type="danger" />
  <hr />
  <Alert type="danger" center show-icon :closable="false" />
  <Alert type="primary" show-icon />
  <Alert type="success" show-icon />
  <Alert type="info" show-icon />
  <Alert content="223" type="warning" show-icon center @close="handleClose" />
  <hr />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
