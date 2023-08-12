<template>
  <div class="card-contain w-100">
                        <div class="card-content w-90">
                            <div class="img-card w-100">
                                <img :src="'https://image.tmdb.org/t/p/original/'+item.poster_path" alt="" class="image-main w-100">
                            </div>
                            <div class="title-movie mt-5"><p>{{item.title}}</p></div>
                            <div class="info-film d-flex justify-space-between color-text mt-5">
                                <p>2023</p>
                                <p>{{item.vote_average}}</p>
                            </div>
                            <div class="btn-movie">
                                <v-btn text="Watch Now" class="btn" color="pink" @click='showDetal(item.id)'></v-btn>
                            </div>
                        </div>
                    </div>
                    
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers('allfilm')
export default {
    props:{
        item:{
            type:Object
        }
    },
    computed:{
        ...mapState({
            allfilm : state => state.allfilm.results
        })
    },
    methods:{
        showDetal(idmovie)
        {
            window.scrollTo({
        top: 0,
        behavior: "smooth" // Tạo hiệu ứng cuộn mượt
      });
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
 .card-contain{
        min-height: 500px;
        background-color: #1E293B;
        position: relative;
    }
    .image-main{
        border-radius:10px;
        width: 100%;
        height: 251px;
        object-fit: fill;
    }
    .card-content{
        padding: 10px;

    }
    .title-movie{
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 500;
    }
    .color-text{
        color: white;
    }
    .btn{
        height: 50px;
        /* width: 80%; */
        text-align: center;
    }
    .btn-movie{
        position: absolute;
        bottom: 10px;
        width: 100%;
        
    }
    .info-film{
        position: absolute;
        width: 90%;
        bottom:20%;
    }
</style>