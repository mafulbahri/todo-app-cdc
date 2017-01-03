import todoListController from './todo-list.controller.js';
import todoListView from './todo-list.html';

const todoListComponent = {
  bindings: {
    list: '<',
    onDelete: '&',
    onUpdate: '&',
    onToggle: '&'
  },
  controller: todoListController,
  template: todoListView,
};

export default todoListComponent;
