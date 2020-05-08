<template>
  <header>
    <input
      type="text"
      name="todoInput"
      v-model="task"
      placeholder="Add a new Todo here"
    />
    <button class="submit" v-on:click="createNewTodo">
      + add todo
    </button>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      task: "",
    };
  },
  methods: {
    createNewTodo() {
      this.$emit("createTodo", this.task);
      this.task = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");

header {
  display: flex;

  input {
    flex: 1;
    height: 56px;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "Jost", sans-serif;
    text-indent: 12px;
    background-color: #55565f;
    border: none;
    outline: none;
    color: #f3f3f3;
  }

  .submit {
    width: 192px;
    height: 56px;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;

    color: #fafafa;
    background-color: #7e8ce0;
    border: none;
    outline: none;

    &:hover {
      background-color: lighten($color: #7e8ce0, $amount: 10);
    }

    &:active {
      background-color: darken($color: #7e8ce0, $amount: 10);
    }
  }
}
</style>
