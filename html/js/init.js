
var model = require('./js/app/connect.js');
var model = require('./js/app/venda.js');
var model = require('./js/app/produto.js');


angular.module('project', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
    	.when('/', {
            controller: 'PDVCtrl',
            templateUrl: 'partials/pdv.html'
        })
        .when('/login', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/login.html'
        })
        .when('/cadastro-de-produto', {
            controller: 'CadastroDeprodutoCtrl',
            templateUrl: 'partials/cadastroDeProduto.html'
        })        
        .otherwise({
            redirectTo: '/'
        });
});
