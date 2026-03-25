<template>
  <component
    :is="tag"
    ref="container"
    :class="className"
  >
    <span
      v-for="(word, index) in words"
      :key="index"
      class="inline-block transition-all duration-500"
      :class="visibleWords.includes(index) ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-8'"
      :style="{ transitionDelay: `${index * delay}ms` }"
    >
      {{ word }}&nbsp;
    </span>
  </component>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: 'h1'
  },
  className: {
    type: String,
    default: ''
  },
  delay: {
    type: Number,
    default: 100
  }
})

const container = ref(null)
const visibleWords = ref([])
const hasAnimated = ref(false)

const words = computed(() => props.text.split(' '))

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true
          animateWords()
        }
      })
    },
    { threshold: 0.2 }
  )

  if (container.value) {
    observer.observe(container.value)
  }

  onUnmounted(() => {
    observer.disconnect()
  })
})

function animateWords() {
  words.value.forEach((_, index) => {
    setTimeout(() => {
      visibleWords.value.push(index)
    }, index * props.delay)
  })
}
</script>

<style scoped>
.blur-0 {
  filter: blur(0);
}

.blur-sm {
  filter: blur(8px);
}
</style>
