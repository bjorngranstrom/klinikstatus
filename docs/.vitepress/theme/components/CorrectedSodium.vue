<template>
  <section class="calc-card">
    <h3 class="calc-title"></h3>
    <p class="calc-formula">
      Katz korrektion = P-Natrium (mmol/L) + 0,29 x (P-Glukos (mmol/L) - 5,6)
    </p>

    <div class="calc-grid">
      <label>
        P-Natrium (mmol/L)
        <input
          v-model="pNatrium"
          type="text"
          inputmode="decimal"
          placeholder="t.ex. 126"
        />
      </label>

      <label>
        P-Glukos (mmol/L)
        <input
          v-model="pGlukos"
          type="text"
          inputmode="decimal"
          placeholder="t.ex. 18,4"
        />
      </label>
    </div>

    <p class="calc-result">NATRIUM: <strong>{{ formattedResult }} mmol/L</strong></p>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const pNatrium = ref('')
const pGlukos = ref('')

const parseNumber = (rawValue) => {
  const trimmed = rawValue.trim()
  if (!trimmed) {
    return null
  }

  const normalized = trimmed.replace(',', '.')
  const parsed = Number(normalized)
  return Number.isFinite(parsed) ? parsed : null
}

const rawResult = computed(() => {
  const natrium = parseNumber(pNatrium.value)
  const glukos = parseNumber(pGlukos.value)

  if (natrium === null || glukos === null) {
    return null
  }

  return natrium + 0.29 * (glukos - 5.6)
})

const formattedResult = computed(() => {
  if (rawResult.value === null) {
    return '-'
  }

  return new Intl.NumberFormat('sv-SE', {
    maximumFractionDigits: 0
  }).format(rawResult.value)
})
</script>

<style scoped>
.calc-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem 0;
  background: var(--vp-c-bg-soft);
}

.calc-title {
  margin: 0 0 0.75rem;
  font-size: 1rem;
}

.calc-formula {
  margin: 0 0 0.85rem;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
}

.calc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
}

label {
  display: grid;
  gap: 0.35rem;
  font-size: 0.9rem;
}

input {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.5rem 0.65rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.calc-result {
  margin: 0.9rem 0 0;
  font-size: 1.5rem;
  color: #D6AB1E;
}
</style>
