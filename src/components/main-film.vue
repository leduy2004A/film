<template>
  <div class="main-film">
    <!-- <header>
        <header-film></header-film>
    </header> -->
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
// import headerFilm from './header-film.vue'
import navbarFilm from './navbar-film.vue'
export default {
    components:{
        // headerFilm,
        navbarFilm,
        contentFilm
    },
    created(){
          let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: true,
                    loader:'dots',
                    backgroundColor: 'black',
                    width: 100,
                    height: 100,
                    onCancel: this.onCancel,
                    color:'#CB4440'
                });
                // simulate AJAX
                setTimeout(() => {
                    loader.hide()
            
               }, 1500)
    }
}
</script>

<style>

</style>