(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(['$routeProvider', '$logProvider', function ($routeProvider, $logProvider) {

        $logProvider.debugEnabled(true);

        $routeProvider
            .when('/', {
                templateUrl: '/app/templates/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            //.when('/AddBook', {
            //    templateUrl: '/app/templates/addBook.html',
            //    controller: 'AddBookController',
            //    controllerAs: 'bookAdder'
            //})
            //.when('/EditBook/:bookID', {
            //    templateUrl: '/app/templates/editBook.html',
            //    controller: 'EditBookController',
            //    controllerAs: 'bookEditor'
            //})
            .otherwise('/');

    }]);


}());