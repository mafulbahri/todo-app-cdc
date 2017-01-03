import todoItemController from './todo-item.controller.js';
import todoItemView from './todo-item.html';

const todoItemComponent = {
  bindings: {
    index: '<',
    description: '<',
    completed: '<',
    onDelete: '&',
    onUpdate: '&',
    onToggle: '&',
  },
  controller: todoItemController,
  template: todoItemView,
};

export default todoItemComponent;
