<template>
  <div class="locate bakkround">
    <navs />
    <div class="row mt-5 d-flex justify-content-center">
      <div class="col-md-3">
        <form class="text-center border border-light p-5 bg-dark" action="#!">
          <p class="h4 mb-4 text-white">Reach Out To A Professional Buggeon!</p>

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
            placeholder="Zip Code"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
          />
          <small
            id="defaultRegisterFormPhoneHelpBlock"
            class="form-text text-white mb-4"
          >Let Us Help You Get In Contact With Buggeons Around The World!</small>

          <!-- Sign up button -->
          <button class="btn btn-light my-4 btn-block" type="submit">
            <router-link to="/">Submit Request</router-link>
          </button>

          <!-- Social register -->
          <p class="text-white">or submit request with:</p>

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
import Navs from "@/components/Navs.vue";
export default {
  name: "locate",
  components: {
    Navs
  }
};
</script>

<style>
.bakkround {
  background: url("https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1901px;
  height: 975px;
  padding-left: 0px;
  margin-right: 0px;
}
</style>