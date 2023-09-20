<template>
  <div class="content-space-t-3 content-space-t-lg-3">
    <!-- Hero -->
    <div class="bg-light">
      <div class="container py-4">
        <div class="w-lg-50 mx-lg-auto">
          <form>
            <!-- Input Card -->
            <div class="input-group-merge">
              <div class="input-group-prepend input-group-text">
                <i class="bi-search"></i>
              </div>
              <input
                type="text"
                class="form-control form-control-lg"
                id="searchAnswersForm"
                placeholder="Buscar evaluacion"
                aria-label="Search for answers"
              />
            </div>
            <!-- End Input Card -->
          </form>
        </div>
      </div>
    </div>
    <!-- End Hero -->

    <!-- List -->
    <div class="container content-space-1 content-space-b-2">
      <div class="row">
        <div id="stickyBlockStartPoint" class="col-md-4 mb-3 mb-md-0">
          <!-- Navbar -->
          <div class="navbar-expand-md">
            <!-- Navbar Toggle -->
            <div class="d-grid">
              <button
                type="button"
                class="navbar-toggler btn btn-white ms-0 mb-5"
                data-bs-toggle="collapse"
                data-bs-target="#navbarVerticalNavMenu"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="navbarVerticalNavMenu"
              >
                <span class="d-flex justify-content-between align-items-center">
                  <span class="h6 mb-0">Nav menu</span>

                  <span class="navbar-toggler-default">
                    <i class="bi-list"></i>
                  </span>

                  <span class="navbar-toggler-toggled">
                    <i class="bi-x"></i>
                  </span>
                </span>
              </button>
            </div>
            <!-- End Navbar Toggle -->

            <!-- Navbar Collapse -->
            <div id="navbarVerticalNavMenu" class="collapse navbar-collapse">
              <!-- Sticky Block -->
              <div
                class="js-sticky-block"
                data-hs-sticky-block-options='{
                   "parentSelector": "#stickyBlockStartPoint",
                   "breakpoint": "md",
                   "startPoint": "#stickyBlockStartPoint",
                   "endPoint": "#stickyBlockEndPoint",
                   "stickyOffsetTop": 20
                 }'
              >
                <!-- List -->
                <ul class="nav nav-link-gray nav-tabs nav-vertical">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Seleccion simple (5)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#"
                      >Preguntas y respuestas (7)</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Verdadero y falso (1)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Opciones multiples (1)</a>
                  </li>
                </ul>
                <!-- End List -->
              </div>
              <!-- End Sticky Block -->
            </div>
            <!-- End Navbar Collapse -->
          </div>
          <!-- End Navbar -->
        </div>
        <!-- End Col -->

        <div class="col-md-8">
          <!-- List -->
          <ul class="list-unstyled list-py-2">
            <li>
              <!-- Media -->
              <div class="d-sm-flex">
                <div class="flex-shrink-0 mb-3 mb-sm-0">
                  <span class="me-2">
                    <i class="bi-question-circle-fill text-primary fs-3"></i>
                  </span>
                </div>

                <div class="flex-grow-1 ms-sm-3">
                  <div class="mb-5">
                    <span class="text-cap">Evaluacion 1</span>
                    <h5>Evaluación Estratégica y Organizacional:</h5>
                    <p>
                      Análisis del encaje del proyecto con la estrategia global
                      de la organización, evaluando cómo el proyecto contribuirá
                      a los objetivos estratégicos de la organizacion.
                    </p>
                  </div>

                 <router-link class="link" to="evaluation"
                    >Comenzar <i class="bi-chevron-right small ms-1"></i
                  ></router-link>
                </div>
              </div>
              <!-- End Media -->
            </li>

            <li class="border-top my-5"></li>

            <li>
              <!-- Media -->
              <div class="d-sm-flex">
                <div class="flex-shrink-0 mb-3 mb-sm-0">
                  <span class="me-2">
                    <i class="bi-question-circle-fill text-primary fs-3"></i>
                  </span>
                </div>

                <div class="flex-grow-1 ms-sm-3">
                  <div class="mb-5">
                    <span class="text-cap">Evaluacion 2</span>
                    <h5>Análisis de Impacto y Beneficios</h5>
                    <p>
                      Evaluación de los impactos positivos y beneficios
                      potenciales derivados del proyecto tecnológico.
                    </p>
                  </div>

                 <router-link class="link" to="evaluation"
                    >Comenzar <i class="bi-chevron-right small ms-1"></i
                  ></router-link>
                </div>
              </div>
              <!-- End Media -->
            </li>

            <li class="border-top my-5"></li>

            <li>
              <!-- Media -->
              <div class="d-sm-flex">
                <div class="flex-shrink-0 mb-3 mb-sm-0">
                  <span class="me-2">
                    <i class="bi-question-circle-fill text-primary fs-3"></i>
                  </span>
                </div>

                <div class="flex-grow-1 ms-sm-3">
                  <div class="mb-5">
                    <span class="text-cap">Evaluacion 3</span>
                    <h5>Evaluación Económica y Financiera</h5>
                    <p>
                      Análisis de los costos y beneficios asociados con el
                      proyecto, incluyendo la estimación de costos de
                      desarrollo, costos operativos y el cálculo de los flujos
                      de efectivo esperados.
                    </p>
                  </div>

                  <router-link class="link" to="evaluation"
                    >Comenzar <i class="bi-chevron-right small ms-1"></i
                  ></router-link>
                </div>
              </div>
              <!-- End Media -->
            </li>

            <li class="border-top my-5"></li>
          </ul>
          <!-- End List -->

          <!-- End Sticky End Point -->
          <div id="stickyBlockEndPoint"></div>

          <!-- Pagination -->
          <nav
            class="d-flex justify-content-center"
            aria-label="Page navigation"
          >
            <ul
              class="pagination justify-content-center justify-content-sm-start mb-0"
            >
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
            <!-- End Col -->
          </nav>
          <!-- End Pagination -->
        </div>
        <!-- End Col -->
      </div>
      <!-- End Row -->
    </div>
    <!-- End List -->
  </div>
</template>