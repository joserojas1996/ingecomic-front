<template>
  <div>
    <v-overlay v-if="loading" />
    <form @submit.prevent="handleSubmit" :model="formState" ref="formRef">
      <!-- Form -->
      <div class="mb-4">
        <label class="form-label" for="name">Nombre de la seccion</label>
        <input
          type="text"
          class="form-control form-control-lg"
          :class="v$.name.$error ? 'is-invalid' : ''"
          name="name"
          id="name"
          placeholder="Ingrese un nombre"
          v-model="formState.name"
          @blur="v$.name.$touch"
        />
        <small
          class="invalid-feedback"
          v-for="error of v$.name.$errors"
          :key="error.$uid"
        >
          <small v-if="error.$validator == 'required'" class="error">
            El nombre es requerido
          </small>
          <small v-if="error.$validator == 'minLength'" class="error">
            El nombre debe tener al menos 3 caracteres
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
import { required, minLength } from "@vuelidate/validators";
import { core } from "@/Services/pluginInit";

const Sections = defineComponent({
  name: "Sections",
  setup(props, { emit }) {
    const { state, dispatch, getters } = useStore();
    const loading = ref(false);
    const typeInput = ref(true);
    const router = useRouter();

    const formState = reactive({
      name: "",
    });

    const rules = {
      name: { required, minLength: minLength(3) },
    };
    const v$ = useVuelidate(rules, formState);

    const resetForm = () => {
      formState.name = "";
    };

    const handleSubmit = async () => {
      if (v$.value.$invalid) {
        v$.value.$touch();
        return;
      }
      emit("loader", true);
      try {
        const response = await dispatch("sections/storeSections", formState);
        if (response?.status == 201) {
          core.showSnackbar("success", "Registro agregado exitosamente");
        }
      } catch (error) {
        console.log(error);
      } finally {
        emit("loader", false);
      }
    };

    return {
      loading,
      typeInput,
      handleSubmit,
      formState,
      v$,
      resetForm,
    };
  },
});

export default Sections;
</script>