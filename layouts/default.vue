<template>
  <div class="relative flex-1 flex flex-col antialiased subpixel-antialiased">
    <div class="fixed top-0 z-20 w-full">
      <navbar/>
    </div>
    <div class=" w-full mt-16">
      <nuxt />
    </div>
    <div class="">
      <bfooter/>
    </div>
    <div class="fixed z-50 items-center top-0 hidden-lg-up h-screen">
      <mobile-nav/>
      <div class="fixed z-30 absolute top-0 hidden-lg-up sidebar-backdrop cursor-pointer" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
    </div>
    
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import Navbar from '@/components/nav.vue'
import Bfooter from '@/components/bottomFooter.vue'
import mobileNav from '~/components/mobileNav.vue'
export default {
  props: ['id'],
  mixins: [clickaway],
  components: {
    Navbar,
    Bfooter,
    mobileNav
  },
   computed: {
      isPanelOpen() {
        return this.$store.state.isNavOpen;
      },
    },
    data() {
        return {
            isDropdownActive: false,
            isDropdown1Active: false,
            isDropdown2Active: false,
        };
    },
    methods: {
        closeSidebarPanel() {
        this.$store.dispatch('toggleNav');
        },
        toggle() {
          this.$store.dispatch('toggleNav');
        },
    },
}
</script>

<style>
@media(max-width:767px){
	.hidden-sm-down{
		display: none !important
	}
	.bg-image-1, .bg-image-2, .bg-image-3, .bg-image-4{
		height: 90vh !important;
	}
	.mainslider .flickity-viewport{
		height: 90vh !important;
	}
}
.flickity-enabled {
  position: relative;
}

.flickity-enabled:focus { outline: none; }

.flickity-viewport {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.flickity-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* draggable */

.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.flickity-enabled.is-draggable .flickity-viewport {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

/* ---- flickity-button ---- */

.flickity-button {
  position: absolute;
  background: hsla(0, 0%, 100%, 0.75);
  border: none;
  color: #333;
}

.flickity-button:hover {
  background: white;
  cursor: pointer;
}

.flickity-button:focus {
  outline: none;
  box-shadow: 0 0 0 5px #19F;
}

.flickity-button:active {
  opacity: 0.6;
}

.flickity-button:disabled {
  opacity: 0.3;
  cursor: auto;
  pointer-events: none;
}

.flickity-button-icon {
  fill: currentColor;
}

.flickity-prev-next-button {
  top: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transform: translateY(-50%);
}

.flickity-prev-next-button.previous { left: 20px; }
.flickity-prev-next-button.next { right: 20px; }
/* right to left */
.flickity-rtl .flickity-prev-next-button.previous {
  left: auto;
  right: 10px;
}
.flickity-rtl .flickity-prev-next-button.next {
  right: auto;
  left: 10px;
}

.flickity-prev-next-button .flickity-button-icon {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
}

.flickity-page-dots {
  position: absolute;
  width: 100%;
  bottom: 25px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
}

.flickity-rtl .flickity-page-dots { direction: rtl; }

.flickity-page-dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 8px;
 background: rgb(211, 211, 211);
  border-radius: 50%;
  opacity: 0.25;
  cursor: pointer;
}

.flickity-page-dots .dot.is-selected {
  opacity: 1;
}
  .nuxt-link-exact-active {
      color: #f0c78a;
      border-bottom: 3px solid;
      transition: all .1s cubic-bezier(0.645, 0.045, 0.355, 1);
        
    }
  .mobile-active{
        color: #f0c78a;
        background-color: #243547; 
    }

.slide-enter-active,.slide-leave-active{
	-webkit-transition: all .2s cubic-bezier(.16,.68,.43,.99); 
    -moz-transition: all .2s cubic-bezier(.16,.68,.43,.99);
    -o-transition: all .2s cubic-bezier(.16,.68,.43,.99);
	transition: all .2s cubic-bezier(.16,.68,.43,.99);
}
.slide-enter,.slide-leave-to{
    transform: translateX(-100%);
	 -webkit-transition: all .2s cubic-bezier(.16,.68,.43,.99); 
    -moz-transition: all .2s cubic-bezier(.16,.68,.43,.99);
    -o-transition: all .2s cubic-bezier(.16,.68,.43,.99);
	transition: all .2s cubic-bezier(.16,.68,.43,.99);
}

.dropdown-enter-active,.dropdown-leave-active{
    -webkit-transition: all .3s cubic-bezier(0.645, 0.045, 0.355, 1); 
    -moz-transition: all .3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition: all .3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all .3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.dropdown-enter,.dropdown-leave-to{
    -webkit-transition: all .1s cubic-bezier(0.645, 0.045, 0.355, 1); 
    -moz-transition: all .1s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition: all .1s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all .1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.dropdown-icon-is-active{
	transform: rotate(180deg);
	transform-origin: center;
    -webkit-transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1); 
    -moz-transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.dropdown-icon-is-inactive{
	transform: rotate(0deg);
	transform-origin: center;
    -webkit-transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1); 
    -moz-transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
