import React from 'react';

export type FooterProps = Readonly<{
  itemsLeft?: number;
  onClearCompleted?: () => void;
}>;

function Footer({ itemsLeft = 0, onClearCompleted }: FooterProps) {
  return (
    <footer className="footer">
      {/* This should be `0 items left` by default */}
      <span className="todo-count">
        <strong>{itemsLeft}</strong> item{itemsLeft === 1 ? '' : 's'} left
      </span>
      {/* Remove this if you don't implement routing */}
      <ul className="filters">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      {/* Hidden if no completed items are left ↓ */}
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
