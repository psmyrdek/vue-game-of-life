import {ref} from "vue";

export function useCancellableInterval(scheduledFunc, interval) {

    let intervalRef = null
    let isPaused = ref(true)

    function start() {
        intervalRef = setInterval(() => {
            scheduledFunc()
        }, interval)
        isPaused.value = false
    }

    function stop() {
        clearInterval(intervalRef)
        isPaused.value = true
    }

    return {
        start,
        stop,
        isPaused
    }

}