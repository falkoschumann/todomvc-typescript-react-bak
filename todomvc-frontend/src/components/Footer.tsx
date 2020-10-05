import React from 'react';

export enum Showing {
  ALL_TODOS = 'all',
  ACTIVE_TODOS = 'active',
  COMPLETED_TODOS = 'completed',
}

export type FooterProps = Readonly<{
  completedCount?: number;
  nowShowing?: Showing;
  count?: number;
  onClearCompleted?: () => void;
}>;

function Footer({ completedCount = 0, nowShowing = Showing.ALL_TODOS, count = 0, onClearCompleted }: FooterProps) {
  const clearButton =
    completedCount > 0 ? (
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    ) : null;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> item{count === 1 ? '' : 's'} left
      </span>
      <ul className="filters">
        <li>
          <a className={nowShowing === Showing.ALL_TODOS ? 'selected' : undefined} href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active" className={nowShowing === Showing.ACTIVE_TODOS ? 'selected' : undefined}>
            Active
          </a>
        </li>
        <li>
          <a href="#/completed" className={nowShowing === Showing.COMPLETED_TODOS ? 'selected' : undefined}>
            Completed
          </a>
        </li>
      </ul>
      {clearButton}
    </footer>
  );
}

export default Footer;
