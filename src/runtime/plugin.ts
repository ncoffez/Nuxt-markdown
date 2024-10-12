import type { NuxtApp } from '@nuxt/schema'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((_nuxtApp: NuxtApp) => {
  console.log('Plugin injected by my-module!')
  console.log(_nuxtApp)
})
