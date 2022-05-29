<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/MyTodo.vue";
export default {
  name: "App",
  components: { Todos },
  mounted() {
    // console.log(this.$store.state.sayHello);
  },
};
</script>

<style></style>
