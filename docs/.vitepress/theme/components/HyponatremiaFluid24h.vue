<template>
  <section class="calc-card">
    <h3 class="calc-title">Natriumkorrigering vid hypovolem hyponatremi</h3>
    <p class="calc-formula">
      Fyll i varje steg för att låsa upp nästa beräkning.
    </p>

    <div class="step-block">
      <h4>Steg 1. Total mängd kroppsvatten och ökningsmål</h4>
      <div class="calc-grid">
        <label>
          Kön
          <div class="select-wrap">
            <select v-model="sex">
              <option value="kvinna">Kvinna (0,5 x vikt)</option>
              <option value="man">Man (0,6 x vikt)</option>
            </select>
          </div>
        </label>

        <label>
          Vikt (kg)
          <input
            v-model="weightKg"
            type="text"
            inputmode="decimal"
            placeholder="t.ex. 70"
          />
        </label>

        <label>
          Ökningsmål för P-Na (mmol/L)
          <input
            v-model="targetIncrease"
            type="text"
            inputmode="decimal"
            placeholder="t.ex. 6"
          />
        </label>
      </div>

      <label class="calc-checkbox">
        <input v-model="highOdsRisk" type="checkbox" />
        Ökad risk för ODS (t.ex. kvinna, alkoholöverkonsumtion, malnutrition, hypokalemi, P-Na<120 mmol/L)
      </label>

      <p class="calc-result">
        Totalvatten: <strong>{{ formatLiters(totalBodyWaterLiters) }}</strong>
      </p>
    </div>

    <div class="step-block">
      <h4>Steg 2. Total mängd Na som behövs</h4>
      <p v-if="!step1Ready" class="calc-hint">
        Fyll i steg 1 för att räkna ut natriumbehov.
      </p>
      <p v-else class="calc-result">
        Na-behov: <strong>{{ formatMmol(totalNaNeedMmol) }}</strong>
      </p>
      <p class="calc-note">Formel: Totalvatten x ökningsmål för P-Na</p>
    </div>

    <div class="step-block">
      <h4>Steg 3. Totalt vätskebehov</h4>
      <label>
        Na-koncentration i infusionslösning (mmol/L)
        <input
          v-model="infusionNaConcentration"
          type="text"
          inputmode="decimal"
          placeholder="t.ex. 154 för NaCl 0,9%"
          :disabled="!step1Ready"
        />
      </label>

      <p v-if="!step2Ready" class="calc-hint">
        Ange koncentration för att få total vätskevolym.
      </p>
      <p v-else class="calc-result">
        Totalt vätskebehov: <strong>{{ formatLiters(totalFluidNeedLiters) }}</strong>
        <span class="calc-inline">({{ formatMl(totalFluidNeedLiters) }})</span>
      </p>
      <p class="calc-note">Formel: Na-behov / Na-koncentration</p>
    </div>

    <div class="step-block">
      <h4>Steg 4. Infusionshastighet</h4>
      <label>
        Antal timmar
        <input
          v-model="hours"
          type="text"
          inputmode="decimal"
          placeholder="t.ex. 24"
          :disabled="!step2Ready"
        />
      </label>

      <p v-if="!step3Ready" class="calc-hint">
        Fyll i antal timmar för att räkna infusionshastighet.
      </p>
      <p v-else class="calc-result">
        Infusionshastighet: <strong>{{ formatRate(infusionRateMlPerHour) }}</strong>
      </p>
      <p v-if="step3Ready" class="calc-note">
        Beräknad korrigeringstakt: {{ formatNumber(correctionRate24h, 1) }} mmol/L per 24 h
      </p>
      <p class="calc-note">Formel: Totalt vätskebehov / antal timmar</p>

      <div v-if="safetyTier" class="safety-box" :class="`safety-${safetyTier.level}`">
        <p class="safety-title">{{ safetyTier.title }}</p>
        <p class="safety-text">{{ safetyTier.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const sex = ref('kvinna')
const weightKg = ref('')
const targetIncrease = ref('')
const infusionNaConcentration = ref('')
const hours = ref('24')
const highOdsRisk = ref(false)

const parseNumber = (rawValue) => {
  const trimmed = rawValue.trim()
  if (!trimmed) {
    return null
  }

  const normalized = trimmed.replace(',', '.')
  const parsed = Number(normalized)
  return Number.isFinite(parsed) ? parsed : null
}

const bodyWaterFactor = computed(() => {
  return sex.value === 'man' ? 0.6 : 0.5
})

const totalBodyWaterLiters = computed(() => {
  const weight = parseNumber(weightKg.value)
  if (weight === null || weight <= 0) {
    return null
  }

  return weight * bodyWaterFactor.value
})

const sodiumIncrease = computed(() => {
  const increase = parseNumber(targetIncrease.value)
  if (increase === null || increase <= 0) {
    return null
  }

  return increase
})

const step1Ready = computed(() => {
  return totalBodyWaterLiters.value !== null && sodiumIncrease.value !== null
})

const totalNaNeedMmol = computed(() => {
  if (!step1Ready.value) {
    return null
  }

  return totalBodyWaterLiters.value * sodiumIncrease.value
})

const sodiumConcentration = computed(() => {
  const concentration = parseNumber(infusionNaConcentration.value)
  if (concentration === null || concentration <= 0) {
    return null
  }

  return concentration
})

const step2Ready = computed(() => {
  return totalNaNeedMmol.value !== null && sodiumConcentration.value !== null
})

const totalFluidNeedLiters = computed(() => {
  if (!step2Ready.value) {
    return null
  }

  return totalNaNeedMmol.value / sodiumConcentration.value
})

const totalHours = computed(() => {
  const duration = parseNumber(hours.value)
  if (duration === null || duration <= 0) {
    return null
  }

  return duration
})

const step3Ready = computed(() => {
  return totalFluidNeedLiters.value !== null && totalHours.value !== null
})

const infusionRateMlPerHour = computed(() => {
  if (!step3Ready.value) {
    return null
  }

  return (totalFluidNeedLiters.value * 1000) / totalHours.value
})

const correctionRate24h = computed(() => {
  if (!step3Ready.value) {
    return null
  }

  return (sodiumIncrease.value / totalHours.value) * 24
})

const safetyTier = computed(() => {
  const rate = correctionRate24h.value
  if (rate === null) {
    return null
  }

  if (rate <= 4) {
    return {
      level: 'green',
      title: 'LÅG RISK',
      text: 'Planerad korrektion är <= 4 mmol/L per 24 h. Rimlig nivå vid hög ODS-risk.'
    }
  }

  if (rate <= 6) {
    if (highOdsRisk.value) {
      return {
        level: 'red',
        title: 'FÖRHÖJD RISK',
        text: 'Vid ökad ODS-risk bör man oftast undvika > 4 mmol/L per 24 h.'
      }
    }

    return {
      level: 'yellow',
      title: 'STANDARDMÅL',
      text: 'Planerad korrektion är 4-6 mmol/L per 24 h. Kräver tät monitorering.'
    }
  }

  if (rate <= 8) {
    return {
      level: highOdsRisk.value ? 'darkred' : 'red',
      title: highOdsRisk.value ? 'HÖG RISK' : 'FÖRHÖJD RISK',
      text: highOdsRisk.value
        ? 'Vid ökad ODS-risk är denna takt tydligt hög. Överväg lägre mål.'
        : 'Över 6 mmol/L per 24 h innebar ökad risk för överkorrektion.'
    }
  }

  return {
    level: 'darkred',
    title: 'MYCKET HÖG RISK',
    text: 'Över 8 mmol/L per 24 h innebär tydlig risk för överkorrektion och ODS.'
  }
})

const formatNumber = (value, decimals = 1) => {
  if (value === null) {
    return '-'
  }

  return new Intl.NumberFormat('sv-SE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals
  }).format(value)
}

const formatLiters = (value) => {
  if (value === null) {
    return '-'
  }

  return `${formatNumber(value, 2)} L`
}

const formatMmol = (value) => {
  if (value === null) {
    return '-'
  }

  return `${formatNumber(value, 0)} mmol`
}

const formatMl = (liters) => {
  if (liters === null) {
    return '-'
  }

  return `${formatNumber(liters * 1000, 0)} ml`
}

const formatRate = (value) => {
  if (value === null) {
    return '-'
  }

  return `${formatNumber(value, 0)} ml/h`
}
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
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
}

