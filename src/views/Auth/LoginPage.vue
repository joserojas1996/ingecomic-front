<template>
  <form class="js-validate needs-validation" novalidate>
    <div class="text-center">
      <div class="mb-5">
        <h3 class="card-title">Ingresa a InGeComic</h3>
      </div>
    </div>

    <!-- Form -->
    <div class="mb-4">
      <label class="form-label" for="signinSrEmail">Correo</label>
      <input
        type="email"
        class="form-control form-control-lg"
        name="email"
        id="signinSrEmail"
        tabindex="1"
        placeholder="example@ingeconic.com"
        aria-label="email@address.com"
        required
      />
      <span class="invalid-feedback">El correo es requerido</span>
    </div>
    <!-- End Form -->

    <!-- Form -->
    <div class="mb-4">
      <label class="form-label" for="signupSrPassword" tabindex="0"
        >Contrasena</label
      >

      <div class="input-group-merge">
        <input
          type="password"
          class="js-toggle-password form-control form-control-lg"
          name="password"
          placeholder="********"
          required
          minlength="8"
        />
        <a class="input-group-append input-group-text">
          <i id="changePassIcon" class="bi-eye"></i>
        </a>

        <span class="invalid-feedback">Contrasena requerida.</span>
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
        Iniciar sesion
      </button>
      <p class="card-text text-muted">
        No tienes cuenta?
        <router-link class="link" to="/register">Registrate aqui</router-link>
      </p>
    </div>
  </form>
</template>