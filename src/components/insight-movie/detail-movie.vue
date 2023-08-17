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
@media only screen and (max-width: 46.1875em)
{
  .detail-movie{
    overflow-x: hidden;
  }
}
@media only screen and (min-width:46.25em) and (max-width: 69.9375em)
    {
     .detail-movie{
    overflow-x: hidden;
  }
    }
</style>