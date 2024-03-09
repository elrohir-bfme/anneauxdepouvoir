<template>
  <div class="mt-14 py-3">
    <section class="py-10">
      <UContainer class="max-w-5xl">
        <UCard class="animate-fade-right">
          <iframe
            ref="iframe"
            src="https://web.archive.org/web/20230318124658/https://www.amazon.com/adlp/lotronprime"
            width="100%"
            height="800px"
            frameborder="0"
            loading="lazy"
          ></iframe>
          <template #footer>
            <div class="flex items-center justify-center">
              <UButton @click="toggleFullScreen">Mode plein écran</UButton>
            </div>
          </template>
        </UCard>
      </UContainer>
    </section>
  </div>
</template>

<script>
const { path } = useRoute();
const title = "Cartes des Anneaux de Pouvoir";
const description =
  "Cartes de la série du 'Le Seigneur des anneaux : Les Anneaux de Pouvoir'";
const img = "https://anneauxdepouvoir.fr/images/numenor.jpg";
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

export default {
  methods: {
    toggleFullScreen() {
      const iframe = this.$refs.iframe;
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        /* Firefox */
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        /* IE/Edge */
        iframe.msRequestFullscreen();
      }
    },
  },
};
</script>

<style></style>
