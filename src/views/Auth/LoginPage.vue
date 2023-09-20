<template>
  <div>
    <v-overlay v-if="loading" />
    <form @submit.prevent="handleSubmit" :model="formState">
      <div class="text-center">
        <div class="mb-5">
          <h3 class="card-title">Ingresa a InGeComic</h3>
        </div>
      </div>

      <!-- Form -->
      <div class="mb-4">
        <label class="form-label" for="email">Correo</label>
        <input
          type="text"
          class="form-control form-control-lg"
          :class="v$.email.$error ? 'is-invalid' : ''"
          name="email"
          id="email"
          tabindex="1"
          placeholder="example@ingeconic.com"
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
            El correo debe tener un formato valido
          </small>
        </small>
      </div>
      <!-- End Form -->

      <!-- Form -->
      <div class="mb-4">
        <label class="form-label" for="signupSrPassword" tabindex="0"
          >Contrasena</label
        >
        <div class="input-group-merge">
          <input
            :type="typeInput ? 'password' : 'text'"
            class="js-toggle-password form-control form-control-lg"
            :class="v$.password.$error ? 'is-invalid' : ''"
            name="password"
            :placeholder="typeInput ? '********' : 'Ingrese una contrasena'"
            minlength="8"
            v-model="formState.password"
            @blur="v$.password.$touch"
          />
          <a
            class="input-group-append input-group-text"
            :style="v$.password.$error ? 'top:35% !important' : '50%'"
            @click="typeInput = !typeInput"
          >
            <i id="changePassIcon" class="bi-eye"></i>
            <br />
          </a>
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

      <div class="d-flex justify-content-end mb-4">
        <a class="form-label-link" href="page-reset-password.html"
          >Olvidaste tu contrasena?</a
        >
      </div>

      <div class="d-grid gap-4">
        <button type="submit" class="btn btn-primary btn-lg">
          {{ loading ? "Cargando..." : "Iniciar Sesión" }}
        </button>
        <p class="card-text text-muted">
          No tienes cuenta?
          <router-link class="link" to="/register">Registrate aqui</router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import { computed, reactive, ref, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";

const SignIn = defineComponent({
  name: "SignIn",
  setup() {
    const { state, dispatch } = useStore();
    const loading = computed(() => state.auth.loading);
    const typeInput = ref(true);
    const router = useRouter();

    const formState = reactive({
      email: "",
      password: "",
    });

    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(8) },
    };

    const v$ = useVuelidate(rules, formState);

    const handleSubmit = async () => {
      if (v$.value.$invalid) {
        v$.value.$touch();
        return;
      }
      try {
        const response = await dispatch("login", formState);
        if (response?.status == 200) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    };

    return {
      loading,
      typeInput,
      handleSubmit,
      formState,
      v$,
    };
  },
});

export default SignIn;
</script>