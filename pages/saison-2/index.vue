<script setup lang="ts">
const items = [
  {
    key: "episode-1",
    label: "?",
    date: "29 août 2024",
    img: "https://m.media-amazon.com/images/S/pv-target-images/4d40c1b5c588c61ac05275df50a4e1642c0354a79c8b9eb1766bc96f184e779d.jpg",
    duration: "?",
    icon: "i-heroicons-information-circle",
    description: "",
    anecdote: [],
    conceptArts: [],
  },
  {
    key: "episode-2",
    label: "?",
    date: "29 août 2024",
    img: "https://m.media-amazon.com/images/S/pv-target-images/4d40c1b5c588c61ac05275df50a4e1642c0354a79c8b9eb1766bc96f184e779d.jpg",
    duration: "?",
    icon: "i-heroicons-information-circle",
    description: "",
    anecdote: [],
    conceptArts: [],
  },
  {
    key: "episode-3",
    label: "?",
    date: "29 août 2024",
    img: "https://m.media-amazon.com/images/S/pv-target-images/4d40c1b5c588c61ac05275df50a4e1642c0354a79c8b9eb1766bc96f184e779d.jpg",
    duration: "?",
    icon: "i-heroicons-information-circle",
    description: "",
    anecdote: [],
    conceptArts: [],
  },
  {
    key: "episode-4",
    label: "?",
    date: "5 septembre 2024",
    img: "https://m.media-amazon.com/images/S/pv-target-images/4d40c1b5c588c61ac05275df50a4e1642c0354a79c8b9eb1766bc96f184e779d.jpg",
    duration: "?",
    icon: "i-heroicons-information-circle",
    description: "",
    anecdote: [],
    conceptArts: [],
  },
  {
    key: "episode-5",
    label: "?",
    date: "12 septembre 2024",
    img: "https://m.media-amazon.com/images/S/pv-target-images/4d40c1b5c588c61ac05275df50a4e1642c0354a79c8b9eb1766bc96f184e779d.jpg",
    duration: "?",
    icon: "i-heroicons-information-circle",
    description: "",
    anecdote: [],
    conceptArts: [],
  },
  {
    key: "episode-6",
    label: "?",
    date: "19 septembre 2024",
    img: "https://m.media-amazon.com/images/S/pv-target-images/4d40c1b5c588c61ac05275df50a4e1642c0354a79c8b9eb1766bc96f184e779d.jpg",
    duration: "?",
    icon: "i-heroicons-information-circle",
    description: "",
    anecdote: [],
    conceptArts: [],
  },
  {
    key: "episode-7",
    label: "?",
    date: "26 septembre 2024",
    img: "https://m.media-amazon.com/images/S/pv-target-images/4d40c1b5c588c61ac05275df50a4e1642c0354a79c8b9eb1766bc96f184e779d.jpg",
    duration: "?",
    icon: "i-heroicons-information-circle",
    description: "",
    anecdote: [],
    conceptArts: [],
  },
  {
    key: "episode-8",
    label: "?",
    date: "3 octobre 2024",
    img: "https://m.media-amazon.com/images/S/pv-target-images/4d40c1b5c588c61ac05275df50a4e1642c0354a79c8b9eb1766bc96f184e779d.jpg",
    duration: "?",
    icon: "i-heroicons-information-circle",
    description: "",
    anecdote: [],
    conceptArts: [],
  },
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});

const { path } = useRoute();
const title = "Saison 1 des Anneaux de Pouvoir";
const description =
  "Saison 1 de la série du 'Le Seigneur des anneaux : Les Anneaux de Pouvoir'";
const img = "https://anneauxdepouvoir.fr/images/saison_1.jpg";
const url = `https://anneauxdepouvoir.fr${path}`;

useSeoMeta({
  description: description,
  ogDescription: description,
  twitterDescription: description,
  twitterImageAlt: title,
  ogImageAlt: title,
  twitterTitle: title,
  title: title,
  ogTitle: title,
  twitterImage: img,
  ogImage: img,
  ogImageUrl: img,
  ogUrl: url,
  twitterSite: "anneauxdepouvoir.fr",
  ogSiteName: "anneauxdepouvoir.fr",
});
</script>

<template>
  <div class="mt-14 py-3">
    <section class="py-10">
      <UContainer class="max-w-5xl">
        <UTabs :items="items" class="w-full">
          <template #default="{ item, index, selected }">
            <div class="flex items-center gap-2 relative truncate">
              <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

              <UTooltip :text="`${item.label}`">
                <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
              </UTooltip>

              <span
                v-if="selected"
                class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
              />
            </div>
          </template>
          <template #item="{ item }">
            <UCard class="bg-gray-50">
              <template #header>
                <UBadge class="my-2" :label="item.label" />
                <UDivider
                  :label="`Sortie : ${item.date} | Durée : ${item.duration}`"
                />
                <p class="my-1 text-sm text-gray-500 dark:text-gray-400">
                  {{ item.description }}
                </p>

                <NuxtImg
                  v-if="item.img"
                  class="aspect-video w-full rounded-lg animate-fade-up animate-once animate-ease-in-out"
                  :alt="item.label"
                  :src="item.img"
                />
              </template>

              <UAccordion
                multiple
                default-open
                variant="ghost"
                size="sm"
                :items="item.anecdote"
              />

              <UCarousel
                ref="carouselRef"
                v-slot="{ item }"
                :items="item.conceptArts"
                :ui="{ item: 'basis-full' }"
                class="rounded-lg overflow-hidden"
                indicators
              >
                <img :src="item" class="w-full" draggable="false" />
              </UCarousel>

              <template #footer>
                <UAlert
                  icon="i-heroicons-chat-bubble-bottom-center-text"
                  color="primary"
                  variant="subtle"
                  title="Anecdotes"
                  description="Les anecdotes proviennt d'Amazon Prime Video"
                />
              </template>
            </UCard>
          </template>
        </UTabs>
      </UContainer>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
