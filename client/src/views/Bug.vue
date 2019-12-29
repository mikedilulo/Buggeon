<template>
  <div class="bug">
    <navbar />
    <Table />
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import Navbar from "@/components/Nav.vue";
export default {
  name: "bug",
  components: {
    Navbar,
    Table
  }
};
</script>

<style>
</style>