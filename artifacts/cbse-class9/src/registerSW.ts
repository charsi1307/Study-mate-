// Service worker registration for PWA
// This file registers the Workbox-generated service worker from vite-plugin-pwa

export function registerSW() {
  // Service worker is only generated in production builds by vite-plugin-pwa
  if (import.meta.env.DEV) return;

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered:", registration.scope);

          // Listen for updates
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (!newWorker) return;

            newWorker.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                // New content is available; refresh to activate
                console.log("New content available; refreshing...");
                window.location.reload();
              }
            });
          });
        })
        .catch((error) => {
          console.error("SW registration failed:", error);
        });
    });
  }
}
