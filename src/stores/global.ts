import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobal = defineStore('global', () => {
    //const count = ref(0)
    //const doubleCount = computed(() => count.value * 2)
    // function increment() {
    //     count.value++
    // }

    // 整个页面滚动条
    const scrollTop = ref(0)
    const setScrollTop = (val: number) => (scrollTop.value = val)

    return { scrollTop, setScrollTop }
})
