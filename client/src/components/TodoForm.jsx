import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        className="border rounded-l px-3 py-2 flex-grow"
        placeholder="Add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Add</button>
    </form>
  );
}

export default TodoForm;
