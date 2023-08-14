<template>
  <div class="detail-movie">
    <header>
        <header-film></header-film>
    </header>
    <div class="image-movie">
      
      <image-in-movie></image-in-movie>
    
    </div>
    
  </div>
</template>

<script>
import headerFilm from '../header-film.vue'
import imageInMovie from './image-in-movie.vue'
export default {
components:{
    headerFilm,
    imageInMovie
},
  created()
    {
        // const datacasts = this.actor
        // console.log(datacasts);
        // console.log(this.getCasts());
        // const datamovie = this.video.results.key;
        // console.log(datamovie)
        // console.log(this.getVideo());
        // console.log(this.getCasts());
        this.$store.dispatch("filmchung/getDetaiMovie",this.$route.params.id);
        this.$store.dispatch("casts/getActor",this.$route.params.id);
        this.$store.dispatch("videomovie/getVideo",this.$route.params.id);
        this.$store.dispatch("similarfilm/getSimilarFilm",this.$route.params.id);
    
    },
}
</script>

<style scoped>
.detail-movie{
 background-color: #0F172A;
 height: 100%;
}
.image-movie{
  width: 97%;
  min-height: 500px;
  margin: 0 auto;
}
</style>