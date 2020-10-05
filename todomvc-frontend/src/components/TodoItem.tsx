import React, { useState } from 'react';

import { Todo } from 'todomvc-contract';

export type TodoItemProps = Readonly<{
  todo: Todo;
  editing?: boolean;
  onSave?: (text: string) => void;
  onDestroy?: () => void;
  onEdit?: () => void;
  onCancel?: (event: any) => void;
  onToggle?: () => void;
}>;

function TodoItem({ todo, editing = false, onSave, onDestroy, onEdit, onCancel, onToggle }: TodoItemProps) {
  const [editText, setEditText] = useState(todo.title);

  function handleSubmit() {
    const val = editText?.trim();
    if (val) {
      onSave?.(val);
      setEditText(editText);
    } else {
      onDestroy?.();
    }
  }

  function handleEdit() {
    onEdit?.();
    setEditText(todo.title);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      setEditText(todo.title);
      onCancel?.(event);
    } else if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  function handleChange(event: React.FormEvent) {
    const input = event.target as HTMLInputElement;
    setEditText(input.value);
  }

  let className = '';
  if (todo.completed) {
    className += ' completed';
  }
  if (editing) {
    className += ' editing';
  }
  return (
    <li id={todo.id} className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={onToggle} />
        <label onDoubleClick={() => handleEdit()}>{todo.title}</label>
        <button className="destroy" onClick={onDestroy}></button>
      </div>
      <input
        className="edit"
        value={editText}
        onBlur={handleSubmit}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
}

export default TodoItem;
