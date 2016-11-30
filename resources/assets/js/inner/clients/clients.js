angular.module('app').controller('ClientController', ['$scope','Client','$window','$stateParams',function ($scope,Client,$window,$stateParams) {

        $scope.addClient = function(entry){
            Client.addClient(entry).then(function(response) {
                console.log(response);
                if(response.status === 200)
                     $window.location.href = '#/Client/'+response.clientId;
            }).catch();
            
        };
        $scope.clientId = $stateParams.clientId;


}]);