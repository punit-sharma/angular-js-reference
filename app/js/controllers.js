/*
	Developer: Hafiz Faraz Mukhtar
	Blog:  	   http://blog.hfarazm.com/ 
	Contact:   http://www.fb.com/h.farazmukhtar/
	Liscense:  MIT license 2014
*/

var GuitarControllers = angular.module("GuitarControllers", []);

GuitarControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
			$http.get('js/data.json').success (function(data){
				$scope.guitarVariable = data;
				$scope.orderGuitar = 'price';
			}); 
		}]
);

GuitarControllers.controller("DetailsController", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{    
			$http.get('js/data.json').success (function(data){
				$scope.guitarVariable = data;
				$scope.whichGuitar = $routeParams.guitarID;
			}); 
		}]
);