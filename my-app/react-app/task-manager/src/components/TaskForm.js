import React, { useState } from "react";

import "./TaskForm.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const task = {
      id: Date.now(),
      title,
      description,
      dueDate,
      completed: false,
    };
    onAddTask(task);
    setTitle("");
    setDescription("");
    setDueDate("");
  }

  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titolo"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Descrizione"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="date"
        placeholder="Data di scadenza"
        value={dueDate}
        onChange={(event) => setDueDate(event.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
}

export default TaskForm;
