<template>
  <div class="archive bckgrimg">
    <div class="row container-fluid p-0 mr-0 ml-0 mt-0">
      <div class="col-md-12 m-0 p-0">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark m-0">
          <a class="navbar-brand companyIcon">
            <i class="fas fa-bug"></i>
            Buggeon
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-5">
              <!-- NOTE BELOW BUTTONS HAVE ROUTER LINKS TO THEIR RESPECTIVE PAGES -->
              <button class="btn btn-primary btn-lg ml-5 mr-5">
                <router-link to="/bug">
                  <li class="nav-item">
                    <a class="nav-link text-white">Bug Tracker Home</a>
                  </li>
                </router-link>
                <!-- TODO If POSSIBLE CHECK AND SEE IF I CAN MAKE A SEPARATE TABLE WITH JUST CLOSED BUGS -->
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="row container-fluid d-flex justify-content-center">
      <div class="col-md-10">
        <h1 class="mb-5 mt-5 text-light headClass bg-dark d-flex justify-content-center">
          <span class="mr-3">**</span>Closed Bugs
          <span class="ml-1">**</span>
        </h1>
        <div>
          <table class="table table-hover bg-light">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Bug Title</th>
                <th scope="col">Reported By</th>
                <th scope="col">Status of Bug</th>
                <th scope="col">Bug Created</th>
                <th scope="col">Bug Closed</th>
              </tr>
            </thead>
            <tbody class="p-0">
              <tr class="table" v-for="bug in closedBug" :key="bug.id">
                <router-link :to="{ name: 'detail', params: { id: bug.id } }">
                  <td>{{ bug.title }}</td>
                </router-link>
                <td>{{ bug.reportedBy }}</td>
                <td
                  class="text-danger"
                  :v-if="!bug.closed"
                  :class="{ color: bug.closed }"
                >{{ bug.closed }}</td>
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
import Navbar from "@/components/Nav.vue";
export default {
  name: "archive",
  computed: {
    bug() {
      return this.$store.state.bug;
    },
    closedBug() {
      let bug = this.$store.state.bug;
      if (!bug.closed) {
        return this.bug.filter(bug => bug.closed);
      }
    }
  }
};
</script>

<style>
.bckgrimg {
  background: url("https://images.unsplash.com/photo-1526314114033-349ef6f72220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1396&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1901px;
  height: 1300px;
  padding-left: 0px;
  margin-right: 0px;
  margin-top: 0px !important;
}
.headClass {
  border: 1px solid black;
  width: 400px;
  margin-left: 550px;
}
</style>