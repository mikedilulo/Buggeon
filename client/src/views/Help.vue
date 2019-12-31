<template>
  <div class="help background">
    <navs />
    <div class="heading">
      <div class="row">
        <div class="col-md-12">
          <h1 class="mt-5 text-white">Need A Hand? We At Buggeon Are Here To Help!</h1>
          <div>
            <div class="row mt-5 d-flex justify-content-center">
              <div class="col-md-4 d-flex">
                <input
                  type="text"
                  class="form-control mb-4 marginSpace"
                  placeholder="Search Buggeon Help"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row moreMargin">
      <div class="col-md-8 d-flex justify-content-start ml-5">
        <h2>
          Buggeon Help Topics
          <hr class="browseBuggeon" />
          <div class="col-md-4 d-flex inline-block">
            <dl class="mr-5">
              <dt class="mt-3">
                <i class="fas fa-user-alt mr-3"></i>
                <a href="#">Account</a>
              </dt>
              <dt class="mt-3">
                <i class="fas fa-briefcase"></i>
                <a href="#">Business</a>
              </dt>
              <dt class="mt-3">
                <i class="far fa-id-badge"></i>
                <a href="#">Standards</a>
              </dt>
              <dt class="mt-3">
                <i class="fas fa-laptop-code"></i>
                <a href="#">Debugging</a>
              </dt>
            </dl>
            <div class="col-md-4">
              <dl class="mr-5">
                <dt class="mt-3 ml-5 mb-3">
                  <i class="fas fa-balance-scale"></i>
                  <a href="#">Legal</a>
                </dt>
                <dt class="mt-3 ml-5 mb-3">
                  <i class="fas fa-flag"></i>
                  <a href="#">Issue</a>
                </dt>
                <dt class="mt-3 ml-5 mb-3">
                  <i class="fas fa-hands-helping"></i>
                  <a href="#">Basics</a>
                </dt>
                <dt class="mt-3 ml-5">
                  <i class="fas fa-book-open"></i>
                  <a href="#">Guide</a>
                </dt>
              </dl>
            </div>
          </div>
        </h2>
      </div>
      <div class="col-md-3 d-flex justify-content-start">
        <h2>
          Popular Searches
          <hr class="searchBuggeon" />
          <dl>
            <dl>
              <dt class="mb-4">
                <a href="#">Cant Log In</a>
              </dt>
              <dt class="mb-4">
                <a href="#">Find Bugs</a>
              </dt>
              <dt class="mb-4">
                <a href="#">Edit Notes</a>
              </dt>
              <dt class="mb-4">
                <a href="#">Bug After Close</a>
              </dt>
              <dt class="mb-4">
                <a href="#">Edit Settings</a>
              </dt>
              <dt class="mb-4">
                <a href="#">Latest Version</a>
              </dt>
              <dt class="mb-4">
                <a href="#">Protect Account</a>
              </dt>
              <dt>
                <a href="#">Retrieve Key</a>
              </dt>
            </dl>
          </dl>
        </h2>
      </div>
    </div>
  </div>
</template>


<script>
import Navs from "@/components/Navs.vue";
export default {
  name: "help",
  components: {
    Navs
  }
};
</script>

<style>
.background {
  background: url("https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 1888px;
  max-height: 750px;
  padding-left: 0px;
  margin-right: 0px;
}
.marginSpace {
  margin-top: 140px;
}
.moreMargin {
  margin-top: 350px;
}
hr {
  border: 1px solid black;
}
.browseBuggeon {
  width: 500px;
}
.searchBuggeon {
  width: 400px;
}
</style>