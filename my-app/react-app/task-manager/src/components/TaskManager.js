import React, { useState } from "react";
import "./TaskManager.css";

function TaskManager() {
  const [tasks, setTasks] = useState(["task1", "task2"]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText) {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="TaskManager">
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
