import React, { useRef } from 'react';

export type HeaderProps = Readonly<{
  onAddTodo?: (title: string) => void;
}>;

function Header({ onAddTodo }: HeaderProps) {
  const newFieldRef = useRef<HTMLInputElement>(null);

  function handleNewTodoKeyDown(event: React.KeyboardEvent) {
    if (event.key !== 'Enter') {
      return;
    }

    event.preventDefault();

    const val = newFieldRef.current?.value.trim();

    if (val) {
      onAddTodo?.(val);
      newFieldRef.current!.value = '';
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        ref={newFieldRef}
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={handleNewTodoKeyDown}
        autoFocus={true}
      />
    </header>
  );
}

export default Header;
