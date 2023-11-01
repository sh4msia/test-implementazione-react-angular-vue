<template>
  <ul>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @updateTask="onUpdateTask"
      @deleteTask="onDeleteTask"
      @toggleTask="onToggleTask"
    />
  </ul>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "TaskList",
  components: {
    TaskItem,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onUpdateTask(task) {
      this.$emit("updateTask", task);
    },
    onDeleteTask(task) {
      this.$emit("deleteTask", task);
    },
    onToggleTask(task) {
      this.$emit("toggleTask", task);
    },
  },
};
</script>
