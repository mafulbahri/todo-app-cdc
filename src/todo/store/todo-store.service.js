import mobx from 'mobx';

const todoStore = () => {
  const todoList = mobx.observable([]);

  const _getAllTodos = () => {
    return todoList;
  };

  const _addTodo = (todo) => {
    const newTodo = Object.assign({}, todo, {
      completed: false
    });

    todoList.push(newTodo);
  };

  const _deleteTodo = (index) => {
    todoList.splice(index, 1);
  };

  const _updateTodo = (index, todo) => {
    todoList[index].description = todo.description;
  };

  const _toggleTodo = (index) => {
    todoList[index].completed = !todoList[index].completed;
  };

  const _toggleAllTodos = () => {
    todoList.forEach((item) => {
      item.completed = !item.completed;
    });
  };

  const _clearCompleted = () => {
    var filteredArray = todoList.filter((item) => {
      return !item.completed;
    });

    todoList.replace(filteredArray);
  };

  return {
    getAllTodos: _getAllTodos,
    addTodo: _addTodo,
    deleteTodo: _deleteTodo,
    updateTodo: _updateTodo,
    toggleTodo: _toggleTodo,
    toggleAllTodos: _toggleAllTodos,
    clearCompleted: _clearCompleted,
  };
};

export default todoStore;
