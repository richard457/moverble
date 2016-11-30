var App = angular.module("app", ["ngRoute", "ui.router", "ui.bootstrap"])
    .config(['$sceProvider', '$httpProvider', '$locationProvider', function ($sceProvider, $httpProvider, $locationProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.post.Accept = 'application/json, text/javascript';
        $httpProvider.defaults.headers.post.Accept = 'application/json, text/javascript';
        // $httpProvider.defaults.headers.common.authorization = 'Bearer WiFBDwFHxWQy2HEK6ZGpXB8cOfkYw4ORnIOVrBMZ';
        $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');
        $httpProvider.defaults.useXDomain = true;
        $sceProvider.enabled(false);

        // $locationProvider.html5Mode({
        //   enabled: true,
        //   requireBase: true
        // });
        // $locationProvider.html5Mode(true);

    }])
    .constant('DEBUG', true)
    .run(['$rootScope', '$log', '$location', '$stateParams', function ($rootScope, $log, $location, $stateParams) {
        $rootScope.endPoint = 'http://localhost:8000';
    }])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('Home', {
                url: "/Clients",
                templateUrl: '/views/clients.html',
                controller: 'ClientController'
            })
            .state('Details', {
                url: "/Client/:clientId",//make this tu be numbers only!
                templateUrl: '/views/clientDetails.html',
                controller: 'ClientController'
            });
        $urlRouterProvider.when('/home', '/home').otherwise('/Clients');
    }]);
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
angular.module('app').service('Client', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {

    this.addClient = function (data) {
        var differed = $q.defer();
        //down endpoint return all files I own
        $http.post($rootScope.endPoint + '/clients', data)
            .success(function (response) {
                differed.resolve(response);
            })
            .error(function (error) {
                differed.reject(error);
            });
        return differed.promise;
    };
    return this;
}]);
//# sourceMappingURL=all.js.map
