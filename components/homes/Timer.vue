<template>
  <section class="mt-14 py-3 animate-fade-right">
    <UContainer>
      <div class="text-center p-4">
        <p
          v-if="
            daysLeft > 0 || hoursLeft > 0 || minutesLeft > 0 || secondsLeft > 0
          "
          class="text-xl font-bold text-primary"
        >
          <span class="underline"
            >{{ daysLeft }} jours, {{ hoursLeft }} heures,
            {{ minutesLeft }} minutes et {{ secondsLeft }} secondes</span
          >
          avant la saison 2 des Anneaux de Pouvoir
        </p>
        <p
          v-if="
            daysLeft >= 0 &&
            hoursLeft >= 0 &&
            minutesLeft >= 0 &&
            secondsLeft >= 0
          "
          class="text-lg mt-2"
        >
          Le jeudi 29 août 2024 à 10h00
        </p>
        <p v-else class="text-xl font-bold text-primary">
          La saison 2 des Anneaux de Pouvoir est maintenant disponible sur Prime
          Vidéo !
        </p>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

// Date de sortie de la saison 2 des Anneaux de Pouvoir (29 août 2024 à 08:00 UTC)
const releaseDate = new Date(Date.UTC(2024, 7, 29, 8, 0, 0));

// Variables pour le temps restant
const daysLeft = ref(null);
const hoursLeft = ref(null);
const minutesLeft = ref(null);
const secondsLeft = ref(null);

const calculateTimeLeft = () => {
  const now = new Date();
  const timeDifference = releaseDate - now;

  if (timeDifference > 0) {
    daysLeft.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    hoursLeft.value = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutesLeft.value = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    secondsLeft.value = Math.floor((timeDifference % (1000 * 60)) / 1000);
  } else {
    // Si la date est passée, réinitialiser les valeurs
    daysLeft.value = 0;
    hoursLeft.value = 0;
    minutesLeft.value = 0;
    secondsLeft.value = 0;
  }
};

onMounted(() => {
  calculateTimeLeft();
  // Mettre à jour chaque seconde pour le compte à rebours
  setInterval(calculateTimeLeft, 1000);
});
</script>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>
