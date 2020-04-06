<template>
  <div class="">
    <home-slider/>
    <div class="mx-auto max-w-6xl mt-20">
      <home-services/>
    </div>
    <div class="mx-auto w-11/12 mt-20">
      <home-properties/>
    </div>
    <div class="mx-auto max-w-6xl mt-20">
      <home-gallery/>
    </div>
    
    <div class="py-10 bg-image-10 my-auto mx-auto mt-20">
      <div class="mx-auto my-auto max-w-6xl">
        <home-clients/>
      </div>
      
    </div>
  </div>
</template>

<script>
import homeSlider from '~/components/homeSlider.vue'
import homeProperties from '~/components/homeProperties.vue'
import homeGallery from '~/components/homeGallery.vue'
import homeServices from '~/components/homeServices.vue'
import homeClients from '~/components/homeClients.vue'

export default {
  name: "index",
    head: {
        title: 'Home | Springs Rental',
        meta: [
            { hid: 'description', name: 'description', content: 'Home | Springs Rental' }
        ],
        noscript: [
            { innerHTML: 'Body No Scripts', body: true }
        ],
        script: [
        ]
    },
  components: {
    homeSlider,
    homeProperties,
    homeGallery,
    homeServices,
    homeClients
  }
}
</script>

<style scoped>
  .bg-image-10{
	  background-image: 
      linear-gradient(
          0deg, rgba(43, 107, 177, 0.6), rgba(43, 107, 177, 0.6)
      ),
      url('https://i.imgur.com/wCQFpBi.jpg?1') ;
      background-repeat: no-repeat;
      object-fit: cover;
      background-position: center;
      background-size: cover;
      height: 100%;
      background-blend-mode: multiply;
      
}
</style>
