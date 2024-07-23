<script setup lang="ts">
import type { CustomParsedContent } from "@/types/post";

const { data } = await useAsyncData(
  "blogs",
  async () =>
    await queryContent<CustomParsedContent>("blogs/")
      .sort({
        date: -1,
      })
      .limit(6)
      .find()
);
</script>

<template>
  <section class="pb-10 pt-1 animate-fade-right">
    <UContainer>
      <div class="flex justify-between">
        <h2 class="text-3xl font-bold capitalize lg:mb-8 mb-4">
          Articles récent
        </h2>
        <NuxtLink to="/blogs">
          <UTooltip class="uppercase" text="Voir plus ">
            <UButton
              class="capitalize animate-fade-left animate-delay-1000"
              color="primary"
              variant="link"
              icon="i-lucide-arrow-right"
              trailing
            >
              Voir Plus
            </UButton>
          </UTooltip>
        </NuxtLink>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <CardsBlog
          v-for="(dataEl, index) in data"
          :key="dataEl._id"
          :content="dataEl"
          data-animate="animate-fade-down"
          :class="{
            'lg:animate-delay-[200ms]': index === 0,
            'lg:animate-delay-[400ms]': index === 1,
            'lg:animate-delay-[600ms]': index === 2,
          }"
        />
        <!-- :style="`animation-delay:${200 * (index + 1)}ms;`" -->
      </div>
    </UContainer>
  </section>
</template>

<style></style>
