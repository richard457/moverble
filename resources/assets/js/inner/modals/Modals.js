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