import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoItem from './components/TodoItem.jsx';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchTodos = async () => {
    const res = await fetch(`${API_URL}/api/todos`);
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    const res = await fetch(`${API_URL}/api/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = async (id) => {
    const res = await fetch(`${API_URL}/api/todos/${id}`, {
      method: 'PUT',
    });
    const updated = await res.json();
    setTodos(todos.map(t => t._id === id ? updated : t));
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/api/todos/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter(t => t._id !== id));
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">ToDo App</h1>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
