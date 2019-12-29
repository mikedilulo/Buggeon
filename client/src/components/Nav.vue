<template>
  <div class="navbar p-0">
    <div class="row container-fluid p-0 mr-0 ml-0 mt-0 mb-5">
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
              <!-- NOTE MODAL BUTTON  -->
              <button
                class="btn btn-danger btn-lg mr-5 ml-5"
                type="button"
                data-toggle="modal"
                data-target="#bug"
              >Create A New Bug</button>
              <div
                class="modal fade"
                id="bug"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Create A New Bug</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="createBug">
                        <div class="form-group">
                          <label
                            for="reportedBy"
                            class="col-form-label d-flex justify-content-left"
                          >Reported By:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="reportedBy"
                            v-model="newBug.reportedBy"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label
                            for="title"
                            class="col-form-label d-flex justify-content-left"
                          >Bug Title:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="title"
                            v-model="newBug.title"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label
                            for="description"
                            class="col-form-label d-flex justify-content-left"
                          >Description:</label>
                          <textarea
                            class="form-control"
                            id="description"
                            v-model="newBug.description"
                            required
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          class="btn btn-success d-flex justify-content-left mt-4 mb-3"
                        >Create New Bug</button>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
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
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      newBug: {
        title: "",
        reportedBy: "",
        description: "",
        closed: Boolean,
        closedDate: Date,
        id: ""
      }
    };
  },
  methods: {
    createBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        title: "",
        reportedBy: "",
        description: "",
        closed: Boolean,
        closedDate: Date,
        id: bug.id
      };
    }
  },
  computed: {
    bug() {
      return this.$store.state.bug;
    }
  }
};
</script>

<style>
</style>