(function(){
    angular.module('NoteWrangler')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/notes', {
                templateUrl: '/templates/pages/notes/index.html',
                controller: 'NotesIndexController',
                controllerAs: 'notesIndexController'
            })
            .when('/notes/new', {
                templateUrl: '/templates/pages/notes/new.html',
                controller: 'NoteNewController',
                controllerAs: 'noteNewController'
            })
            .when('/notes/:id', {
                templateUrl: '/templates/pages/notes/show.html',
                controller: 'NoteShowController',
                controllerAs: 'noteShowController'
            })
            .when('/users', {
                templateUrl: '/templates/pages/users/index.html',
                controller: 'UsersIndexController',
                controllerAs: 'usersIndexController'
            })
            .otherwise({redirectTo: '/notes'});
    });

}());