import React, { useState } from 'react';

import { Todo } from 'todomvc-contract';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

export type MainProps = Readonly<{
  todos?: readonly Todo[];
  onToggle?: (id: string) => void;
  onSave?: (todoToSave: Todo, text: string) => void;
  onDestroy?: (id: string) => void;
  onToggleAll?: (checked: boolean) => void;
}>;

function Main({ todos = [], onToggle, onSave, onDestroy, onToggleAll }: MainProps) {
  const [editing, setEditing] = useState<string>();

  function handleToggleAll(event: React.FormEvent) {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;
    onToggleAll?.(checked);
  }

  function handleToggle(todo: Todo) {
    onToggle?.(todo.id);
  }

  function handleDestroy(todo: Todo) {
    onDestroy?.(todo.id);
  }

  function handleEdit(todo: Todo) {
    setEditing(todo.id);
  }

  function handleSave(todoToSave: Todo, text: string) {
    onSave?.(todoToSave, text);
    setEditing(undefined);
  }

  function handleCancel() {
    setEditing(undefined);
  }

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" onClick={handleToggleAll} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList>
        {todos.map((it) => (
          <TodoItem
            key={it.id}
            todo={it}
            editing={editing === it.id}
            onSave={(text) => handleSave(it, text)}
            onDestroy={() => handleDestroy(it)}
            onEdit={() => handleEdit(it)}
            onCancel={handleCancel}
            onToggle={() => handleToggle(it)}
          />
        ))}
      </TodoList>
    </section>
  );
}

export default Main;
