import angular from 'angular';

import todoItemComponent from './item/todo-item.component';
import todoListComponent from './list/todo-list.component';
import todoFormComponent from './form/todo-form.component';
import todoFooterComponent from './footer/todo-footer.component';
import todoContainerComponent from './container/todo-container.component';
import todoStoreService from './store/todo-store.service';

angular
  .module('todo.components', [])
  .component('todoItem', todoItemComponent)
  .component('todoList', todoListComponent)
  .component('todoForm', todoFormComponent)
  .component('todoFooter', todoFooterComponent)
  .component('todo', todoContainerComponent)
  .factory('todoStore', todoStoreService);
