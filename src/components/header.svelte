<script lang="ts">
  import Logo from "@components/logo.svelte";
  import Services from "@components/nav_services.svelte";
  import { fade } from "svelte/transition";

  let isMobileMenuOpen: boolean;
</script>

<header class="absolute inset-x-0 top-0 z-50">
  <nav
    class="flex items-center justify-between p-6 md:px-8"
    aria-label="Global"
  >
    <div class="flex md:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Way Software</span>
        <Logo />
      </a>
    </div>
    <div class="flex md:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
        on:click={() => {
          isMobileMenuOpen = true;
        }}
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </button>
    </div>
    <div class="hidden md:flex md:gap-x-12">
      <Services />
      <a href="/about" class="text-sm font-semibold leading-6 text-white"
        >About</a
      >
      <a
        href="https://blog.waysoftware.dev"
        class="text-sm font-semibold leading-6 text-white">Blog</a
      >
    </div>
    <div class="hidden md:flex md:flex-1 md:justify-end"></div>
  </nav>
  {#if isMobileMenuOpen}
    <div class="md:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Way Software</span>
            <Logo />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-400"
            on:click={() => {
              isMobileMenuOpen = false;
            }}
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <a
                href="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >Services</a
              >
              <a
                href="/about"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >About</a
              >
              <a
                href="https://blog.waysoftware.dev"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >Blog</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
