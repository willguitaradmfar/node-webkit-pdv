
var fs = require('fs');   


angular.module('project')

.controller('LoginCtrl', function ($scope) {
  
    fs.readdir('./', function (err, data) {
        if(err) throw err;

        $scope.files = data;
        console.log(data);
        $scope.$apply();
    });
})
