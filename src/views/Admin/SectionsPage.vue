<template>
  <div>
    <v-overlay v-if="loading" />
    <div class="overflow-hidden">
      <div
        class="container content-space-t-3 content-space-t-lg-4 content-space-b-1 content-space-b-lg-2"
      >
        <div class="w-lg-50 text-center mx-lg-auto">
          <!-- Heading -->
          <form>
            <div class="position-relative">
              <!-- Input Card -->
              <div class="mb-5">
                <h1 class="display-4">Secciones</h1>
                <p>
                  Modulo de registro y mantenimiento de secciones o grupos de
                  estudios
                </p>
              </div>
              <!-- End Input Card -->

              <!-- SVG Shape -->
              <figure
                class="position-absolute top-0 end-0 d-none d-sm-block zi-n1 mt-n7 me-n10"
                style="width: 4rem"
              >
                <img
                  class="img-fluid"
                  src="assets/svg/components/pointer-up.svg"
                  alt="Image Description"
                />
              </figure>
              <!-- End SVG Shape -->

              <!-- SVG Shape -->
              <figure
                class="position-absolute bottom-0 start-0 zi-n1 mb-n7"
                style="width: 12rem; margin-left: -10rem"
              >
                <img
                  class="img-fluid"
                  src="assets/svg/components/curved-shape.svg"
                  alt="Image Description"
                />
              </figure>
              <!-- End SVG Shape -->
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- List Directory -->
    <div
      id="openingsSection"
      class="container content-space-t-2 content-space-b-1"
    >
      <!-- Form -->
      <form>
        <div class="row gx-2 gx-md-3 mb-7">
          <div class="col-md-4 mb-2 mb-md-0">
            <label class="form-label visually-hidden" for="searchJobCareers"
              >Buscar seccion</label
            >

            <!-- Form -->
            <div class="input-group-merge">
              <span class="input-group-prepend input-group-text">
                <i class="bi-search"></i>
              </span>
              <input
                type="text"
                class="form-control form-control-lg"
                id="searchJobCareers"
                placeholder="Buscar"
                aria-label="Search job"
              />
            </div>
            <!-- End Form -->
          </div>
          <!-- End Col -->

          <div class="col-sm-6 col-md-4 mb-2 mb-sm-0">
            <label class="form-label visually-hidden" for="locationsJobCareers"
              >Filtrar por encargado</label
            >

            <!-- Select -->
            <select
              class="form-select form-select-lg"
              id="locationsJobCareers"
              aria-label="Select location"
            >
              <option selected>Seleccionar</option>
              <option value="Athens">Athens</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Berlin">Berlin</option>
              <option value="Brussels">Brussels</option>
              <option value="Chicago">Chicago</option>
              <option value="Dubai">Dubai</option>
              <option value="Ebene">Ebene</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="London">London</option>
              <option value="Melbourne">Melbourne</option>
              <option value="New York City">New York City</option>
              <option value="Paris">Paris</option>
              <option value="Perth">Perth</option>
              <option value="Porto">Porto</option>
              <option value="Riyadh">Riyadh</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Shanghai">Shanghai</option>
              <option value="Singapore">Singapore</option>
              <option value="Tallinn">Tallinn</option>
              <option value="Vienna</p>">Vienna</option>
            </select>
            <!-- End Select -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Row -->
      </form>
      <!-- End Form -->

      <div class="row align-items-sm-center">
        <div class="col-sm mb-3">
          <h5 class="mb-0">Secciones</h5>
        </div>
        <!-- End Col -->

        <div class="col-sm-auto mb-3">
          <button
            type="button"
            class="btn btn-white"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            @click="$refs.createOrUpdate.resetForm()"
          >
            <i class="bi bi-plus-circle me-1"></i> Nueva seccion
          </button>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Row -->

      <div class="d-grid gap-3">
        <!-- Card -->
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
          <div class="card-body">
            <div class="row">
              <div class="col-md-3 mb-2 mb-md-0">
                <span class="h6">{{ item.name }}</span>
              </div>
              <!-- End Col -->

              <div class="col-sm-5 col-md-4 mb-2 mb-sm-0">
                <span class="text-body">Responsable: Sin responsable</span>
              </div>
              <!-- End Col -->

              <div class="col-sm-5 col-md-3 mb-2 mb-sm-0">
                <span class="text-body">Total Estudiantes: 0</span>
              </div>

              <div class="col-sm-2 text-sm-end">
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
                  @click="setIdDelete(item.id)"
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </div>
            <!-- End Row -->
          </div>
        </a>
        <!-- End Card -->
      </div>

      <div class="w-lg-65 text-center mx-lg-auto mt-7">
        <!-- Pagination -->
        <nav class="d-flex justify-content-center" aria-label="Page navigation">
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
        <h2 class="text-center">Registro de nueva seccion</h2>
        <FormSection ref="createOrUpdate" @loader="isLoaderForm" />
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
import FormSection from "./Components/FormSectionComponent.vue";
import { core } from "@/Services/pluginInit";

const Sections = defineComponent({
  name: "Sections",
  components: {
    FormSection,
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
      },
    });

    const getSections = (page = 1) => {
      clearTimeout(debounce.value);
      return new Promise((resolve) => {
        debounce.value = setTimeout(async () => {
          loading.value = true;
          try {
            await dispatch("sections/listSections", store.filters);
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

    onMounted(() => getSections(currentPage.value));

    const setIdDelete = async (id) => {
      deleteId.value = id;
    };

    const sections = computed(() => {
      return getters["sections/sections"].data;
    });

    const deleteItem = async () => {
      loading.value = true;
      try {
        const response = await dispatch(
          "sections/deleteSections",
          deleteId.value
        );
        console.log(response)
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