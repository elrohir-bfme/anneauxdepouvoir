<template>
  <div
    class="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
  >
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

html,
body {
  background-image: url("@/assets/background.jpg");
  margin: 0;
  background-color: #18191c;
}

html::-webkit-scrollbar {
  width: 2px;
}

html::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f58932),
    to(#ff6347)
  );
  box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}

html::-webkit-scrollbar-track {
  background: linear-gradient(
    to right,
    #201c29,
    #201c29 1px,
    #100e17 1px,
    #100e17
  );
}
</style>
