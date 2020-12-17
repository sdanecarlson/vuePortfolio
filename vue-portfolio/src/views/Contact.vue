<template>
  <div class="about">
    <ContactPage/>
  </div>
</template>

<script>
import ContactPage from "@/components/contactPage.vue";

export default {
  name: "Home",
  components: {
    ContactPage,
  }
};
</script>

<style scoped>
  .about{
    background: rgb(22,23,26);
    background: linear-gradient(180deg, rgba(22,23,26,1) 0%, rgba(4,12,26,1) 100%);
    height: 100vw;
  }

</style>
