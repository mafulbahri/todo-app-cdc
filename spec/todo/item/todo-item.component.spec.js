describe('Component: todo-item', () => {
  let element;
  let scope;

  beforeEach(angular.mock.module('todo.components'));
  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    // Here we are passing the actual bindings to the component
    const bindings = {
      index: 0,
      description: 'Do it!',
      completed: false,
      onDelete: jasmine.createSpy('onDelete'),
      onUpdate: jasmine.createSpy('onUpdate'),
      onToggle: jasmine.createSpy('onToggle'),
    };

    scope = angular.extend($rootScope.$new(), {
      todo: bindings,
    });

    element = angular.element(`
      <todo-item
        index="todo.index"
        description="todo.description"
        completed="todo.completed"
        on-delete="todo.onDelete($event)"
        on-update="todo.onUpdate($event)"
        on-toggle="todo.onToggle($event)">
      </todo-item>
    `);

    element = $compile(element)(scope);
    scope.$apply();
  }));

  describe('element', () => {
    it('should be displayed to user', () => {
      const label = element.find('label');
      const deleteButton = element.find('button');
      const editForm = element.find('form');

      expect(label.text()).toBe('Do it!');
      expect(deleteButton).toBeDefined();
      expect(editForm).toBeDefined();
    });  
  })

  describe('actions', () => {
    it('onDelete should be called when delete button is clicked', () => {
      element.find('button')[0].click();
      scope.$digest();
      expect(scope.todo.onDelete).toHaveBeenCalled();
    });
  });
});
