<template>
  <div class="main-film">
    <div class="anhien" v-if="isSmallScreen">
      <header-film></header-film>
    </div>

    <nav>
      <navbar-film></navbar-film>
    </nav>
    <main>
      <contentFilm></contentFilm>
    </main>
  </div>
</template>

<script>
import contentFilm from "./content-film.vue";
import headerFilm from "./header-film.vue";
import navbarFilm from "./navbar-film.vue";

export default {
  data() {
    return {
      isSmallScreen: false,
      change: 1,
    };
  },
  components: {
    headerFilm,
    navbarFilm,
    contentFilm,
  },
  created() {
    let loader = this.$loading.show({
      // Optional parameters
      container: this.fullPage ? null : this.$refs.formContainer,
      canCancel: true,
      loader: "dots",
      backgroundColor: "black",
      width: 100,
      height: 100,
      onCancel: this.onCancel,
      color: "#CB4440",
    });
    // simulate AJAX
    setTimeout(() => {
      loader.hide();
    }, 1500);
    if (window.innerWidth <= 768) {
      this.isSmallScreen = true;
    }
    window.addEventListener("resize", () => {
      let duy = window.innerWidth;
      if (duy <= 768) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });
  },
};
</script>

<style scoped>
.main-film{
  overflow-x: hidden;
}
</style>
