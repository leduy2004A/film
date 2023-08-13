<template>
  <div class="header-film d-flex">
    <v-app-bar color="black" class="app-header" flat="true">
        <div class="title d-flex ml-4">
          <router-link to="/main-film" style="color:white;text-decoration:none" active-class="active"><p>Home</p></router-link>
            <router-link to="/main-movie" style="color:white;text-decoration:none" ><p class="mx-8">Movie</p></router-link>
            
            <p>TV Shows</p>
        </div>
        <v-spacer></v-spacer>
        <v-row class="justify-end">
           <div class="icon-header mr-4">
            <v-icon>mdi-wifi</v-icon>
            <v-icon class="mx-8">mdi-bell</v-icon>
            <v-icon>mdi-menu</v-icon>
        </div>
        </v-row>
       
    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.active{
  color:red
}
</style>