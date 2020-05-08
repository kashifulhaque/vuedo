<template>
  <div id="app">
    <Header v-on:createTodo="createTodo" />
    <Todos :todos="todos" v-on:deleteTodo="deleteTodo" />

    <div class="credit">
      Tutorial by Tyler Potts.
      <a
        href="https://youtu.be/rgp9T_lG2Qc"
        target="_blank"
        rel="noopener noreferrer"
        >Link</a
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "./utils/config.json";

import Header from "./components/Header.vue";
import Todos from "./components/Todos.vue";
// Use new Date().getTime() to get current UNIX timestamp make it as the ID.
// Global vars
let todos = [
  {
    id: "1588935932",
    task: "Write some code",
    done: true,
  },
  {
    id: "1588935934",
    task: "Write some more code",
    done: false,
  },
  {
    id: "1588935936",
    task: "Write some JavaScript code",
    done: false,
  },
  {
    id: "1588935938",
    task: "Write some good ol' java code",
    done: false,
  },
];

export default {
  name: "App",
  components: {
    Header,
    Todos,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    fetchTodo() {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.get(config.apiUrl);
          const data = await res.data;

          resolve(
            data.forEach((item) => {
              this.todos.push(item);
            })
          );
        } catch (err) {
          reject(err);
        }
      });
    },
    createTodo(todo) {
      if (todo.length != 0 || todo.length != "") {
        let object = {
          task: todo,
          done: false,
        };

        axios.post(config.apiUrl, object);
        object["id"] = new Date().getTime();
        this.todos.push(object);
      }

      return new Promise();
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id != id);
      const apiUrlDelete = config.apiUrl + "/" + id;

      return axios.delete(apiUrlDelete);
    },
  },
  created() {
    this.fetchTodo();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

body {
  margin: 0;
  padding: 0;
  background-color: #262833;
  display: flex;
  flex-direction: column;
  align-content: center;

  .credit {
    margin-top: 16px;
    font-family: "Jost", sans-serif;
    text-align: center;
    color: #f3f3f3;

    a {
      color: yellow;
    }
  }
}
</style>
