<template>
  <v-container>
    <v-layout row>
      <v-dialog v-model="loading" fullscreen persistent>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular indeterminate :size="70" width="7" color="secondary"></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>
    <v-flex xs12>
      <v-carousel v-if="!loading && posts.length > 0" v-bind="{'cycle':true}" interval="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl">
          <h1 id="carousel__title">{{post.title}}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import { gql } from "apollo-boost";
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {};
  },
  // apollo: {
  //   getPosts: {
  //     query: gql`
  //       query {
  //         getPosts {
  //           _id
  //           title
  //           imageUrl
  //           description
  //         }
  //       }
  //     `,
  //     result({ data, loading }) {
  //       if (!loading) {
  //         this.posts = data.getPosts;
  //       }
  //     }
  //   }
  // },
  created() {
    this.handleGetCarouselPosts();
  },
  computed: {
    ...mapGetters(["posts", "loading"])
    // posts() {
    //   return this.$store.getters.posts;
    // },
    // loading() {
    //   return this.$store.getters.loading;
    // }
  },
  methods: {
    handleGetCarouselPosts() {
      this.$store.dispatch("getPosts");
    }
  }
};
</script>
<style>
#carousel__title {
  position: absolute;
  color: white;
  border-radius: 5px 5px 0 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
