<script setup lang="ts"></script>

<template>
  <footer class="py-3 border-t-2">
    <UContainer class="flex items-center">
      <h3>Elrohir et Vardamire pour vous servir - 2024</h3>

      <div class="ml-auto flex space-x-2 items-center">
        <UTooltip text="Twitter Vardamire">
          <NuxtLink to="https://twitter.com/Vardamire_N" target="_blank">
            <UButton
              icon="i-simple-icons-x"
              size="sm"
              color="white"
              square
              variant="outline"
            />
          </NuxtLink>
        </UTooltip>
        <UTooltip text="Youtube Vardamire">
          <NuxtLink to="https://www.youtube.com/@Vardamire" target="_blank">
            <UButton
              icon="i-simple-icons-youtube"
              size="sm"
              color="red"
              square
              variant="outline"
            />
          </NuxtLink>
        </UTooltip>
        <UTooltip text="Instagram Vardamire">
          <NuxtLink
            to="https://www.instagram.com/vardamire_yt/"
            target="_blank"
          >
            <UButton
              icon="i-simple-icons-instagram"
              size="sm"
              color="orange"
              square
              variant="outline"
            />
          </NuxtLink>
        </UTooltip>
      </div>
    </UContainer>
  </footer>
</template>
