<template>
  <section class="mt-14 py-3 animate-fade-right">
    <UContainer>
      <div class="text-center p-4">
        <p class="text-xl font-bold text-primary">
          <span class="underline">{{ daysLeft }} jours</span> avant la saison 2
          des Anneaux de Pouvoir
        </p>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
// Date de sortie de la saison 2 des Anneaux de Pouvoir
const releaseDate = new Date("2024-08-29");

// Calculer le nombre de jours restants
const daysLeft = ref(null);

const calculateDaysLeft = () => {
  const today = new Date();
  const timeDifference = releaseDate - today;
  daysLeft.value = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
};

onMounted(() => {
  calculateDaysLeft();
  // Mettre à jour chaque jour
  setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);
});
</script>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>
