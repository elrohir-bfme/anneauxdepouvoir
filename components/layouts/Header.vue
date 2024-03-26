<script setup lang="ts">
import { Menus } from "~/types/menu";

const { toggleIsOpenSideBar } = useLayout();
</script>
<template>
  <header
    class="fixed dark:bg-gray-900 top-0 py-3 border-white dark:border-gray-900 backdrop-filter backdrop-blur-md z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-slate-900/[0.5]"
  >
    <UContainer as="nav" class="flex items-center">
      <UButton
        class="mr-3 lg:hidden"
        icon="i-heroicons-bars-3"
        color="white"
        variant="ghost"
        @click="toggleIsOpenSideBar"
      />
      <h1 class="font-bold">
        <NuxtLink to="/">💍 Les Anneaux de Pouvoir </NuxtLink>
      </h1>
      <div class="mx-auto" />
      <ul class="mr-8 space-x-8 hidden lg:flex">
        <LayoutsMenuItem
          v-for="menuEl in Menus"
          :key="menuEl.key"
          :to="menuEl.to"
          :active-key="menuEl.key"
          :name="menuEl.name"
        />
      </ul>
      <div class="flex items-center space-x-2">
        <UtilsThemeChanger />
        <UButton
          to="https://laterredumilieu.fr/Discord"
          icon="i-simple-icons-discord"
          size="sm"
          color="blue"
          square
          variant="outline"
        />
      </div>
    </UContainer>
  </header>
</template>
