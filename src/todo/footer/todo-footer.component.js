import todoFooterController from './todo-footer.controller.js';
import todoFooterView from './todo-footer.html';

const todoFooter = {
  bindings: {
    itemsLeft: '<',
    onClearCompleted: '&'
  },
  controller: todoFooterController,
  template: todoFooterView,
};

export default todoFooter;
