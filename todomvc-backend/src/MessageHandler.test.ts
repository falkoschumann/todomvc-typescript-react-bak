import { Todo } from 'todomvc-contract';

import { TodoRepository } from './ports';
import { MessageHandler } from './MessageHandler';

let todosTestData: readonly Todo[];

let messageHandler: MessageHandler;

beforeEach(() => {
  todosTestData = [
    {
      id: '119e6785-8ffc-42e0-8df6-dbc64881f2b7',
      title: 'Taste JavaScript',
      completed: true,
    },
    {
      id: 'd2f7760d-8f03-4cb3-9176-06311cb89993',
      title: 'Buy a unicorn',
      completed: false,
    },
  ];
  const repository: TodoRepository = {
    load: () => todosTestData,
    store: (todos: readonly Todo[]) => (todosTestData = todos),
  };
  messageHandler = new MessageHandler(repository);
});

test('New todo command', () => {
  const result = messageHandler.handle({ type: 'NEW_TODO_COMMAND', title: 'Foobar' });

  expect(result).toBe(true);
  expect(todosTestData.length).toEqual(3);
  expect(todosTestData[2].id).not.toBeNull();
  expect(todosTestData[2].title).toEqual('Foobar');
  expect(todosTestData[2].completed).toBe(false);
});

test('Toggle all command', () => {
  const result = messageHandler.handle({ type: 'TOGGLE_ALL_COMMAND', completed: true });

  expect(result).toBe(true);
  expect(todosTestData).toEqual([
    {
      id: '119e6785-8ffc-42e0-8df6-dbc64881f2b7',
      title: 'Taste JavaScript',
      completed: true,
    },
    {
      id: 'd2f7760d-8f03-4cb3-9176-06311cb89993',
      title: 'Buy a unicorn',
      completed: true,
    },
  ]);
});

test('Toggle command', () => {
  const result = messageHandler.handle({ type: 'TOGGLE_COMMAND', id: 'd2f7760d-8f03-4cb3-9176-06311cb89993' });

  expect(result).toBe(true);
  expect(todosTestData).toEqual([
    {
      id: '119e6785-8ffc-42e0-8df6-dbc64881f2b7',
      title: 'Taste JavaScript',
      completed: true,
    },
    {
      id: 'd2f7760d-8f03-4cb3-9176-06311cb89993',
      title: 'Buy a unicorn',
      completed: true,
    },
  ]);
});

test('Destroy command', () => {
  const result = messageHandler.handle({ type: 'DESTROY_COMMAND', id: '119e6785-8ffc-42e0-8df6-dbc64881f2b7' });

  expect(result).toBe(true);
  expect(todosTestData).toEqual([
    {
      id: 'd2f7760d-8f03-4cb3-9176-06311cb89993',
      title: 'Buy a unicorn',
      completed: false,
    },
  ]);
});

test('Edit command', () => {
  const result = messageHandler.handle({
    type: 'EDIT_COMMAND',
    id: 'd2f7760d-8f03-4cb3-9176-06311cb89993',
    title: 'Foobar',
  });

  expect(result).toBe(true);
  expect(todosTestData).toEqual([
    {
      id: '119e6785-8ffc-42e0-8df6-dbc64881f2b7',
      title: 'Taste JavaScript',
      completed: true,
    },
    {
      id: 'd2f7760d-8f03-4cb3-9176-06311cb89993',
      title: 'Foobar',
      completed: false,
    },
  ]);
});

test('Clear completed command', () => {
  const result = messageHandler.handle({ type: 'CLEAR_COMPLETED_COMMAND' });

  expect(result).toBe(true);
  expect(todosTestData).toEqual([
    {
      id: 'd2f7760d-8f03-4cb3-9176-06311cb89993',
      title: 'Buy a unicorn',
      completed: false,
    },
  ]);
});

test('Todo list query', () => {
  const result = messageHandler.handle({ type: 'TODO_LIST_QUERY' });

  expect(result).toEqual({
    todos: [
      {
        id: '119e6785-8ffc-42e0-8df6-dbc64881f2b7',
        title: 'Taste JavaScript',
        completed: true,
      },
      {
        id: 'd2f7760d-8f03-4cb3-9176-06311cb89993',
        title: 'Buy a unicorn',
        completed: false,
      },
    ],
  });
});
