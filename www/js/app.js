var app = angular.module('hello-phonegap', ['ngMaterial']);

app.controller('ctrl-title', function($scope) {
    $scope.title = 'Hello Phonegap';
});

app.controller('ctrl-main', function($scope) {
    var imagePath = 'img/100-2.jpeg';
    $scope.todos = [];
    for (var i = 0; i < 15; i++) {
        $scope.todos.push({
            face: imagePath,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            notes: "I'll be in your neighborhood doing errands."
        });
    }
});