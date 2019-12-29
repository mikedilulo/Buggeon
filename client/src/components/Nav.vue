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
              <button class="btn btn-danger btn-lg mr-5 ml-5">Create A New Bug</button>

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
  name: "navbar"
};
</script>

<style>
</style>