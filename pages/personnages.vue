<script setup lang="ts">
const personnages = [
  {
    name: "Galadriel",
    description:
      "Une guerrière elfe légendaire et la commandante des armées du Nord. Loin de la sage et éthérée Dame de Lórien qu'elle deviendra un jour, cette Galadriel beaucoup plus jeune est entêtée, implacable et obsédée par la chasse d'un mal insaisissable.",
    actor: "Morfydd Clark",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Galadriel_1080_Thumbnail_7b18ca42-8116-4b54-8d55-c071efe7772d._SX140_.jpg",
  },
  {
    name: "Elrond",
    description:
      "Lorsque le choix lui a été donné, Elrond le demi-elfe a choisi l'immortalité, tandis que son frère Elros a choisi une vie mortelle et est devenu le premier roi de Númenor. La grandeur est dans les veines d'Elrond, mais il n'a pas encore totalement trouvé sa place dans le monde. Il est tenaillé entre faire ce qui est juste pour son royaume et rester fidèle à ceux qui lui sont les plus chers.",
    actor: "Robert Aramayo",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Elrond_1080_Thumbnail_63aa3085-56be-4fc7-96c9-f5d14f7c4f95._SX140_.jpg",
  },
  {
    name: "Arondir",
    description:
      "Arondir est un Elfe sylvain, Elfes qui n'ont jamais quitté la Terre du Milieu pour Valinor. Il a grandi dans les terres aujourd'hui englouties du Beleriand et a veillé un siècle sur les hommes des Terres du Sud, dont les ancêtres ont basculé du côté du mal il y a longtemps. La garde séculaire des Elfes touche à sa fin, mais Arondir s'est attaché à ses protégés, surtout à la guérisseuse Bronwyn.",
    actor: "Ismael Cruz Cordova",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Arondir_1080_Thumbnail_0d9c0698-3be9-4007-9130-0ad7014df416._SX140_.jpg",
  },
  {
    name: "Celebrimbor",
    description:
      "Celebrimbor est un artisan visionnaire et seigneur elfe d'Eregion, qui a pour projet d'entreprendre un grand travail qui transformera la Terre du Milieu en un lieu dont la beauté pourra rivaliser même avec la grâce de Valinor.",
    actor: "Charles Edwards",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Celebrimor_1080_Thumbnail_58515550-3f6d-4baf-aec0-24fd7b8c5ecb._SX140_.jpg",
  },
  {
    name: "Gil-galad",
    description:
      "Le Haut Roi Gil-galad est un guerrier et roi elfique puissant, pragmatique et sage. Régnant depuis la capitale elfique de Lindon, il aspire à un avenir radieux pour tous les elfes, mais recèle un grand secret qui menace à la fois son peuple et toute la Terre du Milieu.",
    actor: "Benjamin Walker",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Gil-galad_1080_Thumbnail_5058c1d1-bd36-48e1-80c8-bb9a4d764b56._SX140_.jpg",
  },
  {
    name: "Míriel",
    description:
      "Son père vieillissant détient toujours officiellement le sceptre du royaume insulaire de Númenor, mais la Reine Régente Míriel en est la dirigeante par intérim. Bien que le royaume soit au sommet de sa richesse et de sa puissance, Míriel porte le fardeau d'un terrible secret qui plane sur tout son peuple.",
    actor: "Cynthia Addai-Robinson",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Miriel_1080_Thumbnail_8bd77708-d7ff-4e1a-83cc-9c3af5f39e0f._SX140_.jpg",
  },
];

const { path } = useRoute();
const title = "Personnages des Anneaux de Pouvoir";
const description =
  "Personnages de la série du 'Le Seigneur des anneaux : Les Anneaux de Pouvoir'";
const img = "https://anneauxdepouvoir.fr/images/fond.jpg";
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
      <UContainer class="max-w-5xl animate-fade-right">
        <div class="flex flex-wrap -m-4">
          <div v-for="personnage in personnages" class="p-4 lg:w-1/2">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left group"
            >
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 transform transition-transform duration-200 group-hover:scale-105"
                :src="personnage.img"
              />
              <div class="flex-grow sm:pl-8">
                <h2
                  class="text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200"
                >
                  {{ personnage.name }}
                </h2>
                <h3 class="text-primary mb-3 group-hover:opacity-85">
                  {{ personnage.actor }}
                </h3>
                <p class="text-base text-gray-500 dark:text-gray-400 mt-1">
                  {{ personnage.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
