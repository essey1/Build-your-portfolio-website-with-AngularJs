var app = angular.module("portfolioSite", []);

app.controller("appController", ($scope) => {

    $scope.fullName = "Spongebob";
    $scope.email = "email@email.com";

    $scope.aboutMe = [
        "Cook",
        "Patty Flipper",
        "Best Friend",
        "Adventurous"
    ];

    $scope.thumbnails = [
        "aurora.jpg",
        "milkyway.jpg",
        "startrail.jpg"
    ];

});