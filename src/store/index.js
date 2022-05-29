import { createStore } from "vuex";
import axios from "axios";

let store = createStore({
    state: {
        todos: []
    },
    getters: {
        myTodos(state) {
            return state.todos
        }
    },
    mutations: {
       setTodos (state,todos){
            state.todos=todos
        },
        addTodos(state,newTodo) {
            state.todos.unshift(newTodo);
        }
    },
    actions: {
        async getTodos({commit}) {
            let res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            let todos = res.data;

            commit('setTodos', todos);
        },
        async addTodos(context,newTodo) {
            let res = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
            context.commit('addTodos',res.data);
        }
    }
   
});

export default store;