<template>
  <div class="about">
    <AboutPage/>
  </div>
</template>

<script>
import AboutPage from "@/components/aboutPage.vue";

export default {
  name: "Home",
  components: {
    AboutPage
  }
};
</script>

<style scoped>
  .about{
    background: rgb(22,23,26);
    background: linear-gradient(180deg, rgba(22,23,26,1) 0%, rgba(4,12,26,1) 100%);
  }

</style>
