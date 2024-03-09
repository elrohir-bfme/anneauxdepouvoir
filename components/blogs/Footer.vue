<script setup lang="ts">
import type { CustomParsedContent } from "@/types/post";

defineProps<{
  content: CustomParsedContent;
}>();
</script>
<template>
  <div>
    <div class="flex items-center gap-2 mb-2">
      <UTooltip text="Categories">
        <UIcon class="text-xl" name="i-heroicons-bookmark-square" />
      </UTooltip>
      <NuxtLink
        v-for="categoryEl in content.categories || []"
        :key="categoryEl"
        :to="{
          path: '/blogs',
          query: {
            category: categoryEl,
          },
        }"
      >
        <UBadge class="dark:!text-white" :label="categoryEl" />
      </NuxtLink>
    </div>
    <div class="flex items-center gap-2 mb-4">
      <UTooltip text="Tags">
        <UIcon color="primary" class="text-xl" name="i-heroicons-tag" />
      </UTooltip>
      <NuxtLink
        v-for="tagEl in content.tags || []"
        :key="tagEl"
        :to="{
          path: '/blogs',
          query: {
            tag: tagEl,
          },
        }"
      >
        <UBadge class="dark:!text-white" color="primary" :label="tagEl" />
      </NuxtLink>
    </div>
    <BlogsShares :content="content" />
  </div>
</template>
