<template>
  <span ref="wrapperEl" class="ref-wrapper" @mouseenter="show" @mouseleave="hide">
    <component :is="superscript ? 'sup' : 'span'" class="ref-link" :style="{ fontSize: fontSize }">{{ label }}</component>
    <div ref="tooltipEl" v-show="showTooltip" class="ref-tooltip" :style="tooltipStyle">
      <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer" @click.stop>{{ citation }}</a>
      <span v-else>{{ citation }}</span>
    </div>
  </span>
</template>

<script setup>
import { nextTick, ref } from 'vue'

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
const wrapperEl = ref(null)
const tooltipEl = ref(null)
const tooltipStyle = ref({})
let hideTimeout

const updateTooltipPosition = () => {
  if (!wrapperEl.value || !tooltipEl.value) {
    return
  }

  const triggerRect = wrapperEl.value.getBoundingClientRect()
  const tooltipRect = tooltipEl.value.getBoundingClientRect()
  const margin = 8
  const gap = 8

  let left = triggerRect.left + triggerRect.width / 2
  const minLeft = tooltipRect.width / 2 + margin
  const maxLeft = window.innerWidth - tooltipRect.width / 2 - margin
  left = Math.max(minLeft, Math.min(left, maxLeft))

  const shouldPlaceBelow = triggerRect.top < tooltipRect.height + gap + margin
  const top = shouldPlaceBelow
    ? triggerRect.bottom + gap
    : triggerRect.top - gap

  tooltipStyle.value = {
    left: `${left}px`,
    top: `${top}px`,
    transform: shouldPlaceBelow ? 'translate(-50%, 0)' : 'translate(-50%, -100%)'
  }
}

const show = async () => {
  clearTimeout(hideTimeout)
  showTooltip.value = true
  await nextTick()
  updateTooltipPosition()
}

const hide = () => {
  hideTimeout = setTimeout(() => {
    showTooltip.value = false
  }, 100)
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
  position: fixed;
  left: 0;
  top: 0;
  background: #2c2c2c;
  color: #30a46c !important;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px !important;
  max-width: min(80vw, 420px);
  white-space: normal;
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