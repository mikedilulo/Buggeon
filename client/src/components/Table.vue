<template>
  <div class="table bbackground">
    <div class="row container-fluid d-flex justify-content-center">
      <div class="col-md-10">
        <h1 class="mb-5 mt-5 text-light">
          <span class="mr-3">**</span>Reported Bugs
          <span class="ml-1">**</span>
        </h1>
        <div>
          <button
            class="btn btn-warning text-dark btn-lg mb-4 closeButton border-rounded"
            type="button"
          >
            Hide Closed Bugs
          </button>
          <table class="table table-hover bg-light">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Bug Title</th>
                <th scope="col">Reported By</th>
                <th scope="col">Status of Bug</th>
                <th scope="col">Bug Created</th>
                <th scope="col">Last Modified</th>
              </tr>
            </thead>
            <tbody class="p-0">
              <tr class="table" v-for="bug in bug" :key="bug.id">
                <router-link :to="{ name: 'detail', params: { id: bug.id } }">
                  <td>{{ bug.title }}</td>
                </router-link>
                <td>{{ bug.reportedBy }}</td>
                <td
                  class="text-danger"
                  :v-if="!bug.closed"
                  :class="{ color: bug.closed }"
                >
                  {{ bug.closed }}
                </td>
                <td>{{ bug.createdAt }}</td>
                <td>{{ bug.updatedAt }}</td>
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
    // NOTE THIS WILL RENDER THE DATA TO THE PAGE EVEN WHEN YOU REFRESH
    this.$store.dispatch("getAll");
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
table {
  border: 1px solid black;
}
.bbackground {
  background: url("https://images.unsplash.com/photo-1526327755027-f4c7957e67f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1241&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1901px;
  height: 1300px;
  padding-left: 0px;
  margin-right: 0px;
  margin-top: 0px !important;
}
.color {
  color: green !important;
}
</style>
