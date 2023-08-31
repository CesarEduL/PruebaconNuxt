<template>
  <div class="home">
    <div class="text">
      <h1>Contacto</h1>
      <h2>Contador: {{ counter }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters["getCounter"];
    },
  },
};
</script>
