<template>
  <div class="about">
    <h1>About</h1>
    <button @click="storeCounter.increaseCount" class="px-2 py-1 border rounded border-gray-400 hover:bg-gray-300">{{
      storeCounter.count }}</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();
</script>
