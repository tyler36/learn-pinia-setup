<template>
  <div class="home text-center space-y-4">
    <div class="count text-center text-5xl my-8">{{ count }}</div>

    <div class="flex gap-x-2 justify-center mt-6">
      <button @click="decreaseCount" class="px-2 py-1 border rounded border-gray-400 hover:bg-gray-300">-</button>
      <button @click="increaseCount" class="px-2 py-1 border rounded border-gray-400 hover:bg-gray-300">+</button>
    </div>

    <hr>

    <div>The counter is: {{ oddOrEven }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const count = ref(5)

function increaseCount() {
  count.value++
}
function decreaseCount() {
  count.value--
}

const oddOrEven = computed(() => {
  if (count.value % 2 === 0 ) return 'even'

  return 'odd'
})
</script>
