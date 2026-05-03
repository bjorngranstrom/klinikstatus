<template>
  <span class="ref-wrapper" @mouseenter="show" @mouseleave="hide">
    <component :is="superscript ? 'sup' : 'span'" class="ref-link" :style="{ fontSize: fontSize }">{{ label }}</component>
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
  url: String,
  superscript: {
    type: Boolean,
    default: true
  },
  fontSize: {
    type: String,
    default: '12px'
  }
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
  color: #30a46c;
  font-size: 12px;
  font-weight: bold;
}

.ref-tooltip {
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%);
  background: #2c2c2c;
  color: #30a46c !important;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px !important;
  white-space: nowrap;
  z-index: 10000;
  pointer-events: auto;
}

.ref-tooltip a {
  color: #30a46c;
  text-decoration: underline !important;
  cursor: pointer;
}

.ref-tooltip a:hover {
  color: #90a7e6 !important;
}
</style>