angular.module('notredemian-doc-list',
['ngRoute', 'notredemian-doc-list.controllers', 'notredemian-doc-list.services'])

.config(['$routeProvider', function($routeProvider) {
     // Routes will be here
     $routeProvider
     .when('/', {
        templateUrl: 'doc-list/doc-list.html',
        controller: 'DocListController'
    })
    .otherwise({
        redirectTo: '/'
    });
}])
