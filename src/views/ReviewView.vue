<template>
  <div>
    <div v-if="user">
      <p>the review page</p>
      <!-- <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="cards-wrapper">
              <div class="card" style="width: 18rem">
                <img
                  src="https://picsum.photos/200/300?random=1"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style="width: 18rem">
                <img
                  src="https://picsum.photos/200/300?random=1"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style="width: 18rem">
                <img
                  src="https://picsum.photos/200/300?random=1"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="cards-wrapper">
              <div class="card" style="width: 18rem">
                <img
                  src="https://picsum.photos/200/300?random=2"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style="width: 18rem">
                <img
                  src="https://picsum.photos/200/300?random=2"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style="width: 18rem">
                <img
                  src="https://picsum.photos/200/300?random=2"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="cards-wrapper">
              <div class="card" style="width: 18rem">
                <img
                  src="https://picsum.photos/200/300?random=3"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style="width: 18rem">
                <img
                  src="https://picsum.photos/200/300?random=3"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style="width: 18rem">
                <img
                  src="https://picsum.photos/200/300?random=3"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> -->
      <div class="container">
        <div class="carousel">
          <div id="party" class="item">
            <div>
              <i class="fa fa-glass"></i>
            </div>
            <h1>Party</h1>
          </div>
          <div id="mood" class="item">
            <div>
              <i class="fa fa-cube"></i>
            </div>
            <h1>Mood</h1>
          </div>
          <div id="ambient" class="item">
            <div>
              <i class="fa fa-leaf"></i>
            </div>
            <h1>Ambient</h1>
          </div>
          <div id="work" class="item">
            <div>
              <i class="fa fa-coffee"></i>
            </div>
            <h1>Work</h1>
          </div>
          <div id="world" class="item">
            <div>
              <i class="fa fa-globe"></i>
            </div>
            <h1>World</h1>
          </div>
          <div id="party" class="item">
            <div>
              <i class="fa fa-glass"></i>
            </div>
            <h1>Party</h1>
          </div>
          <div id="mood" class="item">
            <div>
              <i class="fa fa-cube"></i>
            </div>
            <h1>Mood</h1>
          </div>
          <div id="ambient" class="item">
            <div>
              <i class="fa fa-leaf"></i>
            </div>
            <h1>Ambient</h1>
          </div>
          <div id="work" class="item">
            <div>
              <i class="fa fa-coffee"></i>
            </div>
            <h1>Work</h1>
          </div>
          <div id="world" class="item">
            <div>
              <i class="fa fa-globe"></i>
            </div>
            <h1>World</h1>
          </div>
        </div>
        <h1>This is a continue scroll carousel</h1>
      </div>
      <form @submit.prevent="sendReview">
        <div class="review">
          <input
            type="text"
            v-model="name"
            placeholder="Name"
            required
            id="name"
          />
          <input
            type="text"
            v-model="thumbnail_image"
            placeholder="Thumbnail_image"
            required
            id="thumbnail_image"
          />
          <input
            type="text"
            v-model="review"
            placeholder="Review"
            required
            id="review"
          />
        </div>
        <button type="submit" class="button">review</button>
      </form>
    </div>
    <div v-else>
      <h1>Log in DUMBASS</h1>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      name: "",
      thumbnail_image: "",
      review: "",
    };
  },
  methods: {
    sendReview() {
      let payload = {
        name: this.name,
        thumbnail_image: this.thumbnail_image,
        review: this.review,
      };
      this.$store.dispatch("reviews", payload);
    },
  },
};
</script>
<style scoped>
.cards-wrapper {
  display: flex;
  justify-content: space-evenly;
}
h1 {
  font-weight: 100;
}
.container {
  width: 100%;
  display: block;
  overflow: hidden;
}
.carousel {
  display: block;
  width: 100%;
  height: 450px;
  background: white;
  overflow-x: scroll;
  padding: 10px;
  margin: 0;
  white-space: nowrap;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
.item {
  display: inline-block;
  width: 380px;
  margin: 0 10px;
  height: 400px;
  background: rgba(0, 0, 0, 0.05) no-repeat center center;
  background-size: cover;
  position: relative;
  border-radius: 20px;
  box-shadow: 0 0 10px #dfdfdf;
}
.item div {
  width: 100%;
  top: 10%;
  position: absolute;
  text-align: center;
  font-size: 9em;
  color: white;
}
.item h1 {
  top: 50%;
  position: absolute;
  color: white;
  text-align: center;
  width: 100%;
  font-size: 4em;
}
#party {
  background-image: url(https://picsum.photos/200/300?random=1);
}
#mood {
  background-image: url(https://picsum.photos/200/300?random=2);
}
#world {
  background-image: url(https://picsum.photos/200/300?random=3);
}
#ambient {
  background-image: url(https://picsum.photos/200/300?random=4);
}
#work {
  background-image: url(https://picsum.photos/200/300?random=5);
}
</style>
