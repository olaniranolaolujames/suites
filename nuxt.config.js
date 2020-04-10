
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: "stylesheet", href:"css/superfish.css"},
      {rel: "stylesheet", href:"css/bootstrap-datepicker.min.css"},
      {rel:"stylesheet", href:"css/cs-select.css"},
      {rel:"stylesheet", href:"css/cs-skin-border.css"},
      {rel:"stylesheet", href:"css/themify-icons.css"},
      {rel:"stylesheet", href:"css/flaticon.css"},
      {rel:"stylesheet", href:"css/icomoon.css"},
      {rel:"stylesheet", href:"css/flexslider.css"},
      {rel:"stylesheet", href:"css/style.css"}  
    ],
    script: [
      { src:"js/jquery-2.1.4.min.js" },
      { src:"js/hoverIntent.js" },
      { src:"js/superfish.js" },
      { src:"js/bootstrap.min.js"},
      { src:"js/jquery.waypoints.min.js" },
      { src:"js/jquery.countTo.js"  },
      { src:"js/jquery.stellar.min.js"  },
      { src:"js/bootstrap-datepicker.min.js" },
      { src:"js/classie.js" },
      { src:"js/jquery.flexslider-min.js" },
      { src:"js/custom.js" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
