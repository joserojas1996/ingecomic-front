<template>
  <form class="js-validate needs-validation" novalidate>
    <div class="text-center">
      <div class="mb-5">
        <h3 class="card-title">Registrate en InGeComic</h3>
      </div>
    </div>

     <div class="mb-4">
      <label class="form-label" for="signupSrEmail">Cedula de identidad</label>
      <input
        type="email"
        class="form-control form-control-lg"
        name="email"
        id="signupSrEmail"
        placeholder="V-12345678"
        aria-label="Markwilliams@site.com"
        required
      />
      <span class="invalid-feedback">Correo es requerido.</span>
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
            required
          />
          <span class="invalid-feedback">Nombre es requerido.</span>
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
            required
          />
          <span class="invalid-feedback">Apellidos requeridos</span>
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
        required
      />
      <span class="invalid-feedback">Correo es requerido.</span>
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
          required
          minlength="8"
        
        />
        <a
          class="js-toggle-password-target-1 input-group-append input-group-text"
          href="javascript:;"
        >
          <i class="js-toggle-password-show-icon-1 bi-eye"></i>
        </a>

        <span class="invalid-feedback"
          >Your password is invalid. Please try again.</span
        >
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
          required
          minlength="8"
        />
        <a
          class="js-toggle-password-target-2 input-group-append input-group-text"
          href="javascript:;"
        >
          <i class="js-toggle-password-show-icon-2 bi-eye"></i>
        </a>

        <span class="invalid-feedback"
          >Password does not match the confirm password.</span
        >
      </div>
    </div>
    <!-- End Form -->

    <div class="d-grid gap-4">
      <button type="submit" class="btn btn-primary btn-lg">
       Registrarse
      </button>
      <p class="card-text text-muted">
        Ya tienes cuenta?
        <router-link class="link" to="/login">Inicia sesion</router-link>
      </p>
    </div>
  </form>
</template>