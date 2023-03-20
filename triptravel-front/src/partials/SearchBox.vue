<template>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/avion-bg-1.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 class="mb-3">Rechercher votre destination</h3>
                <p class="mb-4">
                  Some representative placeholder content for the first slide.
                </p>
                <input
                  type="text"
                  class="form-control elevated-input border-0"
                  placeholder="Quelle destination ?" @keyup.enter="this.function_search"
                />
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: "SearchBox",
};
</script>

<style scoped>
.carousel-caption {
    top: 30%!important;
}

.carousel-item {
  position: relative;
}

.carousel-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  border-radius: 1%;
}

img {
    border-radius: 1%;
}
.elevated-input {
  padding: 15px !important;
  border: none !important;
  border-radius: 20px !important;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2) !important;
}

.elevated-input::placeholder {
  text-transform: uppercase;
  font-weight: bold;
}

.col-12 {
  max-height: 427px !important;
}
</style>
