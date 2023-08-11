<template>
  <div class="main-film">
    <header>
        <header-film></header-film>
    </header>
    <nav>
        <navbar-film></navbar-film>
    </nav>
    <main>
        <contentFilm></contentFilm>
    </main>
  </div>
</template>

<script>
import contentFilm from './content-film.vue'
import headerFilm from './header-film.vue'
import navbarFilm from './navbar-film.vue'
export default {
    components:{
        headerFilm,
        navbarFilm,
        contentFilm
    }
}
</script>

<style>

</style>