<template>
  <form class="TaskForm" @submit.prevent="handleSubmit">
    <input type="text" placeholder="Titolo" v-model="title" />
    <input type="text" placeholder="Descrizione" v-model="description" />
    <input type="date" placeholder="Data di scadenza" v-model="dueDate" />
    <button type="submit">Add task</button>
  </form>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      title: "",
      description: "",
      dueDate: "",
    };
  },
  methods: {
    handleSubmit() {
      const task = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        completed: false,
      };
      this.$emit("addTask", task);
      this.title = "";
      this.description = "";
      this.dueDate = "";
    },
  },
};
</script>

<style scoped>
.TaskForm {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 5px;
  border: 2px solid var(--color-border);
}

.TaskForm input {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid var(--color-border);
}

.TaskForm button {
  background-color: var(--vt-c-green-dark);
  padding: 0.5rem;
}

.TaskForm input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

input[type="date"]::-webkit-calendar-picker-popup {
  background-color: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
