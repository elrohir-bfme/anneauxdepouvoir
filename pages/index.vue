<template>
  <HomesBlogs />

  <section class="py-10 lg:py-20 bg-[url('/images/valinor_full.jpg')] bg-cover">
    <UContainer>
      <iframe
        title="Dernière vidéo d'Elrohir"
        class="w-full aspect-video animate-fade-up"
        src="https://www.youtube.com/embed/TjPvSyKHINA?si=GbLuCjlXp__mh_XV"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </UContainer>
  </section>

  <section class="py-10 lg:py-20">
    <UContainer
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div
        class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 overflow-hidden"
      >
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
</template>
