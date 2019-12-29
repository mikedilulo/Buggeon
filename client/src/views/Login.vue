<template>
  <div class="login background-image">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="row">
      <div class="col-md-12 mr-0 pr-0 pl-0">
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
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active d-flex">
                <button class="btn btn-danger btn-lg ml-5 mr-5">
                  <router-link to="/contact">
                    <a class="nav-link text-white">Contact Us</a>
                  </router-link>
                </button>
              </li>
              <button class="btn btn-primary btn-lg ml-5 mr-5">
                <router-link to="/version">
                  <li class="nav-item">
                    <a class="nav-link text-white">Latest Downloads</a>
                  </li>
                </router-link>
              </button>
              <button class="btn btn-success btn-lg ml-5 mr-5">
                <router-link to="/locate">
                  <li class="nav-item">
                    <a class="nav-link text-white">Locate a Bugger</a>
                  </li>
                </router-link>
              </button>
              <button class="btn btn-secondary btn-lg ml-5 mr-5">
                <router-link to="/help">
                  <li class="nav-item">
                    <a class="nav-link text-white">Help Center</a>
                  </li>
                </router-link>
              </button>
              <button class="btn btn-info btn-lg ml-5">
                <li class="nav-item">
                  <a class="nav-link text-white">Tips and Tricks</a>
                </li>
              </button>
            </ul>
          </div>
        </nav>
        <div class="col-md-11 ml-5 d-flex justify-content-center text-white mt-4">
          <h1 class="mb-3">
            STUCK ON YOUR CODE? DO YOU LOVE TAB OR MOUNTAIN DEW? LET US HELP YOU
            <strong
              class="text-success"
            >BUGGEON</strong> YOUR WAY TO SUCCESS!
          </h1>
        </div>
        <div class="col-md-3 formGroup">
          <form class="text-center border border-white p-5 ml-5 mt-5" action="#!">
            <p class="h4 mb-4 text-white">Sign in</p>

            <!-- Email -->
            <input
              type="email"
              id="defaultLoginFormEmail"
              class="form-control mb-4"
              placeholder="E-mail"
            />

            <!-- Password -->
            <input
              type="password"
              id="defaultLoginFormPassword"
              class="form-control mb-4"
              placeholder="Password"
            />

            <div class="d-flex justify-content-around">
              <div>
                <!-- Remember me -->
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
                  <label
                    class="custom-control-label text-white"
                    for="defaultLoginFormRemember"
                  >Remember me</label>
                </div>
              </div>
              <div>
                <!-- Forgot password -->
                <router-link to="/password">
                  <a href class="text-warning">Forgot password?</a>
                </router-link>
              </div>
            </div>

            <!-- Sign in button -->
            <button class="btn btn-light btn-block my-4 btn-rounded" type="submit">
              <router-link to="/bug">Sign in</router-link>
            </button>

            <!-- Register -->
            <p class="text-white">
              Not a member?
              <router-link to="/register">
                <a href class="text-warning">Register</a>
              </router-link>
            </p>

            <!-- Social login -->
            <p class="text-white">or sign in with:</p>

            <a href="https://www.facebook.com" class="mx-2 text-light" role="button">
              <i class="fab fa-facebook-f light-blue-text"></i>
            </a>
            <a href="https://www.twitter.com" class="mx-2 text-light" role="button">
              <i class="fab fa-twitter light-blue-text"></i>
            </a>
            <a href="https:www.instagram.com" class="mx-2 text-light" role="button">
              <i class="fab fa-linkedin-in light-blue-text"></i>
            </a>
            <a href="https://www.github.com" class="mx-2 text-light" role="button">
              <i class="fab fa-github light-blue-text"></i>
            </a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "login",
  components: {
    // HelloWorld
  }
};
</script>
<style>
.companyIcon {
  font-size: 30px;
}
.background-image {
  background: url("https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1901px;
  height: 975px;
  padding-left: 0px;
  margin-right: 0px;
}

.formGroup {
  margin-left: 120px;
}
</style>
