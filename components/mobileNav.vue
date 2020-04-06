<template>
  <transition name="slide">
    <div
      v-if="isPanelOpen"
      class="mobile-nav overflow-y-hidden absolute shadow-xl flex bg-white flex-col w-72 top-0 h-screen"
    >
      <div class="h-56 mx-auto py-2 inline-flex items-center">
        <img
          class="h-12"
          src="https://static.wixstatic.com/media/5c9f61_f6d4c09655a643578f207e96ac2b3f4c~mv2.png/v1/fill/w_92,h_58,al_c,q_85,usm_0.66_1.00_0.01/Untitled.webp"
          alt
        />
        <p class="ml-5 font-medium text-xl">Springs Rental</p>
      </div>
      <div class="flex-1 bg-springblue pt-10 flex flex-col justify-between">
        <div class="flex-1">
          <nuxt-link
            exact-active-class="mobile-active"
            @click.native="toggle"
            class="text-white hover:text-salaamblue hover:bg-salaamgrey"
            to="/"
          >
            <p class="px-6 py-3 text-base font-medium">Home</p>
          </nuxt-link>
          <div class="mt-2">
            <div
              v-on:click.prevent="isDropdown1Active=!isDropdown1Active"
              class="text-white px-6 py-3 flex justify-between items-center"
            >
              <p class="text-base font-medium">Properties</p>
              <div
                v-bind:class="[ {'dropdown-icon-is-active': isDropdown1Active, 'dropdown-icon-is-inactive': !isDropdown1Active, }]"
                class="mx-auto mr-2"
              >
                <svg class="fill-current h-3 w-3" width="10" height="6" viewBox="0 0 10 6">
                  <path
                    d="M5,6a1,1,0,0,1-.707-.293l-4-4A1,1,0,0,1,1.707.293l3.3,3.3L8.305.418A1,1,0,0,1,9.7,1.857l-4,3.862A1,1,0,0,1,5,6"
                  />
                </svg>
              </div>
            </div>
            <transition name="dropdown">
              <div
                v-if="isDropdown1Active"
                class="flex flex-col bg-white border-t-2 border-salaamblue"
              >
                <nuxt-link
                  exact-active-class="mobile-active"
                  @click.native="toggle"
                  class="hover:text-salaamblue hover:bg-salaamgrey"
                  to="/furnished"
                >
                  <p class="text-base font-medium px-8 py-3">Furnished</p>
                </nuxt-link>
                <nuxt-link
                  exact-active-class="mobile-active"
                  @click.native="toggle"
                  class="hover:text-salaamblue hover:bg-salaamgrey"
                  to="/to-let"
                >
                  <p class="text-base font-medium px-8 py-3">To Let</p>
                </nuxt-link>
              </div>
            </transition>
          </div>
          <a
            @click.native="toggle"
            class="hover:text-salaamblue hover:bg-salaamgrey"
            href="https://www.airbnb.com/rooms/41931472"
            target="_blank"
          >
            <p class="px-6 py-3 text-white text-base font-medium">Book Now</p>
          </a>
          <nuxt-link
            exact-active-class="mobile-active"
            @click.native="toggle"
            class="hover:text-salaamblue hover:bg-salaamgrey"
            to="/contact"
          >
            <p class="px-6 py-3 text-white text-base font-medium">Contact</p>
          </nuxt-link>
        </div>
        <div
          class="flex bg-springgold mt-4 p-4 items-center text-springblue lg:mt-0 justify-center"
        >
          <a class="pr-4" href>
            <svg width="31.489" height="27.991" viewBox="0 0 31.489 27.991">
              <path
                class="fill-current"
                d="M8.882,27.991c12.676,0,20.009-9.842,20.009-19.182a13.635,13.635,0,0,0,2.573-5.028.772.772,0,0,0-1.079-.9,3.273,3.273,0,0,1-3.78-.658,6.778,6.778,0,0,0-9.751-.306,7.193,7.193,0,0,0-1.994,6.753C9,9.092,4.972,6.314,1.662,2.506a.75.75,0,0,0-1.309.42c-.49,3.642-.644,12.5,8.131,17.583C6.961,22.7,3.978,23.992.658,24.546A.787.787,0,0,0,.42,26.017a19.109,19.109,0,0,0,8.462,1.968"
                transform="translate(0 0)"
              />
            </svg>
          </a>
          <a class="px-4" href>
            <svg width="16.619" height="27.991" viewBox="0 0 16.619 27.991">
              <path
                class="fill-current"
                d="M16.619.778A.768.768,0,0,0,15.864,0H12.087A7.292,7.292,0,0,0,4.533,7v4.2H.755A.767.767,0,0,0,0,11.974v4.043a.767.767,0,0,0,.755.778H4.533V27.213a.767.767,0,0,0,.755.778H9.821a.768.768,0,0,0,.755-.778V16.794h3.957a.762.762,0,0,0,.73-.569l1.089-4.043a.773.773,0,0,0-.727-.986H10.576V7a1.458,1.458,0,0,1,1.511-1.4h3.777a.768.768,0,0,0,.755-.778Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  props: ["id"],
  mixins: [clickaway],
  computed: {
    isPanelOpen() {
      return this.$store.state.isNavOpen;
    }
  },
  data() {
    return {
      isDropdownActive: false,
      isDropdown1Active: false,
      isDropdown2Active: false
    };
  },
  methods: {
    closeSidebarPanel() {
      this.$store.dispatch("toggleNav");
    },
    toggle() {
      this.$store.dispatch("toggleNav");
    }
  }
};
</script>

<style scoped>
.mobile-active {
  color: #f0c78a;
  background-color: #243547;
}
</style>