<template>
  <div class="main-movie color-movie">
    <header>
        <header-film></header-film>
    </header>
    <main class="my-4">
        <content-movie></content-movie>
    </main>
  </div>
</template>

<script>
import headerFilm from '../header-film.vue'
import contentMovie from './content-movie.vue'
export default {
    components:{
        headerFilm,
        contentMovie
    }
}
</script>

<style scoped>
.color-movie{
    background-color: #0F172A;
    height: 100%;
}
</style>