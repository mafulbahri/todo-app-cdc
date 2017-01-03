const $inject = [];

const todoFormController = function() {
  /**
   * ============================
   * Private properties
   */
  const $ctrl = this;

  const _resetTodo = () => {
    $ctrl.newTodo = {};
  }

  const _onInit = () => {
    $ctrl.newTodo = {};
    _resetTodo();
  };

  const _submitForm = () => {
    // Call parent
    $ctrl.onSubmit({
      $event: {
        todo: $ctrl.newTodo
      }
    });

    _resetTodo();
  };

  /**
   * ============================
   * Extend controller
   */
  $ctrl.$onInit = _onInit;
  $ctrl.submitForm = _submitForm;
};

todoFormController.$inject = $inject;

export default todoFormController;
