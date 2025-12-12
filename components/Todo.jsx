"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  const toggleComplete = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const deleteTask = (id) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="container" style={styles.wrapper}>
      <h1 style={styles.heading}>📝 Your Tasks</h1>

      <div style={styles.inputBox}>
        <input
          type="text"
          style={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a new task..."
        />

        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addTask}
          style={styles.addBtn}
        >
          Add
        </motion.button>
      </div>

      {/* Task Count */}
      {todos.length > 0 && (
        <p style={styles.count}>Total Tasks: {todos.length}</p>
      )}

      {/* Task List */}
      <ul style={styles.list}>
        <AnimatePresence>
          {todos.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={styles.empty}
            >
              No tasks yet. Start adding one! 🚀
            </motion.p>
          )}

          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2 }}
              style={styles.listItem}
            >
              <div
                style={styles.textWrapper}
                onClick={() => toggleComplete(todo.id)}
              >
                <span
                  style={{
                    ...styles.text,
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "gray" : "var(--text)",
                  }}
                >
                  {todo.text}
                </span>

                {todo.completed && (
                  <span style={styles.badge}>Done ✔</span>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => deleteTask(todo.id)}
                style={styles.deleteBtn}
              >
                ❌
              </motion.button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

const styles = {
  wrapper: {
    paddingTop: 20,
    maxWidth: "700px",
    margin: "auto",
  },

  heading: {
    textAlign: "center",
    marginBottom: 25,
    fontSize: 32,
    fontWeight: "bold",
  },

  inputBox: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    padding: "12px",
    fontSize: 16,
    border: "1px solid #aaa",
    borderRadius: 10,
    outline: "none",
  },

  addBtn: {
    padding: "12px 22px",
    borderRadius: 10,
  },

  count: {
    marginBottom: 15,
    fontSize: "16px",
    color: "var(--textSecondary)",
  },

  list: { padding: 0 },

  empty: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    opacity: 0.8,
  },

  listItem: {
    padding: "14px",
    marginBottom: 12,
    background: "var(--card)",
    borderRadius: 12,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
  },

  text: { fontSize: 17, cursor: "pointer" },

  textWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  badge: {
    background: "#4caf50",
    padding: "3px 10px",
    borderRadius: "20px",
    color: "white",
    fontSize: 12,
  },

  deleteBtn: {
    fontSize: 20,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "var(--text)",
  },
};
