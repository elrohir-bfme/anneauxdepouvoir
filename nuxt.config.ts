// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/content", "@nuxtjs/sitemap"],
  content: {
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
      remarkPlugins: ["remark-reading-time"],
    },
    documentDriven: true,
  },
  ui: {
    global: true,
    icons: ["simple-icons", "heroicons", "lucide", "mdi"],
  },
  colorMode: {
    preference: "dark",
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Les Anneaux de Pouvoir",
      meta: [
        {
          name: "Description",
          content:
            "Site autour de la série le Seigneur des Anneaux Les Anneaux de Pouvoir.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
