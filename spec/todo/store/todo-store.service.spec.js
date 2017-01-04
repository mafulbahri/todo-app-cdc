describe('TodoStore service', () => {
  var todoStore;  

  // Instantiate Angular JS context / load our todo.components module
  beforeEach(angular.mock.module('todo.components'));

  // Get instance of todoStrore with mocked dependencies from Angular JS context 
  // (set our injected todoStore factory (_todoStore_) to our local todoStore variable)
  beforeEach(angular.mock.inject(function(_todoStore_) {
    todoStore = _todoStore_;
  }));

  describe('nothing to do', () => {
    it('should exist', () => {
      expect(todoStore).toBeDefined();
    });

    it('should contain empty todos', () => {
      expect(todoStore.getAllTodos().length).toBe(0);
    });

    it('should add todo', () => {
      todoStore.addTodo({
        description: 'First thing todo ever!',
      });
      const todoList = todoStore.getAllTodos();

      expect(todoList.length).toBe(1);
      expect(todoList[0].description).toBe('First thing todo ever!');
      expect(todoList[0].completed).toBe(false);
    }); 
  });
  

  describe('one thing todo', () => {
    beforeEach(() => {
      todoStore.addTodo({
        description: 'Do it!',
      });
    });

    it('todo list should not be empty', () => {
      expect(todoStore.getAllTodos().length).not.toBe(0);
    });

    it('should toggle todo item', function () {
      const todoList = todoStore.getAllTodos();
      expect(todoStore.getAllTodos()[0].completed).toBe(false);

      todoStore.toggleTodo(0);
      expect(todoStore.getAllTodos()[0].completed).toBe(true);

      todoStore.toggleTodo(0);
      expect(todoStore.getAllTodos()[0].completed).toBe(false);
    });

    it('should update todo item', () => {
      todoStore.updateTodo(0, {
        description: 'Description updated!',
      });

      expect(todoStore.getAllTodos()[0].description).toBe('Description updated!');
    });

    it('should delete todo item', function() {
      expect(todoStore.getAllTodos().length).not.toBe(0);

      todoStore.deleteTodo(0);
      expect(todoStore.getAllTodos().length).toBe(0);
    });
  });

  describe('many things todo', () => {
    beforeEach(() => {
      todoStore.addTodo({
        description: 'Do it!',
      });
      todoStore.addTodo({
        description: 'Do it twice!',
      });
    });

    it('todo list should not be empty', () => {
      expect(todoStore.getAllTodos().length).not.toBe(0);
    });

    it('should toggle all todos', () => {
      const todoList = todoStore.getAllTodos();

      todoList.forEach((todo) => {
        expect(todo.completed).toBe(false);
      });

      todoStore.toggleAllTodos();

      todoList.forEach((todo) => {
        expect(todo.completed).toBe(true);
      });
    });

    it('should clean completed todos', () => {
      const length = todoStore.getAllTodos().length;

      todoStore.toggleTodo(0);
      todoStore.clearCompleted();

      expect(todoStore.getAllTodos().length).not.toBe(length);
    });
  });
});
