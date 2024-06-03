<script setup lang="ts">
import type { CustomParsedContent } from "@/types/post";

const props = defineProps<{
  content: CustomParsedContent;
}>();

const publishedAt = computed(() => props.content.date);
const timeToRead = computed(() =>
  props.content.readingTime.text.replace("read", "de lecture")
);
</script>
<template>
  <NuxtLink class="h-full" :to="content._path">
    <div class="h-full flex flex-col border rounded-2xl">
      <div class="aspect-video overflow-hidden rounded-t-2xl relative">
        <UBadge
          v-if="content._locale"
          class="absolute top-3 right-2 dark:text-white"
          :label="content._locale"
          color="red"
        />
        <NuxtImg
          v-if="content.image?.path"
          class="mx-auto hover:scale-125 transition duration-200 cursor-pointer"
          :alt="content.title"
          :src="content.image.path"
        />
        <NuxtImg
          v-else
          class="w-full h-full hover:scale-125 transition duration-200 cursor-pointer"
          :alt="content.title"
          src="/blogs/no-image.jpg"
        />
      </div>
      <div class="p-3 flex-1 flex flex-col">
        <div class="space-x-2 mb-1">
          <UBadge
            v-for="categoryEl in content.categories"
            :key="categoryEl"
            :label="categoryEl"
            color="primary"
          />
        </div>
        <div class="space-x-2 mb-1.5">
          <UBadge
            v-for="tagEl in content.tags"
            :key="tagEl"
            :label="tagEl"
            size="xs"
            color="white"
          />
        </div>
        <h2 class="text-lg font-bold hover:text-primary-500">
          {{ content.title }}
        </h2>
        <p class="line-clamp-2 mb-3">
          {{ content.description }}
        </p>
      </div>
      <hr />
      <div class="p-3 mt-auto w-full flex items-center justify-between text-sm">
        <div class="opacity-75">
          {{ publishedAt }}
        </div>
        <div class="opacity-75">
          {{ timeToRead }}
        </div>
        <div>
          <UtilsShare :url="content._path || ''" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
