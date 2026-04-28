<template>
  <span class="ref-wrapper" @mouseenter="show" @mouseleave="hide">
    <sup class="ref-link">[{{ label }}]</sup>
    <div v-show="showTooltip" class="ref-tooltip">
      <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer" @click.stop>{{ citation }}</a>
      <span v-else>{{ citation }}</span>
    </div>
  </span>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: String,
  citation: String,
  url: String
})

const showTooltip = ref(false)
let hideTimeout

const show = () => {
  clearTimeout(hideTimeout)
  showTooltip.value = true
}

const hide = () => {
  hideTimeout = setTimeout(() => {
    showTooltip.value = false
  }, 200)
}
</script>

<style scoped>
.ref-wrapper {
  position: relative;
  display: inline;
}

.ref-link {
  color: #0066cc;
  cursor: help;
  font-weight: bold;
}

.ref-tooltip {
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 13px;
  white-space: nowrap;
  z-index: 10000;
  pointer-events: auto;
}

.ref-tooltip a {
  color: #64b5f6;
  text-decoration: underline;
  cursor: pointer;
}

.ref-tooltip a:hover {
  color: #90caf9;
}
</style>