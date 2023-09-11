export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ComandNews",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/logoempresacircularico.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    "@/assets/css/main.css",
    "@/assets/css/footer.css",
    "@/assets/css/publicaciones.css",
    "@/assets/css/login.css",
    // Boxicons
    "boxicons/css/boxicons.min.css",
    // Bootstrap
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/navbar.js", mode: "client" },
    {
      src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/firebase",
  ],

  firebase: {
    config: {
      apiKey: process.env.VUE_APP_FIREBASE_KEY,
      authDomain: "htmlprojects-adc57.firebaseapp.com",
      projectId: "htmlprojects-adc57",
      storageBucket: "htmlprojects-adc57.appspot.com",
      messagingSenderId: "913985629546",
      appId: "1:913985629546:web:63430029f7d1ca03678913",
      measurementId: "G-9T8TQS78P0",
    },
    services: {
      auth: true,
      firestore: true,
      storage: true,
      analytics: true,
      performance: true,
    },
  },

  auth: {
  persistence: 'local', // default
  initialize: {
    onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
    onAuthStateChangedAction: 'onAuthStateChangedAction',
    subscribeManually: false,
  },
  ssr: false, // default
  emulatorPort: 9099,
  emulatorHost: 'http://localhost',
},

  env: {
    VUE_APP_FIREBASE_KEY: process.env.VUE_APP_FIREBASE_KEY,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
