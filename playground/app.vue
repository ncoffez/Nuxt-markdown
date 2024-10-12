<!-- eslint-disable -->
<template>
  <section class="container max-w-screen-md mx-auto p-16">
    <h1 class="text-3xl font-bold mb-4 mt-2">Markdown editor</h1>
    <div class="bg-stone-200 w-full h-64 p-2"></div>
    <h1 class="text-3xl font-bold mb-4 mt-2">Article</h1>
    <div class="w-full h-fit p-4" v-html="markdown"></div>

    <h1 class="text-3xl font-bold mb-4 mt-16">Markdown</h1>
    <p class="text-stone-500 italic">{{ markdown }}</p>
  </section>
</template>

<script setup>
import markdownit from 'markdown-it'
import markdownExample from './content/template.md?raw'

console.log(String(markdownExample))
const markdown = ref(markdownit({
  html: true,
  linkify: true,
  typographer: true,
}).render(markdownExample))
</script>
