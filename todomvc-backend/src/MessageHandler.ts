import {
  ClearCompletedCommand,
  DestroyCommand,
  EditCommand,
  NewTodoCommand,
  TodoListQuery,
  TodoListQueryResult,
  ToggleAllCommand,
  ToggleCommand,
} from 'todomvc-contract';

import { TodoRepository } from './ports';

export class MessageHandler {
  constructor(private repository: TodoRepository) {}
  handle(
    message:
      | NewTodoCommand
      | ToggleAllCommand
      | ToggleCommand
      | DestroyCommand
      | EditCommand
      | ClearCompletedCommand
      | TodoListQuery
  ): true | string | TodoListQueryResult {
    switch (message.type) {
      case 'NEW_TODO_COMMAND': {
        const todos = [...this.repository.load()];
        todos.push({
          id: 'foobar',
          title: message.title,
          completed: false,
        });
        this.repository.store(todos);
        return true;
      }
      case 'TOGGLE_ALL_COMMAND': {
        const todos = this.repository.load().map((it) => ({ ...it, completed: message.completed }));
        this.repository.store(todos);
        return true;
      }
      case 'TOGGLE_COMMAND': {
        const todos = this.repository
          .load()
          .map((it) => (message.id != it.id ? it : { ...it, completed: !it.completed }));
        this.repository.store(todos);
        return true;
      }
      case 'DESTROY_COMMAND': {
        const todos = this.repository.load().filter((it) => message.id != it.id);
        this.repository.store(todos);
        return true;
      }
      case 'EDIT_COMMAND': {
        const todos = this.repository.load().map((it) => (message.id != it.id ? it : { ...it, title: message.title }));
        this.repository.store(todos);
        return true;
      }
      case 'CLEAR_COMPLETED_COMMAND': {
        const todos = this.repository.load().filter((it) => !it.completed);
        this.repository.store(todos);
        return true;
      }
      case 'TODO_LIST_QUERY': {
        const todos = this.repository.load();
        const result: TodoListQueryResult = { todos };
        return result;
      }
      default:
        return true;
    }
  }
}
