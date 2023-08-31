<template>
  <div class="home">
    <div class="text">
      <h1>Blog, total: {{ total }}</h1>
      <div v-for="post in posts" :key="post.id">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  // Se puede exportar directamente desde la página o mediante el store

  //created() {
  //    this.$store.dispatch('posts/loadPosts');
  // },

  methods: {
    ...mapActions({
      loadPosts: "posts/loadPosts",
    }),
  },

  computed: {
    //Una forma de poner los post
    //posts() {
    //    return this.$store.getters['posts/getPosts']
    //}

    ...mapGetters({
      posts: "posts/getPosts",
      total: "posts/getTotal",
    }),
  },
};
</script>
