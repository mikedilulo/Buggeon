<template>
  <div class="navtree">
    <div class="row mb-5">
      <div class="col-md-12 pl-0">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark pl-5">
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
              <button class="btn btn-light btn-lg btn-rounded mr-5">
                <router-link to="/contact/trial">Start Free Trial</router-link>
              </button>

              <button class="btn btn-danger btn-lg">
                <router-link to="/">
                  <li class="nav-item">
                    <a class="nav-link text-white">Back to Login Page</a>
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
  name: "navtree"
};
</script>

<style>
</style>