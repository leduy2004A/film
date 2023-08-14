<template>
  <div class="continue-watching">
     <p class="title-film my-2">
         <v-icon color="blue">mdi-image-filter-vintage</v-icon>
        Now Playing
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
            slidesPerView: 3,
            spaceBetween: -80,
          },
          820:{
            slidesPerView: 3,
            spaceBetween: -10,
          },
          414:{
            slidesPerView: 2,
            spaceBetween: 30,
          },
           375:{
            slidesPerView: 2,
            spaceBetween: 50,
          },
          350:{
            slidesPerView: 2,
            spaceBetween: 90,
          },
          393:{
            slidesPerView: 2,
            spaceBetween:40
          },
          450:{
             slidesPerView: 2,
            spaceBetween:-18
          },
           750:{
            slidesPerView: 3,
            spaceBetween: -80,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
    }"
    :modules="modules"
    class="mySwiper"
  >
   <swiper-slide v-for="item in nowfilm" :key="item.id">
      <div class="image-film" >
            <div class="film-trend">
                  <img :src="'https://image.tmdb.org/t/p/original/'+item.poster_path" alt="" class="image">
            <div class="name-film mb-2">
                <div class="name-title">
                    <p class="name-main">{{item.title}}</p>
      
                </div>
                <div class="btn-watch mt-3">
                    <v-btn color="red" @click="showDetail(item.id)">Watch now</v-btn>
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
  import {useStore,createNamespacedHelpers} from 'vuex'
  const {mapState} = createNamespacedHelpers('nowfilm')
export default {
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const store = useStore();
      store.dispatch('nowfilm/getNowfilm')
    },
    computed:{
      ...mapState({
        nowfilm : state => state.nowFilm.results
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
                this.$router.push(`/detail-movie/${idmovie}`);
               }, 2000)
        }
    }
    }

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.title-film{
  font-size: 25px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;

}
.btn-watch{
    opacity: 0.9;
}
    .image-film{
    width: 100%;
    /* padding-right: 25px; */
    
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
    font-weight: bold;
}
p{
    font-size: 20px;
}
@media only screen and (max-width: 46.1875em)
{
  .image-size{
        width: 200px;
      }
      .film-trend{
        width: 200px;
      }
}
@media only screen and (min-width:46.25em) and (max-width: 69.9375em)
    {
      .image-size{
        width: 200px;
      }
      .film-trend{
        width: 200px;
      }
    }
</style>