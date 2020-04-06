const path = require('path')
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "theme-color", content: "#fffff"},
      { name: "msapplication-navbutton-color", content:"#fff"},
      { hid: 'description', name: 'description', content: '' },
      {property:"og:title" ,content: "Springs Rental"},
      {property:"og:description" ,content: "Located on Chaka Road with easy access to commercial, residential, educational, religious and recreational centers, Springs Rental Apartments offers the best level of contemporary living in the heart of Kilimani with these stunning furnished and rental apartments."},
      {property:"og:image" ,content: "https://i.imgur.com/wCQFpBi.jpg?1"},
      {property:"og:url" ,content: ""},
      {property:"og:site_name" ,content: "Springs rental"},
      {name:"twitter:card" ,content: "summary_large_image"},
      {name:"twitter:image:alt" ,content: "image_alt"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://static.wixstatic.com/media/5c9f61_f6d4c09655a643578f207e96ac2b3f4c~mv2.png/v1/fill/w_92,h_58,al_c,q_85,usm_0.66_1.00_0.01/Untitled.webp' },
      { rel: 'icon', type: 'image/x-icon', href: 'https://static.wixstatic.com/media/5c9f61_f6d4c09655a643578f207e96ac2b3f4c~mv2.png/v1/fill/w_92,h_58,al_c,q_85,usm_0.66_1.00_0.01/Untitled.webp' },
      { rel: "apple-touch-icon", sizes:"180x180", href: "https://static.wixstatic.com/media/5c9f61_f6d4c09655a643578f207e96ac2b3f4c~mv2.png/v1/fill/w_92,h_58,al_c,q_85,usm_0.66_1.00_0.01/Untitled.webp"},
      { rel: "icon" ,type: "image/png", sizes:"32x32", href: "https://static.wixstatic.com/media/5c9f61_f6d4c09655a643578f207e96ac2b3f4c~mv2.png/v1/fill/w_92,h_58,al_c,q_85,usm_0.66_1.00_0.01/Untitled.webp"},
      { rel: "icon", type: "image/png", sizes:"16x16", href: "https://static.wixstatic.com/media/5c9f61_f6d4c09655a643578f207e96ac2b3f4c~mv2.png/v1/fill/w_92,h_58,al_c,q_85,usm_0.66_1.00_0.01/Untitled.webp"},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap'},
      
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#243547',
    height: '3px' 
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/vue-flickity', ssr: false},
    {src: '~/plugins/vue-lightbox', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   extractCSS: true, // if you use purgeCSS
   postcss: {
     plugins: {
       tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
       cssnano: {
         preset: 'default',
         discardComments: { removeAll: true },
         zIndex: false
       }
     },
     // Change the postcss-preset-env settings
     preset: {
       stage: 0, // enable all (experimental) polyfills
       autoprefixer: {
         cascade: false,
         grid: true
       }
     }
   },
   extend (config, ctx) {
     
   },
  }
}
