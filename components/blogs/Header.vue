<script setup lang="ts">
import type { CustomParsedContent } from "@/types/post";

const props = defineProps<{
  content: CustomParsedContent;
}>();

const timeToRead = computed(() =>
  props.content.readingTime.text.replace("read", "de lecture")
);
</script>
<template>
  <div class="mb-8">
    <div class="mb-3">
      <NuxtLink
        to="/blogs"
        class="text-blue-500 hover:underline inline-flex items-center"
      >
        <UIcon name="i-heroicons-arrow-long-left-16-solid" class="mr-2" />
        Retour aux articles
      </NuxtLink>
    </div>
    <NuxtImg
      v-if="content.image.path"
      class="aspect-video w-full"
      :alt="content.title"
      :src="content.image.path"
    />
    <NuxtImg
      v-else
      class="aspect-video w-full"
      :alt="content.title"
      src="/blogs/no-image.jpg"
    />
    <h1 class="text-5xl mt-8 font-bold mb-4">
      {{ content?.title }}
    </h1>
    <div class="flex">
      <div class="dark:text-stone-400 text-stone-500">
        {{ content?.date }}
      </div>
      <div class="mx-auto" />
      <div class="dark:text-stone-400 text-stone-500">
        {{ timeToRead }}
      </div>
    </div>
  </div>
</template>
