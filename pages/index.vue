<template>
  <div class="home">
    <div class="text">
      <h1>Home</h1>
      <h2>Contador: {{ counter }}</h2>
      <button type="button" class="btn btn-primary" @click="llamarASumarDos">Sumar Dos</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    llamarASumarDos() {
      this.$store.dispatch("sumarDos");
    },
  },

  computed: {
    counter() {
      return this.$store.getters["getCounter"];
    },
  },


};
</script>
