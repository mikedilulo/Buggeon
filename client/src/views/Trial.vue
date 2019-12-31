<template>
  <div class="trial backgrroound">
    <navs />
    <div class="row d-flex justify-content-end">
      <div class="col-md-4 mr-5">
        <form class="text-center border border-light p-5 bg-dark mt-5" action="#!">
          <p class="h4 mb-4 text-white">Start Your Free Trial Today!</p>

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

          <!-- Sign up button -->
          <button class="btn btn-light my-4 btn-block" type="submit">
            <router-link to="/">Start my 15 Day Free Trial</router-link>
          </button>

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
    <div class="row trialPage d-flex justify-content-center mb-5">
      <div class="col-md-9">
        <h6 class="text-danger">
          <strong>WHY BUGGEON</strong>
        </h6>
        <h2>Debug with anyone, anywhere. On any device.</h2>
        <p>Buggeon makes it easier to connect with your code anyway that you want to</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 d-flex inline-block justify-content-around mt-5">
        <div class="col-md-3">
          <i class="far fa-building iconTrial"></i>
          <h3>
            <strong>Get More Done</strong>
          </h3>
          <p>
            Unlimited bugs to track, simple interface. Clear and concise notes. Buggeon will work wonders
            with coding for productivity
          </p>
        </div>
        <div class="col-md-3">
          <i class="fas fa-cut iconTrial"></i>
          <h3>
            <strong>Decrease Time</strong>
          </h3>
          <p>
            Using Buggeon will decrease the time away from your computer thinking about coding problems. This program will allow
            the user to be able to perservere and keep going.
          </p>
        </div>
        <div class="col-md-3">
          <i class="fas fa-chart-line iconTrial"></i>
          <h3>
            <strong>Increase Code</strong>
          </h3>
          <p>
            Here's a simple solution: unlimited potential + more code + big checks = happy developers. Using this program will
            cut the cost of time away from the computer by 30%.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 d-flex inline-block justify-content-around mt-5">
        <div class="col-md-3">
          <i class="fas fa-code-branch iconTrial"></i>
          <h3>
            <strong>Build Better Code</strong>
          </h3>
          <p>Track bugs before they happen, read on old notes, stay fresh and up to date at all times.</p>
        </div>
        <div class="col-md-3">
          <i class="fas fa-link iconTrial"></i>
          <h3>
            <strong>One Program, All Linked</strong>
          </h3>
          <p>
            Every developer recieves a personal profile to refer to their notes, and what works best for them. This can be merged to other profiles
            to see everybody's input.
          </p>
        </div>
        <div class="col-md-3">
          <i class="fas fa-lock iconTrial"></i>
          <h3>
            <strong>The Secure Solution</strong>
          </h3>
          <p>
            With end-to-end encryption, strong passwords and top related reliability. No one is messing
            with your code.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navs from "@/components/Navs.vue";
export default {
  name: "trial",
  components: {
    Navs
  }
};
</script>

<style>
.backgrroound {
  background: url("https://images.unsplash.com/photo-1485770958101-9dd7e4ea6d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1917px;
  height: 800px;
  padding-left: 0px;
  margin-right: 0px;
}
.trialPage {
  margin-top: 140px;
}
.iconTrial {
  font-size: 50px;
}
</style>