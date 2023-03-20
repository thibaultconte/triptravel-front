<template>
  <div class="container-scroller">
    <Navbar />
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item black-shadow active">
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
                    placeholder="Quelle destination ?"
                    @keyup.enter="onSearchClick"
                    v-model="this.endpoint"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h3 class="mb-3">Se restaurer à <span class="text-capitalize">{{ this.endpoint }}</span></h3>
          </div>
          <div class="col-12">
            <div
              id="carouselExampleIndicators2"
              class="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="7000"
            >
              <div class="carousel-inner">
                <div  v-for="(group, index) in Math.ceil(infoEat.length / 4)" :key="index" :class="['carousel-item', { active: index === 0 }]">
                  <div class="row">
                    <div
                      class="col-3 mb-3"
                      v-for="(item, itemIndex) in this.infoEat.slice(index * 4, index * 4 + 4)" :key="itemIndex" 
                    >
                      <CardElement
                        :img="item.image_url"
                        :name="item.name"
                        :city="item.location.city"
                        :categories="item.categories[0].title"
                        :street="item.location.address1"
                        :zip_code="item.location.zip_code"
                        :ranking="item.rating"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <a
              class="carousel-control-prev btn btn-block btn-gradient-success btn-lg"
              data-bs-target="#carouselExampleIndicators2"
              role="button"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a
              class="carousel-control-next "
              data-bs-target="#carouselExampleIndicators2"
              role="button"
              data-bs-slide="next"
            >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h3 class="mb-3">Se rafraichir à <span class="text-capitalize">{{ this.endpoint }}</span></h3>
          </div>
          <div class="col-12">
            <div
              id="carouselBar"
              class="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="7000"
            >
              <div class="carousel-inner">
                <div  v-for="(group, index) in Math.ceil(infoBar.length / 4)" :key="index" :class="['carousel-item', { active: index === 0 }]">
                  <div class="row">
                    <div
                      class="col-3 mb-3"
                      v-for="(item, itemIndex) in this.infoBar.slice(index * 4, index * 4 + 4)" :key="itemIndex" 
                    >
                      <CardElement
                        :img="item.image_url"
                        :name="item.name"
                        :city="item.location.city"
                        :categories="item.categories[0].title"
                        :street="item.location.address1"
                        :zip_code="item.location.zip_code"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <a
              class="carousel-control-prev btn btn-block btn-gradient-success btn-lg"
              data-bs-target="#carouselBar"
              role="button"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a
              class="carousel-control-next "
              data-bs-target="#carouselBar"
              role="button"
              data-bs-slide="next"
            >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h3 class="mb-3">Se loger à {{  }}<span class="text-capitalize">{{ this.endpoint }}</span></h3>
          </div>
          <div class="col-12">
            <div
              id="carouselHotels"
              class="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="7000"
            >
              <div class="carousel-inner">
                <div  v-for="(group, index) in Math.ceil(infoHotels.length / 4)" :key="index" :class="['carousel-item', { active: index === 0 }]">
                  <div class="row">
                    <div
                      class="col-3 mb-3"
                      v-for="(item, itemIndex) in this.infoHotels.slice(index * 4, index * 4 + 4)" :key="itemIndex" 
                    >
                      <CardElement
                        :img="item.image_url"
                        :name="item.name"
                        :city="item.location.city"
                        :street="item.location.address1"
                        :zip_code="item.location.zip_code"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <a
              class="carousel-control-prev btn btn-block btn-gradient-success btn-lg"
              data-bs-target="#carouselHotels"
              role="button"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a
              class="carousel-control-next "
              data-bs-target="#carouselHotels"
              role="button"
              data-bs-slide="next"
            >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-5 pb-5" v-if="this.infoEnjoy.length > 0">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h3 class="mb-3">Se divertir à<span class="text-capitalize">{{ this.endpoint }}</span></h3>
          </div>
          <div class="col-12">
            <div
              id="carouselEvent"
              class="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="7000"
            >
              <div class="carousel-inner">
                <div  v-for="(group, index) in Math.ceil(infoEnjoy.length / 4)" :key="index" :class="['carousel-item', { active: index === 0 }]">
                  <div class="row">
                    <div
                      class="col-3 mb-3"
                      v-for="(item, itemIndex) in this.infoEnjoy.slice(index * 4, index * 4 + 4)" :key="itemIndex" 
                    >
                      <CardElement
                        :img="item.image_url"
                        :name="item.name"
                        :city="item.location.city"
                        :street="item.location.address1"
                        :zip_code="item.location.zip_code"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <a
              class="carousel-control-prev btn btn-block btn-gradient-success btn-lg"
              data-bs-target="#carouselEvent"
              role="button"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a
              class="carousel-control-next "
              data-bs-target="#carouselEvent"
              role="button"
              data-bs-slide="next"
            >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../partials/Navbar.vue";
