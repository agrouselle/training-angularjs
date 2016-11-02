(function(){
    angular.module('NoteWrangler')
        .factory('Category', function CategoryFactory($http){
            var apiUrl = 'http://localhost:3000/api';

            return {
                all: function(){ return $http.get(apiUrl + '/categories') }
            }
        })
}())