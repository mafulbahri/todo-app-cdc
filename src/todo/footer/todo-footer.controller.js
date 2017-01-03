const $inject = [];

const todoFooterController = function() {
  /**
   * ============================
   * Private properties
   */
  const $ctrl = this;

  const _clearCompleted = () => {
    // Call parent
    $ctrl.onClearCompleted();
  };

  /**
   * ============================
   * Extend controller
   */
  $ctrl.clearCompleted = _clearCompleted;
};

todoFooterController.$inject = $inject;

export default todoFooterController;
