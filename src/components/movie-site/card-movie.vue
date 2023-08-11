<template>
  <div class="card-movie">
    <v-container fluid="true" class="px-0">
        <v-row justify="start">
            <v-col cols="3" v-for="item in allfilm" :key="item.id">
                <v-sheet>
                    
                <card-content-movie :item="item"></card-content-movie>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import cardContentMovie from './card-content-movie.vue'
import {useStore,createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers('allfilm')
export default {
    setup(){
        const store = useStore();
        let page = 1;
        store.dispatch('allfilm/getallfilm',page)
    },
    components:{
        cardContentMovie
    },
    computed:{
        ...mapState({
            allfilm: state => state.allfilm.results
        })
    }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    .card-movie{
        width: 100%;
    }
  
</style>