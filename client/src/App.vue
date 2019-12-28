<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div class="row">
      <div class="col-md-12 ml-1 mr-0 pr-0 pl-0">
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
                  <a class="nav-link text-white">Contact Us</a>
                </button>
              </li>
              <button class="btn btn-primary btn-lg ml-5 mr-5">
                <li class="nav-item">
                  <a class="nav-link text-white">Latest Downloads</a>
                </li>
              </button>
              <button class="btn btn-success btn-lg ml-5 mr-5">
                <li class="nav-item">
                  <a class="nav-link text-white">Locate a Bugger</a>
                </li>
              </button>
              <button class="btn btn-secondary btn-lg ml-5 mr-5">
                <li class="nav-item">
                  <a class="nav-link text-white">Frequently Asked Questions</a>
                </li>
              </button>
              <button class="btn btn-info btn-lg ml-5">
                <li class="nav-item">
                  <a class="nav-link text-white">Tips and Tricks</a>
                </li>
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <!-- <router-view /> -->
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.companyIcon {
  font-size: 30px;
}
body {
  background: url("https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1901px;
  height: 896px;
}
</style>
