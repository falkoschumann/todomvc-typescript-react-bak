import React from 'react';

import { Todo } from 'todomvc-contract';
import TodoList from './TodoList';

export type MainProps = Readonly<{
  todos?: readonly Todo[];
  onToggle?: (id: string) => void;
  onDestroy?: (id: string) => void;
  onToggleAll?: () => void;
}>;

function Main({ todos = [], onToggle, onDestroy, onToggleAll }: MainProps) {
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onClick={onToggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList todos={todos} onToggle={onToggle} onDestroy={onDestroy} />
    </section>
  );
}

export default Main;
