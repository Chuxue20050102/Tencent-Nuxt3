// import { onMounted, onUnmounted } from 'vue'
export function useAutoSwitch(nextFn: () => void, interval = 8000) {
  let timer: ReturnType<typeof setInterval> | null = null
  onMounted(() => {
    timer = setInterval(() => {
      nextFn()
    }, interval)
  })
  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })
}