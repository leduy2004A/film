<template>
  <v-app>
    <v-main>
     <!-- <mainFilmVue></mainFilmVue> -->
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import mainFilmVue from './components/main-film.vue'
export default {
  name: 'App',

  components: {
    // mainFilmVue
  },

  data: () => ({
    //
  }),
}
</script>
