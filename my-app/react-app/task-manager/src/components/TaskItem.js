import React, { useState } from "react";

import "./TaskItem.css";
import arrow from "../images/arrow.svg";

function TaskItem({ task, onUpdateTask, onDeleteTask, onToggleTask }) {
  const [showEditMenu, setShowEditMenu] = useState(false);

  function handleUpdateTask(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const dueDate = event.target.dueDate.value;
    if (!title || !description || !dueDate) {
      alert("Please fill out all fields");
      return;
    }
    const updatedTask = {
      ...task,
      title,
      description,
      dueDate,
    };
    onUpdateTask(task.id, updatedTask);
    setShowEditMenu(false);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleToggleTask() {
    onToggleTask(task.id);
  }

  function handleEditClick() {
    setShowEditMenu(!showEditMenu);
  }

  return (
    <li>
      <div className={`TaskItem ${showEditMenu ? "show" : ""}`}>
        <img
          src={arrow}
          alt="Arrow Icon"
          className={`arrow ${showEditMenu ? "show" : ""}`}
          height={20}
          width={20}
        />
        <h3 className="info">{task.title}</h3>
        <span className="info description">{task.description}</span>
        <span className="date">{task.dueDate}</span>
        <div className="button-container">
          <button onClick={handleDeleteTask}>Delete</button>
          <button onClick={handleEditClick}>Edit</button>
        </div>

        <label>Stato</label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleTask}
        />

        {showEditMenu && (
          <form
            className={`form-container ${showEditMenu ? "show" : ""}`}
            onSubmit={handleUpdateTask}
          >
            <input type="text" name="title" defaultValue={task.title} />
            <input
              type="text"
              name="description"
              defaultValue={task.description}
            />
            <input type="date" name="dueDate" defaultValue={task.dueDate} />
            <button type="submit">Update</button>
          </form>
        )}
      </div>
    </li>
  );
}

export default TaskItem;
