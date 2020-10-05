import React, { useState } from 'react';
import { Todo } from 'todomvc-contract';

import Header from './Header';
import Main from './Main';
import Footer, { Showing } from './Footer';
import Info from './Info';

export type TodoAppPageProps = Readonly<{
  todos?: readonly Todo[];
  onAddTodo?: (title: string) => void;
  onToggle?: (id: string) => void;
  onDestroy?: (id: string) => void;
  onToggleAll?: () => void;
  onClearCompleted?: () => void;
}>;

function TodoAppPage({ todos = [], onAddTodo, onToggle, onDestroy, onToggleAll, onClearCompleted }: TodoAppPageProps) {
  const [nowShowing, setNowShowing] = useState(Showing.ALL_TODOS);

  const activeTodoCount = todos.reduce((accum, todo) => (todo.completed ? accum : accum + 1), 0);
  const completedCount = todos.length - activeTodoCount;

  return (
    <>
      <section className="todoapp">
        <Header onAddTodo={onAddTodo} />
        {todos.length ? (
          <Main todos={todos} onToggle={onToggle} onDestroy={onDestroy} onToggleAll={onToggleAll} />
        ) : null}
        {activeTodoCount || completedCount ? (
          <Footer
            completedCount={completedCount}
            nowShowing={nowShowing}
            count={activeTodoCount}
            onClearCompleted={onClearCompleted}
          />
        ) : null}
      </section>
      <Info />
    </>
  );
}

export default TodoAppPage;
