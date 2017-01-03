import todoFormController from './todo-form.controller.js';
import todoFormView from './todo-form.html';

const todoFormComponent = {
  bindings: {
    onSubmit: '&'
  },
  controller: todoFormController,
  template: todoFormView,
};

export default todoFormComponent;
