<template>
  <div>
    <div v-for="item in dataState">
      <span> store item: {{ item }} </span>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@nanostores/vue";
import { data } from "../stores/store.js";

const dataState = useStore(data);
</script>
