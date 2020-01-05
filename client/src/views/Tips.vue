<template>
  <div class="tips">
    <navs />
    <div class="row">
      <div class="col-md-9">
        <h1 class="mt-5 d-flex justify-content-start ml-3">Navigating The Home Page</h1>
        <img src="//placehold.it/300x300" class="mt-5 d-flex justify-content-start ml-5" alt />
      </div>
    </div>
  </div>
</template>

<script>
import Navs from "@/components/Navs.vue";
export default {
  name: "tips",
  components: {
    Navs
  }
};
</script>

<style>
.listItems {
  width: 200px !important;
}
</style>