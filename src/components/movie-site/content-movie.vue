<template>
  <div class="content-movie">
    <header>
         <div class="search-film d-flex align-center mb-12">
        <input type="text" class="border" placeholder="Nhập phim muốn xem">
        <v-btn text="Tìm kiếm" class="search-btn"></v-btn>
    </div>
    </header>
   <main>
    <card-movie></card-movie>
   </main>
    
  </div>
</template>

<script>
import cardMovie from './card-movie.vue'
export default {
    components:{
        cardMovie
    }
}
</script>

<style scoped>
.search-film{
    width: 100%;
    height: 50px;
}
    .content-movie{
        width: 85%;
        min-height: 500px;
        margin: 100px auto 0 auto;
    }
    .border{
        height: 80%;
        border: 2px solid white;
        background-color: white;
        color: black;
        padding: 10px 10px;
        width: 100%;
        height: 100%;
    }
    .search-btn{
        height: 100%;
        background-color: #F62682;
        color: white;
        width: 80px;
    }
</style>