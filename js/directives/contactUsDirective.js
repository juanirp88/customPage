var app = angular.module('customPage');

app.directive('contactUsDirective', function(contactUsService){
    return {
        restrict: "E",
        templateUrl: 'js/templates/contactUsDirective.html',
        controller: function ($scope) {
            var contactUsDir = this;
            contactUsDir.contact = {};
            var promise = contactUsService.getText();
            promise.then(function(contactData) {
                contactUsDir.contact = contactData.data;
            });

            $scope.contactUsDir = contactUsDir;

        }

    }
});

