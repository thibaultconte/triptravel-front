<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row flex-grow">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <div class="brand-logo">
                <img src="../assets/images/logo.svg" />
              </div>
              <h4>Bonjour ! Comment allez vous ?</h4>
              <h6 class="font-weight-light">Se connecter pour continuer.</h6>
              <form class="pt-3">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="exampleInputEmail1"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="mt-3">
                  <a
                    class="btn btn-block btn-gradient-success btn-lg font-weight-medium auth-form-btn"
                    href="../../index.html"
                    >SE CONNECTER</a
                  >
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Toujours pas de compte ?
                  <a href="/inscription" class="text-success">S'inscrire</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style scoped></style>
