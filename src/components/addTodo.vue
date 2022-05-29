<template>
  <div>
  
  <!-- Using components -->

  <b-input-group  class="mt-3 mb-3 input-group" >
    <b-form-input v-model="newTodo.title"></b-form-input>
    <b-input-group-append>
      
      <button  class="btn btn-primary text-light" @click="addTodos(newTodo)">add todo</button>
    </b-input-group-append>
  </b-input-group>
</div>

</template>

<script>
import { mapActions } from 'vuex'
export default {

    data(){
        return {
            newTodo:{
                title:"",
            }
        }
    },

    methods:{ ...mapActions([
        "addTodos",
    ])},

}
</script>

<style>

</style>