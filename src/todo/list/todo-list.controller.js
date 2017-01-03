const $inject = [];

const todoListController = function() {
  /**
   * ============================
   * Private properties
   */
  const $ctrl = this;

  const _deleteTodo = (event) => {
    // Call parent
    $ctrl.onDelete({
      $event: {
        index: event.index
      }
    });
  };

  const _updateTodo = (event) => {
    // Call parent
    $ctrl.onUpdate({
      $event: {
        index: event.index,
        todo: event.todo
      }
    });
  };

  const _toggleTodo = (event) => {
    // Call parent
    $ctrl.onToggle({
      $event: {
        index: event.index
      }
    });
  };

  /**
   * ============================
   * Extend controller
   */
  $ctrl.deleteTodo = _deleteTodo;
  $ctrl.updateTodo = _updateTodo;
  $ctrl.toggleTodo = _toggleTodo;
};

todoListController.$inject = $inject;

export default todoListController;
