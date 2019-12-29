<template>
  <div class="contact bacckkground">
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
              <button class="btn btn-warning btn-lg btn-rounded mr-5">Start Free Trial</button>

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
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-white">More Than Just A Debugger Tracker</h1>
        <p
          class="text-white mb-5"
        >Build Your Application - Get New Businesses - Manage Projects - Do It Yourself</p>
        <button class="btn btn-success btn-lg btn-rounded mt-5">Get Started</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <h2 class="text-white mt-5">Get In Touch</h2>
        <p
          class="text-white"
        >Please fill out this form and a representative will email you a response</p>
        <form class="text-center border border-light p-5 bg-dark mb-5" action="#!">
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

          <!-- Newsletter -->
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter" />
            <label
              class="custom-control-label text-white"
              for="defaultRegisterFormNewsletter"
            >I am not a robot</label>
          </div>

          <!-- Sign up button -->
          <button class="btn btn-light my-4 btn-block" type="submit">
            <router-link to="/">Send Contact Request</router-link>
          </button>

          <!-- Social register -->
          <p class="text-white">or keep in touch with:</p>

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
        </form>
      </div>
      <div class="row">
        <div class="col-md-12 inline-block connectUs">
          <div class>
            <h3 class="text-white">Connect with us</h3>
            <p class="text-white">For support or any questions</p>
            <p class="text-white">
              email us at
              <a href="#">buggeonisawesome@buggeon.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 mt-5">
        <h2 class="text-white mb-5">
          Try Buggeon for free, and open your world to the never ending opportunities it provides. You wont get a better
          deal with
          <strong>Any Bug Tracker Out There!</strong>
        </h2>
        <button class="btn btn-warning text-dark btn-lg">Start Free Trial</button>
        <p class="text-white mt-5">15 days free trial. No credit card required</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style>
.connectUs {
  margin-left: 300px;
  margin-top: 180px;
}
.bacckkground {
  background: url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1901px;
  height: 1300px;
  padding-left: 0px;
  margin-right: 0px;
}
</style>