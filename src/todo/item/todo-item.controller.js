const $inject = [];

const todoItemController = function() {
  /**
   * ============================
   * Private properties
   */
  const $ctrl = this;

  const _onInit = () => {
    $ctrl.editing = false;
  };

  const _enableEditing = () => {
    $ctrl.editing = true;
  };

  const _deleteTodo = () => {
    // Call parent
    $ctrl.onDelete({
      $event: {
        index: $ctrl.index
      }
    });
  };

  const _updateTodo= () => {
    // Call parent
    $ctrl.onUpdate({
      $event: {
        index: $ctrl.index,
        todo: {
          description: $ctrl.description
        }
      }
    });

    $ctrl.editing = false;
  };

  const _toggleTodo = () => {
    // Call parent
    $ctrl.onToggle({
      $event: {
        index: $ctrl.index
      }
    });
  };

  /**
   * ============================
   * Extend controller
   */
  $ctrl.$onInit = _onInit;
  $ctrl.enableEditing = _enableEditing;
  $ctrl.deleteTodo = _deleteTodo;
  $ctrl.updateTodo = _updateTodo;
  $ctrl.toggleTodo = _toggleTodo;
};

todoItemController.$inject = $inject;

export default todoItemController;
