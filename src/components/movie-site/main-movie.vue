<template>
  <div class="main-movie color-movie">
    <header>
        <header-film></header-film>
    </header>
    <main class="my-4">
        <content-movie :page="page" :key="page"></content-movie>
    </main>
    <footer>
         <v-pagination
        v-model="duy"
        :length="300"
        rounded="circle"
        color="white"
        total-visible="5"
        @click="chuyentrang(duy)"
    ></v-pagination>
    </footer>
  </div>
</template>

<script>
import headerFilm from '../header-film.vue'
import contentMovie from './content-movie.vue'
export default {
    data(){
        return {
            duy:1,
            page:1
        }
    },
    methods:{
        chuyentrang(duy)
        {
            this.page = duy;
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
            // this.$router.push("/main-movie");
               }, 2000)
            
            console.log(this.page);
        }
    },
    components:{
        headerFilm,
        contentMovie
    },
    created(){
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
               }, 2000)
    }
}
</script>

<style scoped>
.color-movie{
    background-color: #0F172A;
    height: 100%;
}
@media only screen and (max-width: 46.1875em)
{
  .main-movie{
    overflow-x:hidden ;
  }
}
@media only screen and (min-width:46.25em) and (max-width: 69.9375em)
    {
     .main-movie{
    overflow-x:hidden ;
  }
    }
</style>