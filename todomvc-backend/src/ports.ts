import { Todo } from 'todomvc-contract';

export interface TodoRepository {
  load(): readonly Todo[];
  store(todoList: readonly Todo[]): void;
}
