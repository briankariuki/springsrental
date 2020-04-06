<template>
  <div>
       <h4 class="text-3xl text-center font-bold text-springblue leading-tight">Gallery</h4>
       <div class="my-12 lg:flex justify-between lg:flex-wrap">
           <div v-for="(image, index) in images" :key="index" class="mx-auto p-4 my-4">
               <img class="h-56 lg:w-88 cursor-pointer w-full object-cover" v-lazy="image.src" @click="openGallery(index)" alt="">
           </div>
       </div>
       <lightbox 
        :images="images" 
        ref="lightbox"
        :show-caption="true"
        :show-light-box="false"
      >
      </lightbox>
  </div>
</template>

<script>
import Lightbox from '@/components/lightBox.vue'
export default {
    components:{
        Lightbox
    },
    data () {
        return {
            images : [
                {                 
                    thumb: 'https://i.imgur.com/wCQFpBi.jpg?1',
                    src: 'https://i.imgur.com/wCQFpBi.jpg?1',
                    caption: '<h4></h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/0ipjsBJ.jpg?1',
                    src: 'https://i.imgur.com/0ipjsBJ.jpg?1',
                    caption: '<h4>Furnished Living Room</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/7jtK35U.jpg?3',
                    src: 'https://i.imgur.com/7jtK35U.jpg?3',
                    caption: '<h4>Furnished Living Room</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/KvccwZO.jpg?1',
                    src: 'https://i.imgur.com/KvccwZO.jpg?1',
                    caption: '<h4>Kitchen</h4>',
                },
                
                {                 
                    thumb: 'https://i.imgur.com/OUHjpnx.jpg?1',
                    src: 'https://i.imgur.com/OUHjpnx.jpg?1',
                    caption: '<h4>Kitchen</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/HtIRsDl.jpg?1',
                    src: 'https://i.imgur.com/HtIRsDl.jpg?1',
                    caption: '<h4>Rental</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/JCyPbuJ.jpg?1',
                    src: 'https://i.imgur.com/JCyPbuJ.jpg?1',
                    caption: '<h4>Living Room</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/HtIRsDl.jpg?1',
                    src: 'https://i.imgur.com/HtIRsDl.jpg?1',
                    caption: '<h4></h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/NiX46Xu.jpg?1',
                    src: 'https://i.imgur.com/NiX46Xu.jpg?1',
                    caption: '<h4></h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/ggHuuGf.jpg?2',
                    src: 'https://i.imgur.com/ggHuuGf.jpg?2',
                    caption: '<h4></h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/38tnFMT.jpg?1',
                    src: 'https://i.imgur.com/38tnFMT.jpg?1',
                    caption: '<h4>Wardrobes</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/W6j5RCT.jpg?1',
                    src: 'https://i.imgur.com/W6j5RCT.jpg?1',
                    caption: '<h4>Bathroom</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/aEaZy0e.jpg?1',
                    src: 'https://i.imgur.com/aEaZy0e.jpg?1',
                    caption: '<h4>Swimming Pool</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/xYP9zzx.jpg?1',
                    src: 'https://i.imgur.com/xYP9zzx.jpg?1',
                    caption: '<h4>Gym</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/7jtK35U.jpg?2',
                    src: 'https://i.imgur.com/7jtK35U.jpg?2',
                    caption: '<h4>Living room</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/K43LUDi.jpg?1',
                    src: 'https://i.imgur.com/K43LUDi.jpg?1',
                    caption: '<h4>Dining Area</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/qHW0CAg.jpg?1',
                    src: 'https://i.imgur.com/qHW0CAg.jpg?1',
                    caption: '<h4>Dining Area</h4>',
                },
                {                 
                    thumb: 'https://i.imgur.com/Hvus0Xb.jpg?1',
                    src: 'https://i.imgur.com/Hvus0Xb.jpg?1',
                    caption: '<h4>Bedroom</h4>',
                },
                                
            ]
        }
    },
    methods: {
        openGallery(index) {
            this.$refs.lightbox.showImage(index)
        }
  }
}
</script>

<style>

</style>