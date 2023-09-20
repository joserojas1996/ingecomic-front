<template>
  <div>
    <v-overlay v-if="loading" />
    <!-- Content -->
    <div
      class="container content-space-t-4 content-space-b-lg-3"
      style="max-width: 1300px !important"
    >
      <div class="row mb-7">
        <div class="col-md mb-3 mb-md-0">
          <div class="mb-3">
            <a class="link link-secondary" href="#" @click="$router.back()"
              ><i class="bi-arrow-left small me-1"></i> Atras</a
            >
          </div>

          <h1 class="mb-0">Administradores</h1>
        </div>
        <!-- End Col -->

        <div class="col-md-auto align-self-md-end">
          <button
            class="btn btn-primary"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            @click="$refs.createOrUpdate.resetForm()"
          >
            <i class="bi bi-plus-circle me-1"></i> Nuevo Admin
          </button>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Row -->

      <div class="row">
        <div class="col-lg-3 order-lg-2 mb-5 mb-lg-0">
          <div id="stickyBlockStartPoint">
            <!-- Card -->
            <div
              class="js-sticky-block card card-borderless bg-soft-dark"
              data-hs-sticky-block-options='{
                 "parentSelector": "#stickyBlockStartPoint",
                 "targetSelector": "#header",
                 "breakpoint": "lg",
                 "startPoint": "#stickyBlockStartPoint",
                 "endPoint": "#stickyBlockEndPoint",
                 "stickyOffsetTop": 20
               }'
            >
              <div class="card-body">
                <div class="row">
                  <h6 class="text-muted">Filtros</h6>
                  <div class="col-md-12 mb-3">
                    <input
                      type="search"
                      class="form-control form-control-sm"
                      name="name"
                      id="name"
                      placeholder="Buscar..."
                    />
                  </div>
                  <div class="col-md-12 mb-3">
                    <select
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>Roles</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                   <div class="col-md-12">
                    <select
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>Per Page</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Card -->
          </div>
        </div>
        <!-- End Col -->

        <div class="col-lg-9">
          <!-- List Directory -->
          <div id="openingsSection" class="container content-space-b-1">
            <div class="d-grid gap-3">
              <!-- Card -->
              <a class="card" href="#" style="cursor: default">
                <div class="p-2 ps-5">
                  <div class="row">
                    <!-- End Col -->
                    <div class="col-md-2 mb-2 mb-md-0">
                      <span class="h6">CEDULA</span>
                    </div>
                    <!-- End Col -->
                    <div class="col-md-4 mb-2 mb-md-0">
                      <span class="h6">NOMBRES</span>
                    </div>

                    <div class="col-md-2 mb-2 mb-md-0">
                      <span class="h6">TIPO</span>
                    </div>

                    <div class="col-md-2 mb-2 mb-md-0">
                      <span class="h6">ESTADO</span>
                    </div>

                    <div class="col-md-2 mb-2 mb-md-0">
                      <span class="h6">ACCIONES</span>
                    </div>
                  </div>
                </div>
              </a>
              <a
                class="card"
                href="#"
                style="cursor: default"
                v-if="sections?.length <= 0"
              >
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 mt-3 mb-md-0">
                      <h6 class="text-center text-primary">Sin registros</h6>
                    </div>
                  </div>
                  <!-- End Row -->
                </div>
              </a>

              <a
                class="card"
                href="#"
                style="cursor: default"
                v-else
                v-for="item in sections"
                :key="item.id"
              >
                <div class="p-2 ps-5">
                  <div class="row">
                    <div class="col-md-2 mb-2 mb-md-0">
                      <span class="text-body">{{item.identity}}</span>
                    </div>
                    <!-- End Col -->
                    <div class="col-md-4 mb-2 mb-md-0">
                      <span class="text-body"
                        >{{item.firstname}} {{item.lastname}}</span
                      >
                    </div>
                    <!-- End Col -->

                    <div class="col-md-2 mb-2 mb-md-0">
                      <span class="badge text-bg-info">{{item.type}}</span>
                    </div>

                     <div class="col-md-2 mb-2 mb-md-0">
                      <span class="badge" :class="item.user ? 'text-bg-primary' : 'text-bg-danger'">{{item.user ? 'REGISTRADO' : 'SIN REGISTRO'}}</span>
                    </div>  

                    <div class="col-md-2 mb-2 mb-md-0">
                      <button
                        style="
                          --bs-btn-padding-y: 0.25rem;
                          --bs-btn-padding-x: 0.5rem;
                          --bs-btn-font-size: 0.75rem;
                        "
                        class="btn btn-warning btn-sm text-white"
                      >
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button
                        style="
                          --bs-btn-padding-y: 0.25rem;
                          --bs-btn-padding-x: 0.5rem;
                          --bs-btn-font-size: 0.75rem;
                        "
                        class="btn btn-danger btn-sm ms-1"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <i class="bi bi-trash3"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
              <!-- End Card -->
            </div>

            <div class="w-lg-65 text-center mx-lg-auto mt-7">
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
          </div>
          <!-- End List Directory -->
        </div>
        <!-- End Col -->
      </div>
      <!-- End Row -->
    </div>
    <!-- End Content -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <h2 class="text-center">Registro de nuevo Administrador</h2>
        <FormUsers title="ADMIN" ref="createOrUpdate" @loader="isLoaderForm" />
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-3" id="staticBackdropLabel">
              Eliminar seccion
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Si elimina esta seccion, esta se dejara de mostrar y se eliminaran
            todos sus datos relacionados. Desea continuar?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              NO
            </button>
            <button
              type="button"
              class="btn btn-primary btn-sm"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="deleteItem()"
            >
              SI
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive, ref, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import FormUsers from "./Components/FormUsersComponent.vue";
import { core } from "@/Services/pluginInit";

const Sections = defineComponent({
  name: "Sections",
  components: {
    FormUsers,
  },
  setup() {
    const { state, dispatch, getters } = useStore();
    const loading = ref(false);
    const currentPage = ref(1);
    const debounce = ref(null);
    const debounceTime = ref(300);
    const deleteId = ref(null);

    const store = reactive({
      filters: {
        page: 1,
        per_page: 10,
        search: "",
        type: 'ADMIN'
      },
    });

    const getSections = (page = 1) => {
      clearTimeout(debounce.value);
      return new Promise((resolve) => {
        debounce.value = setTimeout(async () => {
          loading.value = true;
          try {
            await dispatch("users/list", store.filters);
          } catch (error) {
            console.log(error);
          } finally {
            resolve();
            loading.value = false;
          }
        }, debounceTime.value);
      });
    };

    const isLoaderForm = async (data) => {
      loading.value = data;
    };

    onMounted( async () => {
      getSections(currentPage.value);
      await dispatch("sections/listSections");
    });

    const setIdDelete = async (id) => {
      deleteId.value = id;
    };

    const sections = computed(() => {
      return getters["users/users"].data;
    });

    const deleteItem = async () => {
      loading.value = true;
      try {
        const response = await dispatch(
          "users/delete",
          deleteId.value
        );
        console.log(response);
        if (response?.status == 200) {
          core.showSnackbar("success", "Registro eliminado exitosamente");
        }
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };

    return {
      loading,
      sections,
      isLoaderForm,
      deleteItem,
      setIdDelete,
    };
  },
});

export default Sections;
</script>