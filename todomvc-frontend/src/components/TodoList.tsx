import React, { useState } from 'react';

import { Todo } from 'todomvc-contract';

export type TodoListProps = Readonly<{
  todos?: readonly Todo[];
  onToggle?: (id: string) => void;
  onEdit?: (id: string, title: string) => void;
  onDestroy?: (id: string) => void;
}>;

function TodoList({ todos, onToggle, onDestroy }: TodoListProps) {
  const [editing, setEditing] = useState<string>();

  return (
    <ul className="todo-list">
      {/* These are here just to show the structure of the list items */}
      {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
      {todos?.map((it) => (
        <li
          id={it.id}
          className={
            it.completed
              ? 'completed'
              : editing === it.id
              ? 'editing'
              : undefined
          }
        >
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={it.completed}
              onClick={() => onToggle?.(it.id)}
            />
            <label onDoubleClick={() => setEditing(it.id)}>{it.title}</label>
            <button
              className="destroy"
              onClick={() => onDestroy?.(it.id)}
            ></button>
          </div>
          <input className="edit" value={it.title} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
