<template>
  <div>
    <h1>Task Manager</h1>
    <label>
      Filter by name:
      <input type="text" v-model="filterName">
    </label>
    <transition-group name="task-list" tag="ul">
      <li v-for="task in filteredTasks" :key="task.id">
        {{ task.name }}
        <button @click="showEditTaskForm(task)">Edit</button>
        <button @click="deleteTask(task)">Delete</button>
      </li>
    </transition-group>
    <button @click="showAddTaskForm">Add Task</button>
    <div v-if="showAddTask">
      <h2>Add Task</h2>
      <form @submit.prevent="addTask">
        <label>
          Name:
          <input type="text" v-model="newTaskName" required>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
    <div v-if="showEditTask">
      <h2>Edit Task</h2>
      <form @submit.prevent="editTask">
        <label>
          Name:
          <input type="text" v-model="editedTaskName" required>
        </label>
        <button type="submit">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
        { id: 3, name: 'Task 3' },
      ],
      showAddTask: false,
      showEditTask: false,
      newTaskName: '',
      editedTaskName: '',
      editedTaskId: null,
      filterName: '',
    };
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter(task => task.name.toLowerCase().includes(this.filterName.toLowerCase()));
    },
  },
  methods: {
    showAddTaskForm() {
      this.showAddTask = true;
    },
    showEditTaskForm(task) {
      this.showEditTask = true;
      this.editedTaskName = task.name;
      this.editedTaskId = task.id;
    },
    addTask() {
      const newTask = {
        id: this.tasks.length + 1,
        name: this.newTaskName,
      };
      this.tasks.push(newTask);
      this.newTaskName = '';
      this.showAddTask = false;
    },
    editTask() {
      const task = this.tasks.find(task => task.id === this.editedTaskId);
      if (task) {
        task.name = this.editedTaskName;
        this.showEditTask = false;
        this.editedTaskName = '';
        this.editedTaskId = null;
      }
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style>
  .App {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1 {
  color: #333;
}

input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

/* Aggiungiamo le animazioni per la transizione */
.task-list-enter-active,
.task-list-leave-active {
  transition: all 0.5s;
}

.task-list-enter,
.task-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>