<template>
  <div class="shadow-lg bg-white">
    <nav class="relative lg:px-10 px-3 mx-auto items-center max-w-8xl flex justify-between">
      <div @click="navigateTo({name:'index'})" class="py-2 inline-flex items-center cursor-pointer">
        <img
          class="h-12"
          src="https://static.wixstatic.com/media/5c9f61_f6d4c09655a643578f207e96ac2b3f4c~mv2.png/v1/fill/w_92,h_58,al_c,q_85,usm_0.66_1.00_0.01/Untitled.webp"
          alt
        />
        <p class="ml-5 font-medium text-xl">Springs Rental</p>
      </div>
      <div class="hidden-md-down">
        <nuxt-link class="mx-4 py-4 px-4 hover:text-springgold text-xl font-medium" to="/">Home</nuxt-link>
        <button
          :class="{'navbtn-active': isRouteActive }"
          @click="isDropdownActive=!isDropdownActive"
          v-on-clickaway="away"
          class="mx-4 py-4 outline-none focus:outline-none px-4 hover:text-springgold text-xl font-medium"
        >
          Properties
          <div
            v-bind:class="{ 'is-active': isDropdownActive}"
            v-if="isDropdownActive"
            class="w-48 shadow-boxshadowlg absolute flex flex-col items-center bg-white dropdown-content-1"
          >
            <nuxt-link
              exact-active-class="mobile-active"
              class="w-full hover:text-salaamblue hover:bg-springblue"
              to="/furnished"
            >
              <p class="font-medium px-5 py-1 my-2">Furnished</p>
            </nuxt-link>
            <div class="border-b"></div>
            <nuxt-link
              exact-active-class="mobile-active"
              class="w-full hover:text-salaamblue hover:bg-springblue"
              to="/to-let"
            >
              <p class="font-medium px-5 py-1 my-2">To Let</p>
            </nuxt-link>
          </div>
        </button>
        <a
          class="mx-4 text-xl cursor-pointer py-4 px-4 hover:text-springgold font-medium"
          href="https://www.airbnb.com/rooms/41931472"
          target="_blank"
        >Book Now</a>
        <nuxt-link
          class="mx-4 text-xl cursor-pointer py-4 px-4 hover:text-springgold font-medium"
          to="/contact"
        >Contact</nuxt-link>
      </div>
      <div class="hidden-lg-up">
        <button class="focus:outline-none text-springblue z-20 p-2" @click.prevent="toggle">
          <svg class="fill-current w-6 h-6" id="toggle-button" viewBox="0 0 18.001 12">
            <path
              class="a"
              d="M.935,12A.937.937,0,0,1,0,11.064v-.128A.937.937,0,0,1,.935,10h16.13a.939.939,0,0,1,.936.936v.128a.938.938,
                0,0,1-.936.936Zm4-5A.938.938,0,0,1,4,6.064V5.936A.937.937,0,0,1,4.936,5H17.065A.938.938,0,0,1,18,5.936v.128A.939.939,0,0,1,
                17.065,7ZM0,6A1,1,0,1,1,1,7,1,1,0,0,1,0,6ZM.935,2A.937.937,0,0,1,0,1.064V.936A.937.937,0,0,1,.935,0h16.13A.939.939,0,0,1,18,
                .936v.128A.939.939,0,0,1,17.065,2Z"
            />
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  props: ["id"],
  mixins: [clickaway],
  computed: {
    isPanelOpen() {
      return this.$store.state.isNavOpen;
    },
    isRouteActive: function() {
      if (this.$nuxt.$route.name == "to-let") {
        return true;
      } else if (this.$nuxt.$route.name == "furnished") {
        return true;
      } else {
        return false;
      }
    }
  },
  data() {
    return {
      isDropdownActive: false
    };
  },
  methods: {
    away() {
      this.isDropdownActive = false;
    },
    closeSidebarPanel() {
      this.$store.dispatch("toggleNav");
    },
    toggle() {
      this.$store.dispatch("toggleNav");
    },
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.dropdown-content-1-active {
  height: auto;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease-in-out;
}
.dropdown-content-1 {
  margin-top: 65px;
  opacity: 1;
  top: 10%;
  transition: opacity 0.3s ease-in-out;
}
.navbtn-active {
  color: #f0c78a;
  border-bottom: 3px solid;
  transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.mobile-active {
  color: #f0c78a;
  background-color: #243547;
}
</style>