<template>
  <v-container>
    <v-flex xs12>
      <v-carousel v-if="posts.length > 0" v-bind="{'cycle':true}" interval="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl">
          <h1 id="carousel__title">{{post.title}}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { gql } from "apollo-boost";

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
    posts() {
      return this.$store.getters.posts;
    }
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
