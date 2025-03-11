<template>
  <div class="home text-center space-y-4">
    <div class="count text-center text-5xl my-8">{{ storeCounter.count }}</div>

    <div class="flex gap-x-2 justify-center mt-6">
      <button @click="storeCounter.decreaseCount" class="px-2 py-1 border rounded border-gray-400 hover:bg-gray-300">-</button>
      <button @click="storeCounter.increaseCount" class="px-2 py-1 border rounded border-gray-400 hover:bg-gray-300">+</button>
    </div>

    <hr>

    <div>The counter is: {{ storeCounter.oddOrEven }}</div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();
</script>
