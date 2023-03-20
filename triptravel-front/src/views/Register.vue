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
              <h4>Nouveau sur l'application ?</h4>
              <h6 class="font-weight-light">
                Inscrivez-vous facilement. En quelques étapes !
              </h6>
              <form class="pt-3">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="exampleInputEmail1"
                    placeholder="Email"
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
                <!-- <div class="mb-4">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input" /> J'accepte les conditions d'utilisation
                    </label>
                  </div>
                </div> -->
                <div class="mt-3">
                  <a
                    class="btn btn-block btn-gradient-success btn-lg font-weight-medium auth-form-btn"
                    href="../../"
                    >COMMENCER L'AVENTURE</a
                  >
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Déjà un compte chez nous ?
                  <a href="/connexion" class="text-success">Me connecter</a>
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
  name: "RegisterView",
};
</script>
