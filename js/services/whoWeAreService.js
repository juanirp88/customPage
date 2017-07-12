/**
 * Created by juanruizposse on 7/11/17.
 */
var app = angular.module('customPage');

app.service('whoWeAreService', function($http, $q) {

    var text = {};
    var deferred = $q.defer();

    $http.get('js/json/whoWeAreJson.json').then(function(data) {
        deferred.resolve(data);
    });

    this.getText = function(){
        return deferred.promise;
    };

});