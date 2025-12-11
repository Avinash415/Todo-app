"use client";
import { useState, useEffect } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const deleteTask = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="container">
      <div style={styles.inputBox}>
        <input
          type="text"
          style={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
        />
        <button className="btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span
              style={{
                ...styles.text,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "gray" : "var(--text)",
              }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTask(todo.id)} style={styles.deleteBtn}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  inputBox: {
    display: "flex",
    gap: 10,
    marginBottom: 25,
  },
  input: {
    flex: 1,
    padding: "12px",
    fontSize: 16,
    border: "1px solid #aaa",
    borderRadius: 10,
  },
  list: { padding: 0 },
  listItem: {
    padding: "12px",
    marginBottom: 10,
    background: "var(--card)",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  text: { fontSize: 16, cursor: "pointer" },
  deleteBtn: {
    fontSize: 20,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "var(--text)",
  },
};
