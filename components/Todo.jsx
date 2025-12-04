"use client";
import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = async () => {
    if (!task.trim()) return;

    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ task }),
    });

    const data = await res.json();
    setTodos([...todos, data]);
    setTask("");
  };

  const deleteTodo = async (id) => {
    await fetch(`/api/todos?id=${id}`, { method: "DELETE" });
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple Todo App</h1>

      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.task}
            <button onClick={() => deleteTodo(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
