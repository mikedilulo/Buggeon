<template>
  <div class="password backround">
    <div class="row">
      <div class="col-md-12 pr-0 pl-0">
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
    <div class="row mt-5 d-flex justify-content-center">
      <div class="col-md-4">
        <form class="text-center border border-light p-5 bg-dark" action="#!">
          <p class="h4 mb-4 text-white">Forgot Your Password? We Can Help!</p>

          <div class="form-row mb-4">
            <div class="col">
              <!-- First name -->
              <input
                type="text"
                id="defaultRegisterFormFirstName"
                class="form-control"
                placeholder="First name"
              />
            </div>
            <div class="col">
              <!-- Last name -->
              <input
                type="text"
                id="defaultRegisterFormLastName"
                class="form-control"
                placeholder="Last name"
              />
            </div>
          </div>

          <!-- E-mail -->
          <input
            type="email"
            id="defaultRegisterFormEmail"
            class="form-control mb-4"
            placeholder="E-mail"
          />

          <!-- Phone number -->
          <input
            type="text"
            id="defaultRegisterPhonePassword"
            class="form-control"
            placeholder="Phone number"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
          />
          <small
            id="defaultRegisterFormPhoneHelpBlock"
            class="form-text text-white mb-4"
          >Optional - Choose to send by Text or Email</small>

          <!-- Sign up button -->
          <button class="btn btn-light my-4 btn-block" type="submit">
            <router-link to="/">Submit Information</router-link>
          </button>

          <!-- Social register -->
          <p class="text-white">or sign in with:</p>

          <a href="https://www.facebook.com" class="mx-2 text-white" role="button">
            <i class="fab fa-facebook-f light-blue-text"></i>
          </a>
          <a href="https://www.twitter.com" class="mx-2 text-white" role="button">
            <i class="fab fa-twitter light-blue-text"></i>
          </a>
          <a href="https://www.instagram.com" class="mx-2 text-white" role="button">
            <i class="fab fa-linkedin-in light-blue-text"></i>
          </a>
          <a href="https://www.github.com" class="mx-2 text-white" role="button">
            <i class="fab fa-github light-blue-text"></i>
          </a>

          <hr />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "password"
};
</script>

<style>
.backround {
  background: url("https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1381&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1901px;
  height: 975px;
  padding-left: 0px;
  margin-right: 0px;
}
</style>