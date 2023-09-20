<template>
  <div>
    <v-overlay v-if="loading" />
    <form @submit.prevent="handleSubmit" :model="formState" ref="formRef">
      <!-- Form -->
      <div class="mb-2">
        <label class="form-label" for="name">Cedula de identidad</label>
        <input
          type="text"
          class="form-control form-control-lg"
          :class="v$.identity.$error ? 'is-invalid' : ''"
          name="name"
          id="name"
          placeholder="Ingrese una cedula"
          v-model="formState.identity"
          @blur="v$.identity.$touch"
        />
        <small
          class="invalid-feedback"
          v-for="error of v$.identity.$errors"
          :key="error.$uid"
        >
          <small v-if="error.$validator == 'required'" class="error">
            La cedula es requerida
          </small>
        </small>
      </div>

      <!-- ------ -->
      <div class="mb-2">
        <label class="form-label" for="name">Nombres</label>
        <input
          type="text"
          class="form-control form-control-lg"
          :class="v$.firstname.$error ? 'is-invalid' : ''"
          name="name"
          id="name"
          placeholder="Ingrese un nombre"
          v-model="formState.firstname"
          @blur="v$.firstname.$touch"
        />
        <small
          class="invalid-feedback"
          v-for="error of v$.firstname.$errors"
          :key="error.$uid"
        >
          <small v-if="error.$validator == 'required'" class="error">
            El nombre es requerido
          </small>
        </small>
      </div>
      <div class="mb-2">
        <label class="form-label" for="name">Apellidos</label>
        <input
          type="text"
          class="form-control form-control-lg"
          :class="v$.lastname.$error ? 'is-invalid' : ''"
          name="name"
          id="name"
          placeholder="Ingrese un nombre"
          v-model="formState.lastname"
          @blur="v$.lastname.$touch"
        />
        <small
          class="invalid-feedback"
          v-for="error of v$.lastname.$errors"
          :key="error.$uid"
        >
          <small v-if="error.$validator == 'required'" class="error">
            El nombre es requerido
          </small>
        </small>
      </div>
      <div class="mb-2" v-if="props.title !== 'ADMIN'">
        <label class="form-label" for="name">Seccion</label>
        <select
          class="form-select form-select-lg"
          :class="v$.section.$error ? 'is-invalid' : ''"
          name="name"
          id="name"
          v-model="formState.section"
          @blur="v$.section.$touch"
          aria-label=".form-select-lg example"
        >
          <option selected>Seleccionar</option>
          <option v-for="item in sections.data" :key="item.id" :value="item.id">
            {{ item.correlative_number }} {{ item.name }}
          </option>
        </select>
        <small
          class="invalid-feedback"
          v-for="error of v$.section.$errors"
          :key="error.$uid"
        >
          <small v-if="error.$validator == 'required'" class="error">
            La seccion es requerida
          </small>
        </small>
      </div>
      <!-- End Form -->

      <div class="row">
        <div class="col-md-6">
          <button
            type="reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            class="btn btn-white btn-sm w-100"
          >
            Cancelar
          </button>
        </div>
        <div class="col-md-6">
          <button
            :disabled="v$.$invalid"
            type="submit"
            class="btn btn-primary btn-sm w-100"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            {{ loading ? "Cargando..." : "Guardar" }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { computed, reactive, ref, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, alphaNum} from "@vuelidate/validators";
import { core } from "@/Services/pluginInit";

const Sections = defineComponent({
  name: "usuarios",
  props: {
    title: String,
  },

  setup(props, { emit }) {
    const { state, dispatch, getters } = useStore();
    const loading = ref(false);
    const typeInput = ref(true);
    const router = useRouter();

    const formState = reactive({
      identity: "",
      firstname: "",
      lastname: "",
      section: "",
      type: props.title
    });

    const rules = {
      identity: { required },
      firstname: { required },
      lastname: { required },
      section: props.title !== 'ADMIN' ? { required, alphaNum } : { alphaNum },
    };
    const v$ = useVuelidate(rules, formState);

    const resetForm = () => {
      formState.identity = "";
      formState.firstname = "";
      formState.lastname = "";
    };

    const handleSubmit = async () => {
      if (v$.value.$invalid) {
        v$.value.$touch();
        return;
      }
      emit("loader", true);
      try {
        const response = await dispatch("users/store", formState);
        if (response?.status == 201) {
          core.showSnackbar("success", "Registro agregado exitosamente");
        }
      } catch (error) {
        console.log(error);
      } finally {
        emit("loader", false);
      }
    };

    const sections = computed(() => {
      return getters["sections/sections"]
    });

    return {
      loading,
      typeInput,
      handleSubmit,
      formState,
      v$,
      resetForm,
      props,
      sections,
    };
  },
});

export default Sections;
</script>