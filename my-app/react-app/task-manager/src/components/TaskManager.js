import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

import "./TaskManager.css";

function TaskManager() {
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Learn React",
      description: "Learn how to use React",
      dueDate: "2021-03-01",
      completed: true,
    },
  ]);

  function updateTask(id, updatedTask) {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="TaskManager">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />
    </div>
  );
}

export default TaskManager;
