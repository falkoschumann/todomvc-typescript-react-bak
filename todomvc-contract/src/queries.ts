import { Todo } from './types';

export type TodoListQuery = Readonly<{
  type: 'TODO_LIST_QUERY';
}>;

export type TodoListQueryResult = Readonly<{
  todos: readonly Todo[];
}>;
