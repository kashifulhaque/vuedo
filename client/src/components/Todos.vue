<template>
  <section id="todos">
    <div class="todo" v-for="todo in todos" :key="todo.id">
      <input type="checkbox" name="done" v-if="todo.done" checked />
      <input type="checkbox" name="done" v-else />
      <label for="done">
        {{ todo.task }}
      </label>

      <button class="remove" v-on:click="() => deleteTodo(todo.id)">✕</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Todos",
  props: ["todos"],
  methods: {
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400&display=swap");

#todos {
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .todo {
    width: 60%;
    flex: 1;
    margin: 12px;
    padding: 16px;
    background-color: #55565f;
    border-radius: 8px;
    color: #f3f3f3;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 20px;
    display: flex;

    label {
      cursor: pointer;
      flex: 1;
    }

    .remove {
      font-family: "Jost", sans-serif;
      font-weight: 400;
      font-size: 16px;
      border-radius: 100px;
      border: none;
      outline: none;
      background-color: transparent;
      color: #f3f3f3;

      &:hover {
        background-color: darken($color: #7e8ce0, $amount: 3);
      }

      &:active {
        background-color: darken($color: #262833, $amount: 10);
      }
    }
  }
}
</style>
