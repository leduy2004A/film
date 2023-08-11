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
               }, 2000)
    }
}
</script>

<style scoped>
.color-movie{
    background-color: #0F172A;
    height: 100%;
}
</style>