import angular from 'angular';
import 'angular-ui-router';

import config from './app.config';
import './todo';

/**
 * Stylesheet
 */
import './styles/main.less';

angular
  .module('todoApp', [
    'ui.router',
    'todo.components',
  ])
  .config(config);
