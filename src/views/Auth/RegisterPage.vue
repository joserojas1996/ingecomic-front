<template>
  <div>
    <v-overlay v-if="loading" />
    <form @submit.prevent="handleSubmit" :model="formState">
      <div class="text-center">
        <div class="mb-5">
          <h3 class="card-title">Registrate en InGeComic</h3>
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label" for="signupSrEmail"
          >Cedula de identidad</label
        >
        <input
          type="text"
          class="form-control form-control-lg"
          :class="v$.identity.$error ? 'is-invalid' : ''"
          name="email"
          id="signupSrEmail"
          placeholder="V-12345678"
          aria-label="Markwilliams@site.com"
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

          <small v-if="error.$validator == 'minLength'" class="error">
            La cedula debe tener al menos 6 caracteres
          </small>
        </small>
      </div>

      <label class="form-label" for="fullNameSrEmail">Nombre completo</label>
      <!-- Form -->
      <div class="row">
        <div class="col-sm-6">
          <!-- Form -->
          <div class="mb-4">
            <input
              type="text"
              class="form-control form-control-lg"
              name="fullName"
              id="fullNameSrEmail"
              placeholder="Nombre"
              aria-label="Mark"
              :class="v$.firstname.$error ? 'is-invalid' : ''"
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

              <small v-if="error.$validator == 'minLength'" class="error">
                El nombre debe tener al menos 3 caracteres
              </small>
            </small>
          </div>
          <!-- End Form -->
        </div>

        <div class="col-sm-6">
          <!-- Form -->
          <div class="mb-4">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Apellidos"
              aria-label="Williams"
              :class="v$.lastname.$error ? 'is-invalid' : ''"
              v-model="formState.lastname"
              @blur="v$.lastname.$touch"
            />
            <small
              class="invalid-feedback"
              v-for="error of v$.lastname.$errors"
              :key="error.$uid"
            >
              <small v-if="error.$validator == 'required'" class="error">
                El apellido es requerido
              </small>

              <small v-if="error.$validator == 'minLength'" class="error">
                El apellido debe tener al menos 3 caracteres
              </small>
            </small>
          </div>
          <!-- End Form -->
        </div>
      </div>
      <!-- End Form -->

      <!-- Form -->
      <div class="mb-4">
        <label class="form-label" for="signupSrEmail">Correo</label>
        <input
          type="email"
          class="form-control form-control-lg"
          name="email"
          id="signupSrEmail"
          placeholder="example@ingecomic.com"
          aria-label="Markwilliams@site.com"
          :class="v$.email.$error ? 'is-invalid' : ''"
          v-model="formState.email"
          @blur="v$.email.$touch"
        />
        <small
          class="invalid-feedback"
          v-for="error of v$.email.$errors"
          :key="error.$uid"
        >
          <small v-if="error.$validator == 'required'" class="error">
            El correo es requerido
          </small>

          <small v-if="error.$validator == 'email'" class="error">
            Debe ser un correo valido
          </small>

          <small v-if="error.$validator == 'minLength'" class="error">
            El correo debe tener al menos 3 caracteres
          </small>
        </small>
      </div>
      <!-- End Form -->

      <!-- Form -->
      <div class="mb-4">
        <label class="form-label" for="signupSrPassword">Contrasena</label>

        <div class="input-group-merge">
          <input
            type="password"
            class="js-toggle-password form-control form-control-lg"
            name="password"
            id="signupSrPassword"
            placeholder="********"
            aria-label="8+ characters required"
            :class="v$.password.$error ? 'is-invalid' : ''"
            v-model="formState.password"
            @blur="v$.password.$touch"
          />

          <small
            class="invalid-feedback"
            v-for="error of v$.password.$errors"
            :key="error.$uid"
          >
            <small v-if="error.$validator == 'required'" class="error">
              La contrasena es requerida
            </small>

            <small v-if="error.$validator == 'minLength'" class="error">
              La contrasena debe tener al menos 8 caracteres
            </small>
          </small>
        </div>
      </div>
      <!-- End Form -->

      <!-- Form -->
      <div class="mb-4">
        <label class="form-label" for="signupSrConfirmPassword"
          >Confirmar contrasena</label
        >

        <div class="input-group-merge">
          <input
            type="password"
            class="js-toggle-password form-control form-control-lg"
            name="confirmPassword"
            id="signupSrConfirmPassword"
            placeholder="********"
            aria-label="8+ characters required"
            :class="v$.password_confirmation.$error ? 'is-invalid' : ''"
            v-model="formState.password_confirmation"
            @blur="v$.password_confirmation.$touch"
          />
          <small
            class="invalid-feedback"
            v-for="error of v$.password_confirmation.$errors"
            :key="error.$uid"
          >
            <small v-if="error.$validator == 'required'" class="error">
              La confirmacion es requerida
            </small>

            <small v-if="error.$validator == 'minLength'" class="error">
              La confirmacion debe tener al menos 8 caracteres
            </small>

            <small v-if="error.$validator == 'confirmPassword'" class="error">
              La contrasena ingresada no coincide
            </small>
          </small>
        </div>
      </div>
      <!-- End Form -->

      <div class="d-grid gap-4">
        <button
          type="submit"
          class="btn btn-primary btn-lg"
          :disabled="v$.$invalid"
        >
          {{ loading ? "Cargando..." : "Registrarse" }}
        </button>
        <p class="card-text text-muted">
          Ya tienes cuenta?
          <router-link class="link" to="/login">Inicia sesion</router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import { computed, reactive, ref, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
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
      email: "",
      password: "",
      password_confirmation: "",
    });

    const rules = computed(() => {
      return {
        identity: { required, minLength: minLength(6) },
        firstname: { required, minLength: minLength(3) },
        lastname: { required, minLength: minLength(3) },
        email: { required, email, minLength: minLength(3) },
        password: { required, minLength: minLength(8) },
        password_confirmation: {
          required,
          minLength: minLength(8),
          confirmPassword: sameAs(formState.password),
        },
      };
    });

    const v$ = useVuelidate(rules, formState);

    const handleSubmit = async () => {
      if (v$.value.$invalid) {
        v$.value.$touch();
        return;
      }
      loading.value = true;
      try {
        const response = await dispatch("register", formState);
        if (response?.status == 201) {
          router.push("/login");
          core.showSnackbar("success", "Registro agregado exitosamente");
        }
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };

    const sections = computed(() => {
      return getters["sections/sections"];
    });

    return {
      loading,
      typeInput,
      handleSubmit,
      formState,
      v$,
      props,
      sections,
    };
  },
});

export default Sections;
</script>