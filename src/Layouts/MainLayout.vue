<template>
  <div>
    <v-overlay v-if="loading" />
    <!-- ========== HEADER ========== -->
    <header
      id="header"
      class="navbar navbar-expand-lg navbar-end navbar-light navbar-absolute-top navbar-show-hide"
      data-hs-header-options='{
            "fixMoment": 0,
            "fixEffect": "slide"
          }'
    >
      <div class="container" style="max-width: 1300px !important">
        <nav class="js-mega-menu navbar-nav-wrap">
          <!-- Default Logo -->
          <router-link class="navbar-brand" to="/" aria-label="Unify">
            <!-- <img
              class="navbar-brand-logo"
              src="assets/svg/logos/logo.svg"
              alt="Image Description"
            /> -->
            <span class="h3">InGeComic</span>
          </router-link>
          <!-- End Default Logo -->

          <!-- Toggler -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-default">
              <i class="bi-list"></i>
            </span>
            <span class="navbar-toggler-toggled">
              <i class="bi-x"></i>
            </span>
          </button>
          <!-- End Toggler -->

          <!-- Collapse -->
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="navbar-absolute-top-scroller">
              <ul class="navbar-nav nav-pills">
                <!-- Landings -->
                <li class="hs-has-mega-menu nav-item">
                  <router-link class="hs-mega-menu-invoker nav-link" to="/about"
                    >Introduccion</router-link
                  >
                </li>
                <li class="hs-has-mega-menu nav-item">
                  <router-link
                    class="hs-mega-menu-invoker nav-link"
                    to="/resources"
                    >Recursos</router-link
                  >
                </li>
                <li class="hs-has-mega-menu nav-item" v-if="userAuth?.id">
                  <router-link class="hs-mega-menu-invoker nav-link" to="/test-list"
                    >Evaluaciones</router-link
                  >
                </li>
                <!-- <li class="hs-has-mega-menu nav-item" v-if="userAuth?.id">
                  <router-link class="hs-mega-menu-invoker nav-link" to="/about"
                    >Juegos</router-link
                  >
                </li> -->
                 <li class="hs-has-mega-menu nav-item" v-if="userAuth?.id">
                  <router-link class="hs-mega-menu-invoker nav-link" to="/administration"
                    >Administracion</router-link
                  >
                </li>
                <!-- End Landings -->

                <!-- Log in -->
                <li class="nav-item ms-lg-auto">
                  <!-- <a
                    class="btn btn-ghost-dark me-2 me-lg-0"
                    href="page-login.html"
                    >Registrarme</a
                  > -->
                </li>
                <!-- End Log in -->

                <!-- Sign up -->

                <li class="nav-item dropdown" v-if="userAuth?.id">
                  <a
                    class="nav-link dropdown-toggle me-5"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      class="rounded"
                      width="40"
                      src="assets/img/160x160/img10.jpg"
                      alt="Avatar"
                    />
                    <h5 class="mt-3 ms-2">
                      {{ userAuth.name }}
                    </h5>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Mi perfil</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li style="cursor:pointer" class="dropdown-item" @click="SignOut()">Salir</li>
                  </ul>
                </li>
                <li class="nav-item" v-else>
                  <router-link
                    class="btn btn-dark d-none d-lg-inline-block btn-pointer"
                    to="/login"
                    >Comenzar</router-link
                  >
                </li>
                <!-- End Sign up -->
              </ul>
            </div>
          </div>
          <!-- End Collapse -->
        </nav>
      </div>
    </header>

    <!-- ========== END HEADER ========== -->
    <main id="content" role="main">
      <router-view />
    </main>

    <!-- ========== FOOTER ========== -->
    <footer class="bg-dark">
      <div class="container">
        <div class="row align-items-md-center py-6">
          <div class="col-md mb-3 mb-md-0">
            <!-- List -->
            <ul class="list-inline list-px-2 mb-0">
              <li class="list-inline-item">
                <a class="link link-light link-light-75" href="#"
                  >Dreyka santana</a
                >
              </li>
              <li class="list-inline-item">
                <a class="link link-light link-light-75" href="#"
                  >Yesica Dimas</a
                >
              </li>

              <li class="list-inline-item">
                <!-- Button Group -->
                <!-- <div class="btn-group">
                  <a
                    class="link link-light link-light-75"
                    href="javascript:;"
                    id="selectLanguage"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="d-flex align-items-center">
                      <img
                        class="avatar avatar-xss avatar-circle me-2"
                        src="assets/vendor/flag-icon-css/flags/1x1/us.svg"
                        alt="Image description"
                        width="16"
                      />
                      <span>English</span>
                    </span>
                  </a>

                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item d-flex align-items-center active"
                      href="#"
                    >
                      <img
                        class="avatar avatar-xss avatar-circle me-2"
                        src="assets/vendor/flag-icon-css/flags/1x1/us.svg"
                        alt="Image description"
                        width="16"
                      />
                      <span>English</span>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <img
                        class="avatar avatar-xss avatar-circle me-2"
                        src="assets/vendor/flag-icon-css/flags/1x1/de.svg"
                        alt="Image description"
                        width="16"
                      />
                      <span>Deutsch</span>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <img
                        class="avatar avatar-xss avatar-circle me-2"
                        src="assets/vendor/flag-icon-css/flags/1x1/es.svg"
                        alt="Image description"
                        width="16"
                      />
                      <span>Español</span>
                    </a>
                  </div>
                </div> -->
                <!-- End Button Group -->
              </li>
            </ul>
            <!-- End List -->
          </div>
          <!-- End Col -->

          <div class="col-md-auto">
            <p class="fs-5 text-white-70 mb-0">© UNERG. 2023</p>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Row -->
      </div>
    </footer>
    <!-- ========== END FOOTER ========== -->

    <!-- ========== SECONDARY CONTENTS ========== -->
    <!-- Go To -->
    <a
      class="js-go-to go-to position-fixed"
      href="javascript:;"
      style="visibility: hidden"
      data-hs-go-to-options='{
       "offsetTop": 700,
       "position": {
         "init": {
           "right": "2rem"
         },
         "show": {
           "bottom": "2rem"
         },
         "hide": {
           "bottom": "-2rem"
         }
       }
     }'
    >
      <i class="bi-chevron-up"></i>
    </a>
    <!-- ========== END SECONDARY CONTENTS ========== -->
  </div>
</template>
<script>
import { computed, reactive, ref, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const Landing = defineComponent({
  name: "Landing",
  setup() {
    const { state, dispatch } = useStore();
    const loading = computed(() => state.auth.loading);
    const userAuth = computed(() => state.auth.user?.data);
    const { push } = useRouter();

    const SignOut = async () => {
      try {
        const resp = await dispatch("logout");
        if (resp.status == 204) {
          push("/landing");
        }
      } catch (error) {
        console.log(error);
      }
    };

    return {
      loading,
      userAuth,
      SignOut,
    };
  },
});

export default Landing;
</script>