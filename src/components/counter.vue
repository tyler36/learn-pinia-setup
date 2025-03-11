<template>
  <div class="count text-center text-5xl my-8">{{ storeCounter.count }}</div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();
</script>
