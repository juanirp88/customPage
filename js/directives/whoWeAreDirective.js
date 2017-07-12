var app = angular.module('customPage');

app.directive('whoWeAreDirective', function(whoWeAreService){
    return {
        restrict: "E",
        templateUrl: 'js/templates/whoWeAreDirective.html',
        controller: function($scope) {
            var whoWeAreDir = this;
            whoWeAreDir.whoList = {};
            var promise = whoWeAreService.getText();
            promise.then(function(whoData){
                whoWeAreDir.whoList = whoData.data;
            });

            $scope.whoWeAreDir = whoWeAreDir;
        }
    }
});
