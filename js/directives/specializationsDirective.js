var app = angular.module('customPage');

app.directive('specializationsDirective', function(specializationsService){
    return {
        restrict: "E",
        templateUrl: 'js/templates/specializationsDirective.html',
        controller: function($scope) {
            var specDir = this;
            specDir.specList = {};
            var promise = specializationsService.getText();
            promise.then(function(specData){
                specDir.specList = specData.data;
            });

            $scope.specDir = specDir;
        }
    }
});
