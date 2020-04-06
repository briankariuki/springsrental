<template>
  <div>
    <div class="relative">
      <flickity
        class="mainslider max-h-780 xl:pointer-events-none"
        ref="flickity"
        :options="flickityOptions"
      >
        <div class="relative bg-image-1 w-full"></div>
        <div class="relative bg-image-2 w-full"></div>
        <div class="relative bg-image-3 w-full"></div>
        <div class="relative bg-image-4 w-full"></div>
        <div class="relative bg-image-5 w-full"></div>
        <div class="relative bg-image-6 w-full"></div>
      </flickity>
      <div class="absolute bottom-0" style="left: calc(15%);">
        <div class="p-6 lg:w-88 w-72" style=" background-color: hsla(211, 33%, 21%, 0.9)">
          <h4
            class="lg:text-3xl text-xl font-bold text-springgold leading-tight"
          >Springs Rental Houses</h4>
          <p class="my-8 text-white lg:text-sm text-xs font-light">
            Located on Chaka Road with easy access to commercial, residential, educational, religious and
            recreational centers, Springs Rental Apartments offers the best level of contemporary living in
            the heart of Kilimani with these stunning furnished and rental apartments.
            <br />
            <br />Each home is meticulously planned to suit clientele needs and specifications. Be glad to join other
            proud home owners with all the comfort and safety of an ideal apartment.
          </p>
          <!-- <div class="mb-6">
                    <h4 class="lg;text-3xl text-xl font-bold text-white leading-tight">AVAILABLE</h4>
          </div>-->
          <router-link to="/furnished">
            <button
              class="px-10 w-48 mx-auto py-3 text-lg font-medium border-2 text-white border-springgold hover:border-none hover:bg-springgold hover:text-white"
            >Learn More</button>
          </router-link>
        </div>
      </div>
      <div class="absolute top-0" style="right: calc(15%);">
        <div class="lg:p-5 p-3" style=" background-color: hsla(211, 33%, 21%, 0.9)">
          <a class="outline-none inline-flex items-center" href="tel:+254 733 932048">
            <svg
              class="fill-current text-springgold mr-3 h-6 w-6"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                d="M15.4,20A15.417,15.417,0,0,1,0,4.6,4.605,4.605,0,0,1,4.6,0a4.508,4.508,0,0,1,.766.065,4.326,4.326,0,0,1,.725.183A1,1,0,0,1,6.738.97l1.37,5.964a1,1,0,0,1-.253.916c-.137.142-.14.145-1.38.794a9.947,9.947,0,0,0,4.88,4.883c.649-1.241.653-1.245.8-1.381a1.012,1.012,0,0,1,.917-.253l5.964,1.369a1,1,0,0,1,.721.646,4.37,4.37,0,0,1,.184.731A4.553,4.553,0,0,1,20,15.4,4.6,4.6,0,0,1,15.4,20"
              />
            </svg>
            <h4 class="text-xl font-medium text-springgold leading-tight">+254 733 932048</h4>
          </a>
        </div>
      </div>
      <button
        @click="previous()"
        class="hidden-lg-down prev-button absolute w-16 h-16 rounded-full focus:outline-none"
        style="top: calc(50% - 32px); left: 30px"
      >
        <svg class="w-6 h-6 mx-auto fill-current" width="7" height="13.999" viewBox="0 0 7 13.999">
          <path
            d="M5.829,14a1,1,0,0,1-.78-.373l-4.828-6A1,1,0,0,1,.232,6.359l5-6a1,1,0,1,1,1.536,1.28L2.293,7.01l4.315,5.362A1,1,0,0,1,5.829,14"
          />
        </svg>
      </button>
      <button
        @click="next()"
        class="hidden-lg-down prev-button absolute w-16 h-16 rounded-full focus:outline-none"
        style="top: calc(50% - 32px); right: 30px"
      >
        <svg class="w-6 h-6 mx-auto fill-current" width="7" height="13.999" viewBox="0 0 7 13.999">
          <path
            class="a"
            d="M1,14a1,1,0,0,1-.768-1.64L4.707,6.989.392,1.627A1,1,0,0,1,1.951.373l4.828,6A1,1,0,0,1,6.768,7.64l-5,6A1,1,0,0,1,1,14"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        wrapAround: false,
        pageDots: true,
        autoPlay: true,
        lazyLoad: true,
        draggable: true,
        autoPlay: 10000
      }
    };
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    }
  }
};
</script>

<style scoped>
.bg-image-1 {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.249)
    ),
    url("https://i.imgur.com/7jtK35U.jpg?3");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  height: 780px;
}
.bg-image-2 {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.249)
    ),
    url("https://i.imgur.com/wCQFpBi.jpg?1");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: bottom;
  background-size: cover;
  height: 780px;
}
.bg-image-3 {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.249)
    ),
    url("https://i.imgur.com/aEaZy0e.jpg?1");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  height: 780px;
}
.bg-image-4 {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.249)
    ),
    url("https://i.imgur.com/xYP9zzx.jpg?1");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  height: 780px;
}
.bg-image-5 {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.249)
    ),
    url("https://i.imgur.com/K43LUDi.jpg?1");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  height: 780px;
}
.bg-image-6 {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.249)
    ),
    url("https://i.imgur.com/qHW0CAg.jpg?1");
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  height: 780px;
}
.max-h-780 {
  max-height: 780px !important;
}
</style>