<template>
  <div>
    <v-overlay v-if="loading" />
    <!-- Hero -->
    <div class="bg-light">
      <div
        class="container content-space-t-3 content-space-t-lg-4 content-space-b-1"
      >
        <div class="w-lg-65">
          <h1 class="display-5 mb-5">¿Cómo podemos ayudar?</h1>

          <form>
            <!-- Input Card -->
            <div class="input-card mb-sm-4">
              <div class="input-card-form">
                <label
                  for="searchAnswersForm"
                  class="form-label visually-hidden"
                  >Buscar configuracion</label
                >
                <input
                  type="text"
                  class="form-control form-control-lg"
                  id="searchAnswersForm"
                  placeholder="Buscar..."
                  aria-label="Buscar..."
                  v-model="formState.search"
                  @input="filterModules()"
                />
              </div>
              <button
                type="button"
                class="btn btn-primary btn-icon"
                @click="filterModules()"
              >
                <i class="bi-search"></i>
              </button>
            </div>
            <!-- End Input Card -->
          </form>
          <!-- Links -->
          <div class="d-none d-sm-flex align-items-center">
            <span class="fw-bold text-dark"
              >Ingresa el nombre de la configuracion a la que deseas
              acceder</span
            >
          </div>
          <!-- End Links -->
        </div>
      </div>
    </div>
    <!-- End Hero -->

    <!-- List -->
    <div class="container content-space-1 content-space-t-lg-3">
      <div class="row">
        <h3
          v-if="formState.modulesAdmin.length <= 0"
          class="text-center text-primary"
        >
          No hemos encontramos ningún registros con su criterio de búsqueda
        </h3>
        <div
          v-else
          class="col-sm-6 col-lg-4 mb-7 mb-lg-10"
          v-for="item in formState.modulesAdmin"
          :key="item.id"
        >
          <div class="mb-3">
            <i :class="item.icon" class="fs-1"></i>
          </div>

          <h4 class="mb-4">{{ item.title }}</h4>

          <!-- List -->
          <p>{{ item.description }}</p>
          <!-- End List -->

          <router-link class="link" :to="item.link">
            Ir a {{ item.title }}
          </router-link>
        </div>
      </div>
      <!-- End Row -->
    </div>
    <!-- End Card Grid -->
  </div>
</template>
<script>
import { computed, reactive, ref, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { MODULES_ADMIN } from "../Constant/modulesAdmin";

const SignIn = defineComponent({
  name: "SignIn",
  setup() {
    const { state, dispatch } = useStore();
    const router = useRouter();
    const debounce = ref(null);
    const debounceTime = ref(300);
    const loading = ref(false);

    const formState = reactive({
      search: "",
      modulesAdmin: MODULES_ADMIN,
    });

    const filterModules = () => {
      clearTimeout(debounce.value);
      return new Promise((resolve) => {
        debounce.value = setTimeout(async () => {
          loading.value = true;
          try {
            console.log(formState.search);
            if (formState.search !== "") {
              formState.modulesAdmin = MODULES_ADMIN.filter((item) => {
                return (
                  item.title.includes(formState.search) ||
                  item.description.includes(formState.search)
                );
              });
            } else {
              formState.modulesAdmin = MODULES_ADMIN;
            }
          } catch (error) {
            console.log(error);
          } finally {
            resolve();
            loading.value = false;
          }
        }, debounceTime.value);
      });
    };

    return {
      filterModules,
      formState,
      loading,
    };
  },
});

export default SignIn;
</script>