

var mongoose = require('mongoose'),
    Produto = mongoose.model('Produto');

angular.module('project')

.controller('CadastroDeprodutoCtrl', function ($scope) {


	$scope.save = function () {
		
		var produtoS = JSON.stringify($scope.produto);
		

		var produto = new Produto(JSON.parse(produtoS));

		console.log(produto);

		produto.save(function (err) {
			if(err) {
				alert(err);
				return;
			}

			Produto.find(function (err, data) {
				if(err) {
					alert(err);
					return;
				}
				alert(data);
			});

		});

		alert('Produto '+JSON.stringify($scope.produto)+' cadastrado com sucesso !!!');

		$scope.produto = undefined;
	}	

});