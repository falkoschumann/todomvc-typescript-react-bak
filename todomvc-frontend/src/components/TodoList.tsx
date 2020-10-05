import React, { ReactNode } from 'react';

export type TodoListProps = Readonly<{
  children: ReactNode;
}>;

function TodoList({ children }: TodoListProps) {
  return <ul className="todo-list">{children}</ul>;
}

export default TodoList;
