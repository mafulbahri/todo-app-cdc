const $inject = [
  '$stateProvider',
  '$urlRouterProvider',
];

const config = ($stateProvider, $urlRouterProvider) => {
  const _defaultRoute = '/all';
  $urlRouterProvider
    .when('', _defaultRoute)
    .otherwise(_defaultRoute);

  $stateProvider
    .state('todo', {
      abstract: true,
      template: '<ui-view id="main-todo"></ui-view>'
    })
    .state('todo.all', {
      url: '/all',
      template: '<todo></todo>',
      resolve: {
        filter: () => {
          return 'all'
        }
      }
    })
    .state('todo.active', {
      url: '/active',
      template: '<todo></todo>',
      resolve: {
        filter: () => {
          return 'active'
        }
      }
    })
    .state('todo.completed', {
      url: '/completed',
      template: '<todo></todo>',
      resolve: {
        filter: () => {
          return 'completed'
        }
      }
    });
};

config.$inject = $inject;

export default config;
