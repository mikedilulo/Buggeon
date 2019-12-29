<template>
  <div class="table">
    <div class="row container-fluid d-flex justify-content-center mt-5">
      <div class="col-md-10">
        <h1 class="mb-5">**Reported Bugs**</h1>
        <div>
          <button class="btn btn-warning text-dark btn-lg mb-4 closeButton">Hide Closed Bugs</button>
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Bug Title</th>
                <th scope="col">Reported By</th>
                <th scope="col">Status of Bug</th>
                <th scope="col">Bug Created</th>
                <th scope="col">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table" v-for="bug in bug" :key="bug.id">
                <td>{{bug.title}}</td>
                <td>{{bug.reportedBy}}</td>
                <td>{{bug.closed}}</td>
                <td>{{bug.createdAt}}</td>
                <td>{{bug.updatedAt}}</td>
                <table :bugData="bug" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Nav.vue";
export default {
  name: "Table",
  mounted() {
    return this.$store.state.bug;
  },
  computed: {
    bug() {
      return this.$store.state.bug;
    }
  },
  components: {
    navbar
  }
};
</script>

<style>
.closeButton {
  margin-left: 1335px !important;
}
</style>