.calc-formula {
  margin: 0 0 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
}

.step-block {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 0.85rem;
  margin-top: 0.85rem;
}

.step-block:first-of-type {
  border-top: 0;
  padding-top: 0;
  margin-top: 0;
}

.step-block h4 {
  margin: 0 0 0.6rem;
  font-size: 1rem;
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
  margin-bottom: 0.6rem;
}

.calc-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 0.25rem 0 0.6rem;
  font-size: 0.9rem;
}

.calc-checkbox input {
  width: auto;
  margin-top: 0.2rem;
}

input,
select {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.5rem 0.65rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.select-wrap {
  position: relative;
}

.select-wrap::after {
  content: '';
  position: absolute;
  right: 0.75rem;
  top: 50%;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid var(--vp-c-text-2);
  transform: translateY(-35%);
  pointer-events: none;
}

.select-wrap select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 2rem;
}

input:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.calc-result {
  margin: 0.5rem 0 0;
  font-size: 1rem;
}

.calc-result strong {
  color: #d6ab1e;
}

.calc-inline {
  margin-left: 0.35rem;
  color: var(--vp-c-text-2);
}

.calc-hint {
  margin: 0.4rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.calc-note {
  margin: 0.35rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.82rem;
}

.safety-box {
  margin-top: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
}

.safety-title {
  margin: 0;
  font-weight: 700;
}

.safety-text {
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
}

.safety-green {
  background: rgba(32, 143, 91, 0.14);
  border-color: rgba(32, 143, 91, 0.5);
}

.safety-yellow {
  background: rgba(214, 171, 30, 0.16);
  border-color: rgba(214, 171, 30, 0.5);
}

.safety-red {
  background: rgba(199, 0, 57, 0.12);
  border-color: rgba(199, 0, 57, 0.45);
}

.safety-darkred {
  background: rgba(110, 0, 25, 0.22);
  border-color: rgba(199, 0, 57, 0.7);
}
</style>
