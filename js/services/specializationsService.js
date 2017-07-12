/**
 * Created by juanruizposse on 7/11/17.
 */
var app = angular.module('customPage');

app.service('specializationsService', function($http, $q) {

    var text = {};
    var deferred = $q.defer();

    $http.get('js/json/specializationsJson.json').then(function(data) {
        deferred.resolve(data);
    });

    this.getText = function(){
        return deferred.promise;
    };

});