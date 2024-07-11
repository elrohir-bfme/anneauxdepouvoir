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
  {
    name: "Elendil",
    description:
      "Capitaine d'un navire de garde númenóréen, Elendil est le plus en paix lorsqu'il est en mer. Veuf, ses enfants désormais adultes entament de nouveaux chapitres de leur vie qui vont l'envoyer vers des eaux inexplorées.",
    actor: "Lloyd Owen",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Elendil_1080_Thumbnail_e7c65896-6e9a-4173-8a25-65d46b53b615._SX140_.jpg",
  },
  {
    name: "Pharazôn",
    description:
      "Pharazôn est un homme d'État númenóréen respecté et le bras droit de la Reine Régente Míriel, qui parvient néanmoins à être un homme du peuple. Mais sous son extérieur réfléchi, il cache ses propres grandes ambitions pour Númenor.",
    actor: "Trystan Gravelle",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Pharazon_1080_Thumbnail_285534fe-12d2-447f-ac3d-a26d45d613f7._SX140_.jpg",
  },
  {
    name: "Eärien",
    description:
      "Eärien est la fille talentueuse et ambitieuse d'Elendil et la sœur d'Isildur. Bien qu'ils partagent tous un lien fort, dans un royaume en proie à des tensions politiques et sociales complexes, Eärien constate que ses convictions peuvent être en contradiction avec tous les autres membres de sa famille.",
    actor: "Ema Horvath",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Earien_1080_Thumbnail_5661f8fd-44d3-4c7a-bb4d-c1775fa69e45._SX140_.jpg",
  },
  {
    name: "Isildur",
    description:
      "Isildur est un jeune homme avec son avenir déjà tracé. Bientôt, il prendra sa place aux côtés de son père Elendil dans la Garde Maritime de Númenor. Il n'est cependant pas sûr que ce soit l'avenir qu'il souhaite pour lui-même et se demande s'il pourrait emprunter une autre voie.",
    actor: "Max Baldry",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Elendil_1080_Thumbnail_e7c65896-6e9a-4173-8a25-65d46b53b615._SX140_.jpg",
  },
  {
    name: "Kemen",
    description:
      "Kemen est un jeune homme númenóréen arrogant mais charmant qui est impatient de gagner l'approbation de son père Pharazôn, peut-être même en allant trop loin pour prouver son allégeance aux idéaux de son père.",
    actor: "Max Baldry",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Kemen_1080_Thumbnail_b7cafb28-2d31-4df9-ac85-5a3e4d65a014._SX140_.jpg",
  },
  {
    name: "Bronwyn",
    description:
      "Kemen est un jeune homme númenóréen arrogant mais charmant qui est impatient de gagner l'approbation de son père Pharazôn, peut-être même en allant trop loin pour prouver son allégeance aux idéaux de son père.Bronwyn est une mère célibataire et une guérisseuse des Terres du Sud, avec un esprit et une curiosité complètement méconnus de ceux qui l'entourent. Un seul la voit pour qui elle est vraiment : l'elfe-soldat Arondir. Mais il est détesté par tous les habitants de Bronwyn, rendant toute relation entre eux interdite.",
    actor: "Nazanin Boniadi",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Bronwyn_1080_Thumbnail_54c46f7d-5cf9-43cb-96e8-18cef2d7287f._SX140_.jpg",
  },
  {
    name: "Halbrand",
    description:
      "Halbrand est un homme des Terres du Sud, un naufragé espiègle en fuite de son passé, et peut-être de son destin.",
    actor: "Charlie Vickers",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Halbrand_1080_Thumbnail_2d164417-f168-4da0-948d-49504ddb71de._SX140_.jpg",
  },
  {
    name: "Theo",
    description:
      "Le fils unique de Bronwyn, qui a grandi sous l'œil vigilant d'elfes qui ne peuvent pas voir au-delà de l'héritage ancestral du mal de son peuple. Alors qu'il se débat avec les questions de sa vie et cherche à faire ses preuves, il se retrouve tenté par une sombre découverte.",
    actor: "Tyroe Muhafidin",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Theo_1080_Thumbnail_798d7924-99ab-44f7-b054-3f86aa89a94c._SX140_.jpg",
  },
  {
    name: "Elanor",
    description:
      "Nori est une Piévelue, une communauté ancestrale errante de semi-hommes qui deviendront un jour des Hobbits. Rêveuse jusqu'à la moelle, Nori aspire à l'aventure en dehors des petites limites du monde périlleux des semi-hommes.",
    actor: "Markella Kavenagh",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Nori_1080_Thumbnail_b01c9787-e7d5-4dc2-8bee-7d05c8d95803._SX140_.jpg",
  },
  {
    name: "Poppy Proudfellow",
    description:
      "Poppy est une orpheline qui a subi une grande perte et a dû grandir rapidement. Poppy est la meilleure amie curieuse et fidèle de Nori qui restera avec elle contre vents et marées, et malgré tous les autres méfaits.",
    actor: "Megan Richards",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Poppy_1080_Thumbnail_ae1cb80b-f483-4ebc-831e-6f6343cdd497._SX140_.jpg",
  },
  {
    name: "Largo",
    description:
      "Largo est le père au grand cœur de Nori, un fabricant de roues, qui se livre peut-être plus qu'il ne le devrait aux rêveries de sa fille.",
    actor: "Dylan Smith",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Largo_1080_Thumbnail_4c55e951-7596-48ac-9157-42c678d52c61._SX140_.jpg",
  },
  {
    name: "Marigold",
    description:
      "La belle-mère attentionnée de Nori, qui a voué sa vie à la survie de sa famille et qui maintient les pieds de Nori sur terre. Elle avait autrefois à peu près le même esprit aventureux que sa fille et a appris à ses dépens que les rêves de jeunesse doivent un jour être remplacés par les besoins de la réalité.",
    actor: "Sara Zwangobani",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Marigold_1080_Thumbnail_de2e02b5-50be-4bc3-8994-376477f216aa._SX140_.jpg",
  },
  {
    name: "Sadoc Burrows",
    description:
      "Sadoc est le pisteur des Piévelus, un leader avisé qui guide sa communauté vers la sécurité lors de leurs migrations annuelles. Il porte la sagesse des générations et est chargé de détenir les secrets cachés dans les étoiles.",
    actor: "Lenny Henry",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Sadoc_1080_Thumbnail_53044181-29e0-4bdc-b87a-091ed7446bb3._SX140_.jpg",
  },
  {
    name: "Prince Durin IV",
    description:
      "Le prince Durin IV est aussi nain et taciturne en public qu'on pourrait s'y attendre d'un nain de sa stature, mais loin des yeux des étrangers, il est chaleureux, attentionné et bruyant. En tant qu'héritier du trône de Khazad-dûm, il envisage une époque où il pourra laisser sa marque sur le monde.",
    actor: "Owain Arthur",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Durin_1080_Thumbnail_0c2231ae-2664-4ab0-af11-3c73e3102319._SX140_.jpg",
  },
  {
    name: "Princesse Disa",
    description:
      "L'épouse du prince Durin et future reine, une naine chaleureuse et aimante qui a la capacité spéciale de chanter à la montagne pour localiser où se trouvent certains minerais et où il est sûr de creuser. Elle fera n'importe quoi pour l'avenir de son peuple, ce qui signifie parfois pousser son mari à faire ce qu'ils savent tous les deux être juste.",
    actor: "Sophia Nomvete",
    img: "https://m.media-amazon.com/images/G/01/pv_starlight/trop-c9184079-2c78-432f-9f38-49d5ab3c4158/Disa_1080_Thumbnail_6fe3d182-7986-405f-bf8e-0c2ef200ce8c._SX140_.jpg",
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
    <section class="text-gray-600 body-font">
      <UContainer class="animate-fade-right">
        <div class="flex flex-wrap -m-4">
          <div
            class="lg:w-1/4 md:w-1/2 p-4 w-full group"
            v-for="personnage in personnages"
          >
            <h2
              class="title-font text-lg font-medium text-primary text-center mb-3"
            >
              {{ personnage.name }}
            </h2>
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="mx-auto flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 transform transition-transform duration-200 group-hover:scale-105"
                :src="personnage.img"
              />
            </a>
            <div class="mt-4">
              <h3
                class="text-gray-900 dark:text-white text-xs tracking-widest title-font mb-1 text-center"
              >
                {{ personnage.actor }}
              </h3>

              <p class="text-base text-gray-900 dark:text-gray-400 mt-1">
                {{ personnage.description }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
