<script setup lang="ts">
import type { CustomParsedContent } from "@/types/post";

const { data } = await useAsyncData(
  "nlogs",
  async () =>
    await queryContent<CustomParsedContent>("blogs/")
      .sort({
        date: -1,
      })
      .limit(3)
      .find()
);
</script>

<template>
  <section class="py-10 lg:py-20">
    <UContainer
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <NuxtImg
          class="animate-fade-right object-cover object-center rounded-3xl ring-2 ring-primary"
          alt="Vardamire"
          src="/images/valinor.jpg"
        />
      </div>
      <div
        class="animate-fade lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
          Le Seigneur des anneaux : Les Anneaux de Pouvoir
        </h1>
        <p class="mb-8 leading-relaxed">
          Série prévue pour cinq saisons, explorant les événements majeurs du
          Second Âge, tels que la création des Anneaux de Pouvoir et la montée
          de Sauron.
        </p>
        <div class="flex flex-wrap space-y-4 items-end">
          <UButton
            to="/blogs"
            class="ml-4 inline-flex 0 border-0 py-2 px-6 focus:outline-none rounded text-lg"
          >
            Articles
          </UButton>
          <UButton
            to="/cartes"
            class="ml-4 inline-flex 0 border-0 py-2 px-6 focus:outline-none rounded text-lg"
          >
            Cartes
          </UButton>
          <UButton
            to="/personnages"
            class="ml-4 inline-flex 0 border-0 py-2 px-6 focus:outline-none rounded text-lg"
          >
            Personnages
          </UButton>
          <UButton
            to="/saison-1"
            class="ml-4 inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg"
          >
            Saison 1
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>

  <section class="py-10 lg:py-20 bg-[url('/images/valinor_full.jpg')] bg-cover">
    <UContainer>
      <iframe
        title="Dernière vidéo d'Elrohir"
        class="w-full aspect-video animate-fade-up"
        src="https://www.youtube.com/embed?listType=playlist&list=PLy4hW4CmHHNQSWNd9ztx-3pOcgjtA6uJK&index=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </UContainer>
  </section>

  <section class="py-10 lg:py-20 animate-fade-right">
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
