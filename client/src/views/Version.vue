<template>
  <div class="version">
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
    <div class="row">
      <div class="col-md-12 bg-primary text-white">
        <h1 class="headingtag">Get Buggeon</h1>
        <p class="paratag">Use the Tracker that assists with 80% of Developers in the World</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1 class="semiheader">Available to use for $29.99/month</h1>
        <p>Download Buggeon and use it for your code.</p>
        <button class="btn btn-primary btn-lg btn-rounded">
          <i class="fas fa-cloud-download-alt mr-3"></i>Download Buggeon 1.0.0
        </button>
        <div class="mt-3">
          <a href="#">Download_zip_files</a>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 d-flex inline-block d-flex justify-content-around">
        <div class="col-md-4">
          <h1 class="mt-5">
            Installing Product
            <hr />
          </h1>
          <p
            class="mb-5"
          >Installing Buggeon is as easy as One, Two, Three. We've created a very handy and helpful guide to see you through the entire installation process</p>
        </div>
        <div class="col-md-4">
          <h1 class="mt-5">
            Requirements
            <hr />
          </h1>
          <p
            class="mb-5"
          >We recommend using "//localhost:3000" when using this program. We also recommend using the framework Vue for more robust options and capability with our programs.</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 d-flex inline-block d-flex justify-content-around">
          <div class="col-md-4">
            <h1 class="mt-5">
              Notifications
              <hr />
            </h1>
            <p>
              Make sure to subscribe to the monthly newsletter for all the updates on the latest and greatest versions. Upon subscribing an email will be sent to you, notifying
              you that an update is available.
            </p>
          </div>
          <div class="col-md-4">
            <h1 class="mt-5">
              More Resources
              <hr />
              <dl>
                <dt>
                  <a href="#">All Releases</a>
                </dt>
                <dt>
                  <a href="#">Beta Release</a>
                </dt>
                <dt>
                  <a href="#">Download Shortcuts</a>
                </dt>
                <dt>
                  <a href="#">Source Code</a>
                </dt>
              </dl>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center mb-5">
      <div class="col-md-6">
        <div>
          <i class="fas fa-mobile-alt iconsize mb-5 mt-5"></i>
        </div>
        <h2 class="mb-5">Debugging strikes anywhere, anytime</h2>
        <p class="mb-5">Create or update bugs and notes on the go with our mobile apps</p>
        <button class="btn btn-success btn-lg btn-rounded mr-5">
          <i class="fas fa-apple-alt mr-3"></i>Download for iPhone
        </button>
        <button class="btn btn-success btn-lg btn-rounded ml-5">
          <i class="fab fa-android mr-3"></i>Download for Android
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "version"
};
</script>

<style>
.headingtag {
  font-size: 70px;
  margin-top: 100px;
}
.paratag {
  font-size: 25px;
  margin-bottom: 100px;
}
.semiheader {
  margin-top: 100px;
}
hr {
  border: 1px solid black;
}
.iconsize {
  font-size: 80px;
}
</style>