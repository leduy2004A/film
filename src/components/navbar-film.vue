<template>
  <div class="navbar-film">
    <v-navigation-drawer color="#1A171E" location="start" width="300" theme="dark">
        <div class="navbar-content">
           <p style="font-size:25px" class="bg-red rounded text-center mt-10">Menu</p> 
        </div>
        <v-list>
            <v-list-item prepend-icon="mdi-home-circle" title="Home" value="home" color="red">
            </v-list-item>
            <v-list-item prepend-icon="mdi-compass" title="Movie" value="Discovery" color="red" to="/main-movie">
            </v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Comunity" value="Community" color="red">
            </v-list-item>
            <v-list-item prepend-icon="mdi-clock-time-eight" title="Comming soon" value="Commingsoon" color="red">
            </v-list-item>
        </v-list>
         <v-divider></v-divider>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p{
    color: white;
}
.navbar-content{
    margin-left: 10px;
    width: 95%;
}
</style>