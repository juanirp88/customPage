var app = angular.module('customPage');

app.service('contactUsService', function($http, $q) {

    var text = {};
    var deferred = $q.defer();

    $http.get('js/json/contactUsJson.json').then(function(data) {
        deferred.resolve(data);
    });

    this.getText = function(){
        return deferred.promise;
    };

});