<template>
  <li>
    <div class="TaskItem" :class="{ show: showEditMenu }">
      <img
        src="./images/arrow.svg"
        alt="Arrow Icon"
        class="arrow"
        :class="{ show: showEditMenu }"
        height="20"
        width="20"
      />
      <h3 class="info">{{ task.title }}</h3>
      <span class="info description">{{ task.description }}</span>
      <span class="date">{{ task.dueDate }}</span>
      <div class="button-container">
        <button @click="handleDeleteTask">Delete</button>
        <button @click="handleEditClick">Edit</button>
      </div>

      <label>Stato</label>
      <input
        type="checkbox"
        v-model="task.completed"
        @change="handleToggleTask"
      />

      <form
        v-if="showEditMenu"
        class="form-container"
        :class="{ show: showEditMenu }"
        @submit.prevent="handleUpdateTask"
      >
        <input type="text" v-model="title" />
        <input type="text" v-model="description" />
        <input type="date" v-model="dueDate" />
        <button type="submit">Update</button>
      </form>
    </div>
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task"],
  data() {
    return {
      showEditMenu: false,
      title: this.task.title,
      description: this.task.description,
      dueDate: this.task.dueDate,
    };
  },
  methods: {
    handleUpdateTask() {
      if (!this.title || !this.description || !this.dueDate) {
        alert("Please fill out all fields");
        return;
      }
      const updatedTask = {
        ...this.task,
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
      };
      this.$emit("updateTask", this.task.id, updatedTask);
      this.showEditMenu = false;
    },
    handleDeleteTask() {
      this.$emit("deleteTask", this.task.id);
    },
    handleToggleTask() {
      this.task.completed = !this.task.completed;
      this.$emit("toggleTask", this.task.id);
    },
    handleEditClick() {
      this.showEditMenu = !this.showEditMenu;
    },
  },
};
</script>

<style scoped>
.TaskItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem;
  height: auto;
  background-color: var(--vt-c-green-bg);
  border-radius: 5px;
  width: 100%;
  transition: all 0.2s;
}

.TaskItem h3 {
  color: var(--vt-c-white-soft);
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.TaskItem .form-container {
  margin-top: 2rem;
  overflow: hidden;
  transition: opacity 0.3s ease-in-out;
  width: 100%;
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around !important;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100%;
}

.button-container button {
  width: 90%;
  height: 30%;
  margin: 0.5rem;
  background-color: var(--vt-c-green-dark);
}

.info {
  width: 30%;
  text-align: left;
  overflow-wrap: break-word;
  color: var(--vt-c-white-mute);
}

.date {
  width: 10%;
  text-align: center;
  overflow-wrap: break-word;
  color: var(--vt-c-white-mute);
}

.arrow {
  transform: rotateZ(0deg);
  transition: transform 0.2s ease-in-out;
}

.arrow.show {
  transform: rotateZ(90deg);
}

.form-container input {
  background-color: var(--vt-c-green-bg);
}

.form-container button {
  background-color: var(--vt-c-green-dark);
}

input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: var(--vt-c-green-dark);
  border-radius: 50%;
  border: 2px solid var(--vt-c-green);
  cursor: pointer;
  position: relative;
}

input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: var(--vt-c-green);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

input[type="checkbox"]:checked::before {
  opacity: 1;
}
</style>
