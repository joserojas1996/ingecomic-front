<template>
  <div>
    <div class="d-flex align-items-center min-h-100 bg-dark">
      <div id="content" role="main" class="flex-grow-1 overflow-hidden">
        <div class="container">
          <div class="mx-lg-auto" style="max-width: 55rem">
            <div
              class="d-flex justify-content-center align-items-center flex-column min-vh-lg-100"
            >
              <header
                id="header"
                class="navbar navbar-height navbar-light mb-3"
              >
                <div class="container">
                  <router-link
                    class="navbar-brand mx-auto"
                    to="landing"
                    aria-label="Unify"
                  >
                    <img
                      class="navbar-brand-logo"
                      src="assets/svg/logos/logo-white.svg"
                      alt="Image Description"
                    />
                  </router-link>
                </div>
              </header>
              <div class="position-relative">
                <!-- Card -->
                <div class="card card-shadow card-login">
                  <div class="row">
                    <div class="col-md-8">
                      <div class="card-body">
                        <!-- Form -->
                        <router-view />
                        <!-- End Form -->
                      </div>
                    </div>
                    <!-- End Col -->

                    <div
                      class="col-md-4 d-md-flex justify-content-center flex-column bg-soft-primary p-8 p-md-5"
                      style="
                        background-image: url(assets/svg/components/wave-pattern.svg);
                      "
                    >
                      <h5 class="mb-4">InGeComic:</h5>

                      <!-- List Checked -->
                      <ul class="list-checked list-checked-primary list-py-2">
                        <li class="list-checked-item">Facil de entender</li>
                        <li class="list-checked-item">Facil de aprender</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <figure
                  class="position-absolute top-0 end-0 zi-n1 d-none d-sm-block mt-n7 me-n10"
                  style="width: 4rem"
                >
                  <img
                    class="img-fluid"
                    src="assets/svg/components/pointer-up.svg"
                    alt="Image Description"
                  />
                </figure>

                <figure
                  class="position-absolute bottom-0 start-0 d-none d-sm-block ms-n10 mb-n10"
                  style="width: 15rem"
                >
                  <img
                    class="img-fluid"
                    src="assets/svg/components/curved-shape.svg"
                    alt="Image Description"
                  />
                </figure>
                <!-- End SVG Shape -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>