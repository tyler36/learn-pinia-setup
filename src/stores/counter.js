import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

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

  /* Getters */
  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return 'even'

    return 'odd'
  })
  return {
    /* States */
    count,
    /* Actions */
    increaseCount,
    decreaseCount,
    /* Getters */
    oddOrEven,
  }
})
