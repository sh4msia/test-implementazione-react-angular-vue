<template>
  <div class="TaskManager">
    <h1>Task Manager</h1>
    <TaskForm @addTask="addTask" />
    <TaskList
      :tasks="tasks"
      @updateTask="updateTask"
      @deleteTask="deleteTask"
      @toggleTask="toggleTask"
    />
  </div>
</template>

<script>
import TaskList from "./TaskList.vue";
import TaskForm from "./TaskForm.vue";

export default {
  name: "TaskManager",
  components: {
    TaskList,
    TaskForm,
  },
  data() {
    return {
      tasks: [
        {
          id: 0,
          title: "Learn Vue",
          description: "Learn how to use Vue",
          dueDate: "2021-03-01",
          completed: true,
        },
      ],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
    updateTask(id, updatedTask) {
      const index = this.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        this.tasks.splice(index, 1, updatedTask);
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
};
</script>

<style>
.TaskManager {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;

  transition: height 0.5s;
}

input {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 5px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

input[type="date"]::-webkit-calendar-picker-popup {
  background-color: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
  width: 60%;
}

li {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: var(--rct-c-blue-dark);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 10px;
  cursor: pointer;
}
</style>
