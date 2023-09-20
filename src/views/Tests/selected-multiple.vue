<template>
  <main id="content" role="main">
    <!-- Content -->
    <div class="container content-space-2 content-space-lg-3">
      <!-- Header -->
      <div class="text-center mb-7">
        <h1>Evaluacion de desarrollo</h1>
        <p>Tiempo restante: {{ tiempo }}</p>
      </div>
      <!-- End Header -->

      <div class="w-lg-75 mx-lg-auto">
        <!-- Card -->
        <div class="card card-shadow">
          <div class="card-body p-sm-7 p-md-10">
            <form>
              <!-- Form -->
              <div class="mb-5">
                <h4 class="card-title">Pregunta #1</h4>
                <p class="card-text">
                  ¿Qué es la tasa de interés y cómo influye en los análisis de
                  ingeniería económica?
                </p>
              </div>
              <div class="mb-3">
                <label for="careersApplyFormAdditionalInfo" class="form-label"
                  >Justifique su respuesta</label
                >
                <textarea
                  class="form-control"
                  name="careersApplyFormAdditionalInfoName"
                  id="careersApplyFormAdditionalInfo"
                  placeholder="Respuesta"
                  aria-label="Respuesta"
                  rows="5"
                ></textarea>
              </div>
              <!-- End Form -->

              <!-- Form -->
              <div class="mb-5">
                <h4 class="card-title">Pregunta #2</h4>
                <p class="card-text">
                  ¿Cuál es la diferencia entre el valor presente y el valor
                  futuro en el contexto de la ingeniería económica?
                </p>
              </div>
              <div class="mb-3">
                <label for="careersApplyFormAdditionalInfo" class="form-label"
                  >Justifique su respuesta</label
                >
                <textarea
                  class="form-control"
                  name="careersApplyFormAdditionalInfoName"
                  id="careersApplyFormAdditionalInfo"
                  placeholder="Respuesta"
                  aria-label="Respuesta"
                  rows="5"
                ></textarea>
              </div>
              <!-- End Form -->

              <!-- Form -->
              <div class="mb-5">
                <h4 class="card-title">Pregunta #3</h4>
                <p class="card-text">
                  ¿Cuáles son los métodos más comunes utilizados para evaluar la
                  rentabilidad de un proyecto en ingeniería económica?
                </p>
              </div>
              <div class="mb-3">
                <label for="careersApplyFormAdditionalInfo" class="form-label"
                  >Justifique su respuesta</label
                >
                <textarea
                  class="form-control"
                  name="careersApplyFormAdditionalInfoName"
                  id="careersApplyFormAdditionalInfo"
                  placeholder="Respuesta"
                  aria-label="Respuesta"
                  rows="5"
                ></textarea>
              </div>
              <!-- End Form -->

              <!-- Form -->
              <div class="mb-5">
                <h4 class="card-title">Pregunta #4</h4>
                <p class="card-text">
                  ¿Cuál es la importancia del análisis de sensibilidad en la
                  toma de decisiones en ingeniería económica?
                </p>
              </div>
              <div class="mb-3">
                <label for="careersApplyFormAdditionalInfo" class="form-label"
                  >Justifique su respuesta</label
                >
                <textarea
                  class="form-control"
                  name="careersApplyFormAdditionalInfoName"
                  id="careersApplyFormAdditionalInfo"
                  placeholder="Respuesta"
                  aria-label="Respuesta"
                  rows="5"
                ></textarea>
              </div>
              <!-- End Form -->

              <!-- Form -->
              <div class="mb-5">
                <h4 class="card-title">Pregunta #5</h4>
                <p class="card-text">
                  ¿Qué es el costo de capital y cómo se determina en los
                  análisis de ingeniería económica?
                </p>
              </div>
              <div class="mb-3">
                <label for="careersApplyFormAdditionalInfo" class="form-label"
                  >Justifique su respuesta</label
                >
                <textarea
                  class="form-control"
                  name="careersApplyFormAdditionalInfoName"
                  id="careersApplyFormAdditionalInfo"
                  placeholder="Respuesta"
                  aria-label="Respuesta"
                  rows="5"
                ></textarea>
              </div>
              <!-- End Form -->
              <hr />
              <div class="d-grid mt-3">
                <button type="submit" class="btn btn-primary btn-lg">
                {{ tiempo }} - Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- End Card -->
      </div>
    </div>
    <!-- End Content -->
  </main>
</template>
<script>
import { computed, reactive, ref, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";

const Evaluation = defineComponent({
  name: "Evaluation",
  setup() {
    const tiempo = ref("");

    // Define el tiempo inicial en minutos (30 minutos en este caso)
    const tiempoInicial = 30;

    // Calcula la fecha objetivo restando el tiempo inicial en minutos al tiempo actual
    const fechaObjetivo = new Date();
    fechaObjetivo.setMinutes(fechaObjetivo.getMinutes() + tiempoInicial);

    onMounted(() => {
      // Actualiza la cuenta regresiva cada segundo
      setInterval(() => {
        const ahora = new Date().getTime();
        const tiempoRestante = fechaObjetivo - ahora;

        // Calcula los minutos y segundos restantes
        const minutos = Math.floor(
          (tiempoRestante % (1000 * 60 * 60)) / (1000 * 60)
        );
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        // Actualiza la variable "tiempo" con el tiempo restante
        tiempo.value = `${minutos}m ${segundos}s`;

        // Si el tiempo restante es menor o igual a cero, muestra un mensaje de finalización
        if (tiempoRestante <= 0) {
          tiempo.value = "¡Tiempo terminado!";
        }
      }, 1000);
    });

    return { tiempo };
  },
});

export default Evaluation;
</script>