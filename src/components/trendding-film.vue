<template>
  <div class="trending-film">
          <p class="title-film py-2">
            <v-icon color="blue">mdi-image-filter-vintage</v-icon>
            Trending movies
            </p>
           <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :breakpoints="{
      450:{
            slidesPerView: 1,
            spaceBetween: 20,
      },
      640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in results" :key="item.id">
        <div class="image-film" >
            <div class="film-trend">
                  <img :src="'https://image.tmdb.org/t/p/original/' + item.poster_path" alt="" class="image image-size">

            <div class="name-film mb-2">
                <div class="name-title">
                    <p class="name-main">{{item.title}}</p>
                    <p class="year-film">{{item.release_date
}}</p>
                </div>
                <div class="btn-watch mt-3">
                    <v-btn color="red" class="btn-watch" @click="showDetail(item.id)">Watch now</v-btn>
                </div>
            </div>
            </div>  
         </div>
         </swiper-slide>
    
  </swiper>
             
          
            
        </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  import 'swiper/css/pagination';

  import '../../src/style.css';
  // import required modules
  import {createNamespacedHelpers,useStore} from 'vuex'
  const {mapState:filmtrending} =createNamespacedHelpers('filmtrending')
export default {
  data(){
    return{
      data2:[]
    }
  },
    setup(){
      const store = useStore();
      store.dispatch('filmtrending/getFilmTrending')
    },
    components: {
      Swiper,
      SwiperSlide,
    },
  computed:{
    ...filmtrending({
      results : state => state.results
    })
  },
  methods:{
    showDetail(idmovie){
        
        this.$store.dispatch("filmchung/getDetaiMovie",idmovie);
        this.$store.dispatch("casts/getActor",idmovie);
        this.$store.dispatch("videomovie/getVideo",idmovie);
        this.$store.dispatch("similarfilm/getSimilarFilm",idmovie);
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
                this.$router.push('/detail-movie');
               }, 2000)
    }
  }
    
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.title-film{
  font-size: 30px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;

}
.image-film{
    width: 100%;
    /* padding-right: 25px; */
    
}
.image-size{
  width: 300px;
}
.film-trend{
    width: 300px;
    position: relative;
}
.name-film{
    width: 100%;
    position: absolute;
    bottom: 0;
    justify-content: space-evenly;
    color: white;
    font-weight: bold;
    font-size: 30px;
}
p{
    font-size: 20px;
}
.btn-watch{
    opacity: 0.9;
}
</style>