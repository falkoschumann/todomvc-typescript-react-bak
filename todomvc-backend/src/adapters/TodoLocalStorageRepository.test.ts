import { TodoLocalStorageRepository } from './TodoLocalStorageRepository';

const todoListTestData = [
  {
    id: '119e6785-8ffc-42e0-8df6-dbc64881f2b7',
    title: 'Taste JavaScript',
    completed: true
  },
  {
    id: 'd2f7760d-8f03-4cb3-9176-06311cb89993',
    title: 'Buy a unicorn',
    completed: false
  }
];

const todoListStoredString = '[{"id":"119e6785-8ffc-42e0-8df6-dbc64881f2b7","title":"Taste JavaScript","completed":true},{"id":"d2f7760d-8f03-4cb3-9176-06311cb89993","title":"Buy a unicorn","completed":false}]';

const STORAGE_KEY = 'react-todos';

test('load', () => {
  const getItemMock = jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(todoListStoredString);
  const repository = new TodoLocalStorageRepository();

  const todoList = repository.load();

  expect(getItemMock).toBeCalledTimes(1);
  expect(getItemMock).toBeCalledWith(STORAGE_KEY);
  expect(todoList).toEqual(todoListTestData);
});

test('store', () => {
  const setItemMock = jest.spyOn(window.localStorage.__proto__, 'setItem');
  const repository = new TodoLocalStorageRepository();

  repository.store(todoListTestData);

  expect(setItemMock).toBeCalledTimes(1);
  expect(setItemMock).toBeCalledWith(STORAGE_KEY, todoListStoredString);
});
