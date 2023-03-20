<template>
    <div class="card" style="width: 18rem;">
      <img :src="this.img" class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">{{this.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ this.categories }}</h6>
        <p class="card-text">{{ this.street }}, {{ this.zip_code }} {{ this.city }} </p>
      </div>
    </div>
</template>

<script>
export default {
    name: "CardElement",
    props: {
      img: {
        type: String
      },
      name: {
        type: String,
        default: "Inconnu"
      },
      raking: {
        type: String
      },
      street: {
        type: String
      },
      city: {
        type: String
      },
      country: {
        type: String
      },
      zip_code: {
        type: String
      },
      phone: {
        type: String
      },
      department: {
        type: String
      },
      categories: {
        type: String
      }

    }
}
</script>

<style scoped>
.card {
  height: 21rem;
}
.card .card-body {
  padding: 1rem !important;
}
.card-img-top {
  height: 200px; /* set your desired height */
  object-fit: cover; /* ensure the image fills the container */
}
</style>