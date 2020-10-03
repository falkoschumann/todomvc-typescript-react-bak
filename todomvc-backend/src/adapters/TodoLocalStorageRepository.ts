import { Todo } from "todomvc-contract";

import { TodoRepository } from "../ports";

export class TodoLocalStorageRepository implements TodoRepository {
  constructor(private key: string = 'react-todos') { }
  load(): readonly Todo[] {
    const json = window.localStorage.getItem(this.key);
    if (json == null) {
      return [];
    }
    return JSON.parse(json);
  }

  store(todoList: readonly Todo[]): void {
    window.localStorage.setItem(this.key, JSON.stringify(todoList))
  }
}
