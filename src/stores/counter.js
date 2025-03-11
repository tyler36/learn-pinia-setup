import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  /* States */
  const count = ref(0)

  /* Actions */
  function increaseCount() {
    count.value++
  }
  function decreaseCount() {
    count.value--
  }

  return {
    /* States */
    count,
    /* Actions */
    increaseCount,
    decreaseCount,
  }
})
