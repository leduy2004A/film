<template>
  <div class="content-film bg-black">
    <div class="content">
        <trendding-film></trendding-film>
        <continueWatching class="cach"></continueWatching>
        <top-rated-film></top-rated-film>
    </div>
    

  </div>
</template>

<script>
import continueWatching from './continue-watching.vue'
import topRatedFilm from './top-rated-film.vue'
import trenddingFilm from './trendding-film.vue'
export default {
    components:{
        trenddingFilm,
        continueWatching,
        topRatedFilm
    }
}
</script>

<style>
.content-film{
    min-height: 500px;
}
.content{
    width: 98%;
    margin: 0 auto;
}
.image{
    border-radius:10px;
}
.cach{
    margin: 80px 0px;
}
</style>