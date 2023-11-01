import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onUpdateTask, onDeleteTask, onToggleTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
