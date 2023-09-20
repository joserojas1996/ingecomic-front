<template>
  <div>
    <!-- ========== HEADER ========== -->
    <header
      id="header"
      class="navbar navbar-height navbar-light navbar-absolute-top bg-white mt-2"
    >
      <div class="container">
        <a class="navbar-brand mx-auto" href="index.html" aria-label="Unify">
          <h1>InGeComic</h1>
        </a>
      </div>
    </header>
    <!-- ========== END HEADER ========== -->

    <!-- ========== MAIN CONTENT ========== -->
    <main id="content" role="main">
      <!-- Content -->
      <div class="container text-center" style="margin-top: 18rem">
        <div class="mb-4">
          <h1 class="display-1">404</h1>
          <h2 class="mb-1">Algo salió mal</h2>
          <p>¡La página que buscas no existe!</p>
        </div>
        <router-link class="btn btn-primary" to="/"> Ir al inicio </router-link>
      </div>
      <!-- End Content -->
    </main>
    <!-- ========== END MAIN CONTENT ========== -->

    <!-- ========== FOOTER ========== -->
    <div class="position-absolute bottom-0 start-0 end-0">
      <footer class="container py-4">
        <div class="row align-items-md-center text-center text-md-start">
          <div class="col-md mb-3 mb-md-0">
            <p class="fs-5 mb-0">© InGeGomig 2023</p>
          </div>

          <div class="col-md d-md-flex justify-content-md-end">
            <!-- Socials -->
           
                 <p class="fs-5 mb-0">Dreyka Santana</p>
             
            <!-- End Socials -->
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>