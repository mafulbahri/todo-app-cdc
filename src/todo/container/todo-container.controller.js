const mobx = require('mobx');
const $inject = [
  'todoStore',
  '$state',
];

const todoContainerController = function(todoStore, $state) {
  /**
   * ============================
   * Private properties
   */
  const $ctrl = this;

  const _getListBasedOnFilter = (list, filter) => {
    if (!filter) return list;

    const filterMap = {
      all: (item) => { return true; },
      active: (item) => {
        return !item.completed
      },
      completed: (item) => {
        return item.completed
      }
    };

    return list.filter(filterMap[filter]);
  }

  const _dispose = mobx.autorun(() => {
    const todoList = todoStore.getAllTodos();
    const filter = $state.current.resolve.filter();
    $ctrl.todoList = _getListBasedOnFilter(todoList, filter);
    $ctrl.incompletedItems = _getListBasedOnFilter(todoList, 'active').length;
    // console.log('%cNEW STATE:', 'font-weight: bold');
    // console.log(JSON.stringify(mobx.toJS(todoList), null, 2));
  });

  const _onDestroy = () => {
    _dispose();
  };

  const _addTodo = (event) => {
    todoStore.addTodo(event.todo);
  };

  const _deleteTodo = (event) => {
    todoStore.deleteTodo(event.index);
  };

  const _updateTodo = (event) => {
    todoStore.updateTodo(event.index, event.todo);
  };

  const _toggleTodo = (event) => {
    todoStore.toggleTodo(event.index);
  };

  const _toggleAllTodos = () => {
    todoStore.toggleAllTodos();
  };

  const _clearCompleted = () => {
    todoStore.clearCompleted();
  };

  /**
   * ============================
   * Extend controller
   */
  $ctrl.$onDestroy = _onDestroy;
  $ctrl.addTodo = _addTodo;
  $ctrl.deleteTodo = _deleteTodo;
  $ctrl.updateTodo = _updateTodo;
  $ctrl.toggleTodo = _toggleTodo;
  $ctrl.toggleAllTodos = _toggleAllTodos;
  $ctrl.clearCompleted = _clearCompleted;
};

todoContainerController.$inject = $inject;

export default todoContainerController;
