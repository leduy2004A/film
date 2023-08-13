<template>
  <div class="top-rated-film">
    <p class="title-film my-2">
        <v-icon color="blue">mdi-image-filter-vintage</v-icon>
        Top Rated
        </p>
    <v-container class="bg-black px-0" fluid="true">
        <v-row justify="start" class="bg-black">
            <v-col cols="6" v-for="item in film.results" :key="item.id" class="bg-black"  md="4" >
                <v-sheet>
            <div class="film-trend w-100 bg-black">
                  <img :src="'https://image.tmdb.org/t/p/original/'+item.poster_path" alt="" class="image image-size w-100">
            <div class="name-film ">
                <div class="name-title">
                    <p class="name-main">{{item.title}}</p>
                </div>
                <div class="btn-watch">
                    <v-btn color="red" text="Watch" @click="showDetail(item.id)"></v-btn>
                </div>
            </div>
            
         </div>
          
          
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
 
  </div>
</template>

<script>
import {createNamespacedHelpers,useStore} from 'vuex'
const {mapState} = createNamespacedHelpers('toprated')
export default {
    setup(){
        const store = useStore();
        store.dispatch('toprated/getToprated');
    },
    computed:{
        ...mapState({
            film: state => state.topfilm
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
  font-size: 20px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;

}
.btn-watch{
    opacity: 0.9;
    width: 30%;
}
    .image-film{
    
    width: 100%;
    
}
.image{
    background: black;
    height: 400px;
    object-fit: inherit;
}
.film-trend{
    width: 100%;
    position: relative;
}
.name-film{
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: black;
}
p{
    font-size: 20px;
}
.name-title{
    color: white;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
}
</style>