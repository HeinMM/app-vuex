<template>
  <div>
    <h3 class="text-primary text-center">All Todos</h3>
      <AddTodo></AddTodo>
    <div class="container">
    <div class="row">

    </div>
      <div class="row">
        <div class="col-md-4 my-4" v-for="todo in myTodos" :key="todo.id">
          <b-card bg-variant="info" text-variant="white" class="text-center">
            <b-card-text>{{ todo.title }}</b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from './addTodo'
import { mapActions, mapGetters } from "vuex";
export default {
  components: { AddTodo },
  computed: {
    ...mapGetters(["myTodos"]),
  },
  methods: {
    ...mapActions(["getTodos"]),
  },
  mounted() {
    // console.log(this.myTodos, this.myLocalComputedProp);
    this.getTodos();
  },
};
</script>

<style></style>