import CardElement from "@/partials/CardElement.vue";
import axios from "axios";
import * as bootstrap from 'bootstrap';

export default {
  name: "HomePage",
  components: {
    Navbar,
    CardElement,
  },
  data: () => ({
    page: 0,

    infoBar: [],
    infoEat: [],
    infoEnjoy: [],
    infoHotels: [],

    endpoint: "toulouse",
  }),

  mounted() {
    // Activate all carousels on the page
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
      new bootstrap.Carousel(carousel);
    });
  },

  created() {
    this.barAPI(this.endpoint);
    this.eatAPI(this.endpoint);
    this.enjoyAPI(this.endpoint);
    this.hotelsAPI(this.endpoint);
  },

  methods: {
    onSearchClick() {
      this.loading = true;
      this.barAPI(this.endpoint);
      this.eatAPI(this.endpoint);
      this.hotelsAPI(this.endpoint);
      this.enjoyAPI(this.endpoint);
    },

    eatAPI(city) {
      const axiosRestau =
        "http://5.135.156.86:8006/api/searchRestaurants/" + city + "/34";

      axios
        .get(axiosRestau)
        .then((response) => {
          this.infoEat = response.data.businesses;
          this.loading = false;
        })
        .catch((response) => {
          this.loading = false;
          console.log(response);
        });
    },
    hotelsAPI(city) {
      const axiosHotels =
        "http://5.135.156.86:8002/api/searchSleep/" + city + "/34";

      axios
        .get(axiosHotels)
        .then((response) => {
          this.infoHotels = response.data.businesses;
          this.loading = false;
        })
        .catch((response) => {
          this.loading = false;
          console.log(response);
        });
    },

    barAPI(city) {
      const axiosBar =
        "http://5.135.156.86:8005/api/searchBars/" + city + "/24";

      axios
        .get(axiosBar)
        .then((response) => {
          this.infoBar = response.data.businesses;
          this.loading = false;
        })
        .catch((response) => {
          this.loading = false;
          console.log(response);
        });
    },

    enjoyAPI(city) {
      const axiosEnjoy =
        "http://5.135.156.86:8001/api/searchEvents/" + city + "/24";

      axios
        .get(axiosEnjoy)
        .then((response) => {
          this.infoEnjoy = response.data.events;
          this.loading = false;
        })
        .catch((response) => {
          this.loading = false;
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
.carousel-caption {
  top: 30% !important;
}

.carousel-item {
  position: relative;
}

.carousel-control-prev {
  position: absolute;
  top: 30%;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5%;
  padding: 0;
  background: linear-gradient(to right, #84d9d2, #07cdae);
  color: #fff;
  text-align: center;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
  border-radius: 50%;
  height: 18%;
  left: -20px!important;
}
.carousel-control-next {
  position: absolute;
  top: 30%;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5%;
  padding: 0;
  color: #fff;
  background: linear-gradient(to right, #84d9d2, #07cdae);
  text-align: center;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
  height: 18%;
  border-radius: 50%;
}

.carousel-item.black-shadow::before {
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
  text-transform: uppercase;
  font-weight: bold;
}

.elevated-input::placeholder {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
