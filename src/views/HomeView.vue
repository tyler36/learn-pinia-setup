<template>
  <div class="home text-center space-y-4">
    <Counter />
    <div class="flex gap-x-2 justify-center mt-6">
      <button @click="storeCounter.decreaseCount"
        class="px-2 py-1 border rounded border-gray-400 hover:bg-gray-300">-</button>
      <button @click="storeCounter.increaseCount"
        class="px-2 py-1 border rounded border-gray-400 hover:bg-gray-300">+</button>
    </div>

    <hr>

    <div>The counter is: {{ storeCounter.oddOrEven }}</div>
    <hr>

    <div class="flex gap-x-2">
      <h3>Edit counter:</h3>
      <input type="number" v-model="storeCounter.count" class="border rounded border-gray-500 px-2">
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import Counter from "@/components/counter.vue";
const storeCounter = useCounterStore();
</script>
