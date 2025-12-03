'use client';
import { useState, useEffect } from 'react';

export default function Todo(){
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem('todos_v1');
      if(raw) setTasks(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem('todos_v1', JSON.stringify(tasks));
  }, [tasks]);

  function add(){
    if(!text.trim()) return;
    setTasks(prev => [{id:Date.now(), text}, ...prev]);
    setText('');
  }
  function remove(id){ setTasks(prev => prev.filter(t=>t.id!==id)); }

  return (
    <section>
      <div style={{display:'flex', gap:8, marginBottom:12}}>
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Add task..." />
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {tasks.map(t => (
          <li key={t.id} style={{display:'flex', justifyContent:'space-between', marginBottom:6}}>
            <span>{t.text}</span>
            <button onClick={()=>remove(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
