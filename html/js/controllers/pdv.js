


var mongoose = require('mongoose'),
    Venda = mongoose.model('Venda');

angular.module('project')

.controller('PDVCtrl', function ($scope) {

  
	Venda.find().exec(function (err, vendas) {

	  if (err) return console.error(err);
	  
	  $scope.venda = vendas[0];

	  $scope.$apply();
	  $scope.$digest();
	});    
})