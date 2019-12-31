<template>
  <div class="detail backimage">
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
              <button class="btn btn-secondary btn-lg ml-5 mr-5">Closed Bug Archive</button>
              <!-- NOTE BELOW BUTTON HAS A ROUTER LINK TO ITS RESPECTIVE AREA -->
              <button class="btn btn-success btn-lg ml-5">
                <router-link to="/">
                  <li class="nav-item">
                    <a class="nav-link text-white">Log Out of Buggeon</a>
                  </li>
                </router-link>
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="row m-0 p-0">
      <div class="col-md-8">
        <h5 class="d-flex justify-content-start ml-3 mt-5 text-light">Bug Title:</h5>
        <div class="d-flex justify-content-start ml-5 text-warning">
          <h1>{{ bug.title }}</h1>
        </div>
      </div>
    </div>
    <div class="row mt-5 p-0 mr-0 ml-0">
      <div class="col-md-10">
        <h5 class="ml-3 text-light d-flex justify-content-start">Reported By:</h5>
        <div class="ml-3 text-warning d-flex justify-content-start ml-5">
          <h1>{{ bug.reportedBy }}</h1>
        </div>
        <div>
          <h5 class="d-flex justify-content-end text-light mr-5">Status:</h5>
          <h1 class="d-flex justify-content-end text-danger">{{ bug.closed }}</h1>
        </div>
      </div>
    </div>
    <div class="row m-0 p-0">
      <div class="col-md-10">
        <h5 class="mt-5 text-light d-flex justify-content-start ml-3 deets">BUG DETAILS:</h5>
        <h1 class="ml-5 mt-5 bg-light detailsClass">{{ bug.description }}</h1>
      </div>
    </div>
    <div class="row m-0 p-0">
      <div class="col-md-12 d-flex justify-content-center mt-5">
        <button
          class="btn btn-success btn-lg mr-5 editButton"
          data-toggle="modal"
          data-target="#editBugs"
          v-show="!bug.closed"
        >Edit The Bug</button>
        <button
          v-show="!bug.closed"
          class="btn btn-danger btn-lg ml-5"
          @click="deleteBug"
        >Close The Bug</button>
        <div
          class="modal fade"
          id="editBugs"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Do You Want To Edit The Original Bug?</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="editBug">
                  <div class="form-group">
                    <label for="edit-bug" class="col-form-label">Edit The Bug:</label>
                    <textarea class="form-control" id="edit-bug" required></textarea>
                  </div>
                  <button type="submit" class="btn btn-success">Send Edit</button>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "detail",
  mounted() {
    // NOTE WHEN WANTING TO RENDER A SPECIFIC PIECE OF DATA MAKE SURE TO INCLUDE THIS.ROUTE.PARAMS.ID
    this.$store.dispatch("getBugById", this.$route.params.id);
  },
  methods: {
    deleteBug() {
      Swal.fire({
        title: "Are you sure?",
        text: "You Will No Longer Be Able To Edit The Bug!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Close it!"
      }).then(result => {
        if (result.value) {
          Swal.fire("Closed!", "The Bug has been Closed.", "success");
        }
        this.$store.dispatch("deleteBug", this.$route.params.id);
      });
    }
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  }
};
</script>

<style>
.backimage {
  background: url("https://images.unsplash.com/photo-1437936251057-dfbf79980ce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1900px;
  height: 1300px;
  padding-left: 0px;
  margin-right: 0px;
}
.detailsClass {
  margin-left: 300px !important;
  padding: 20px;
  border: 5px solid black;
}
.deets {
  margin-left: 200px !important;
}
.editButton {
  margin-right: 450px !important;
}
</style>
