<template>
  <div class="register backkground">
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
          <p class="h4 mb-4 text-white">Register Here! We'd love to have you!</p>

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

          <!-- Password -->
          <input
            type="password"
            id="defaultRegisterFormPassword"
            class="form-control"
            placeholder="Password"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
          />
          <small
            id="defaultRegisterFormPasswordHelpBlock"
            class="form-text text-white mb-4"
          >At least 8 characters and 1 digit</small>

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
          >Optional - for two step authentication</small>

          <!-- Newsletter -->
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter" />
            <label
              class="custom-control-label text-white"
              for="defaultRegisterFormNewsletter"
            >Subscribe to our newsletter</label>
          </div>

          <!-- Sign up button -->
          <button class="btn btn-info my-4 btn-block" type="submit">Sign Up</button>

          <!-- Social register -->
          <p class="text-white">or sign up with:</p>

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

          <!-- Terms of service -->
          <p class="text-white">
            By clicking
            <em>Sign up</em> you agree to our
            <a href target="_blank" class="text-success">terms of service</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register"
};
</script>

<style>
.backkground {
  background: url("https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1901px;
  height: 975px;
  padding-left: 0px;
  margin-right: 0px;
}
</style>