export const todos = {
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 3, text: '...', done: true },
    ],
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done),
    doneTodosCount: (state, getters) => getters.doneTodos.length,
  },
};
