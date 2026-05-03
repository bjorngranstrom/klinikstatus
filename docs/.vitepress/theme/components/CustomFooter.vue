<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <footer class="custom-footer">
        <p>© Björn Granström <br>
            2024-2026. All rights reserved.
        </p>
      </footer>
    </template>
  </Layout>
</template>

<style scoped>
.custom-footer {
  text-align: center;
  padding: 1.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}
</style>
