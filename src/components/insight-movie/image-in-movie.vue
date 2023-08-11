<template>

  <div class="image-in-movie">
    <div class="image-insight">
        <img :src="'https://image.tmdb.org/t/p/original/'+results.backdrop_path" alt="" class="banner-film">
        <div class="image-in-banner">
            <img :src="'https://image.tmdb.org/t/p/original/'+results.poster_path" alt="" class="image-main-film">
        </div>
    </div>
    <div class="title-detail-film">
        <p class="name-film">{{results.title}}</p>
        <ul class="list-film">
            <li v-for="item in results.genres" :key="item.id"><a href="#" >{{item.name}}</a></li>
            <!-- <li><a href="#">Mystery</a></li>
            <li><a href="#">Thriller</a></li> -->
        </ul>
        <p class="title-introduce mt-10">
           {{results.overview}}
        </p>
        
    </div>
    <div class="containt-casts mt-10">
            <p class="text-casts color">Casts</p>
            <div class="casts-human">
                <v-container fluid="true" class="px-0">
                    <v-row justify="start">
                        <v-col cols="3" v-for="item in getCasts()" :key="item">
                            <v-sheet>
                                <div class="image-casts">
                                    <img :src="'https://image.tmdb.org/t/p/original/'+ item.profile_path" alt="" class="img-casts">
                                    <p class="name-casts color mt-2" style="font-size:20px">{{item.name}}</p>
                                </div>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
        <div class="video-youtube mt-10" v-for='item in getVideo()' :key="item.id">
            <iframe :src="'https://www.youtube.com/embed/'+item.key" frameborder="0" class="w-100" height="833" allowfullscreen></iframe>
        </div>
        <div class="same-movie mt-10">
            <p class="text-same color" style="font-size:30px">Similar Movie</p>
            <div class="same-movie-content">
                <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
   <swiper-slide v-for="item in similar" :key="item.id">
                <card-content-movie class="movie-card" :item="item"></card-content-movie>
   </swiper-slide>
                </swiper>
            </div>
        </div>
  </div>
</template>

<script>
import cardContentMovie from '../movie-site/card-content-movie.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
// import {getCasts} from '../../apis/casts';
  import 'swiper/css';

  import 'swiper/css/pagination';

  import '../../../src/style.css';
  import {createNamespacedHelpers} from 'vuex'
  const {mapState:filmchung} = createNamespacedHelpers('filmchung')
   const {mapState:casts} = createNamespacedHelpers('casts')
   const {mapState:videomovie} = createNamespacedHelpers('videomovie')
   const {mapState:similarfilm} = createNamespacedHelpers('similarfilm')
export default {
    components:{
        cardContentMovie,
        Swiper,
        SwiperSlide
    },
    created()
    {
        // const datacasts = this.actor
        // console.log(datacasts);
        // console.log(this.getCasts());
        // const datamovie = this.video.results.key;
        // console.log(datamovie)
        console.log(this.getVideo());
        console.log(this.getCasts())
    },
    computed:{
        ...filmchung({
            results : state => state.film
        }),
        ...casts({
            actor : state => state.CastsDetail
        }),
       ...videomovie({
            video : state => state.video
       }),
       ...similarfilm({
        similar: state => state.similar.results
       })
    },
    methods:{
         getCasts(){
            return this.actor.cast.slice(0, 4);
        },
        getVideo(){
            return this.video.results.slice(0,1)
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.image-main-film{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.image-insight{
    position: relative;
    
}
.banner-film{
    width: 100%;
    height: 602px;
    opacity: 0.3;
}
.image-in-banner{
    width: 50%;
    height: 200px;
    position: absolute;
    bottom: 0px;
    left: 25%;
    transform: translateY(50%);
}
.title-detail-film{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:120px ;

}
.name-film{
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: 600;
}
.color{
    color: white;
}
a{
    color: pink;
    text-decoration: none;
    text-align: center;
}
.list-film{
    display: flex;
}
li{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid pink;
    margin-right:20px ;
    width: 100px;
    height: 40px;
    border-radius:5px;
    margin-top: 40px;
    padding: 0 10px;
}
.title-introduce{
    color: white;
    width: 50%;
    text-align: center;
    line-height: 1.625;
}
.text-casts{
    font-size: 40px;
    text-align: center;
}
.img-casts{
    height: 350px;
    width: 100%;
}
.image-casts{
    background-color: #0F172A;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}
.movie-card{
    width: 100%;
}
</style>