angular.module('NoteWrangler')
    .directive('nwCard', ['$sce', function($sce){
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/nw-card.html',
            scope: {
                icon: '=',
                title: '=',
                description: '=',
                id: '=',
                type: '@'
            },
            link: function(scope, element, attrs){
                scope.description = $sce.trustAsHtml(markdown.toHTML(scope.description));

                // $(element).find('a.see-description').click(function(){
                //     $(element).find('> p').toggleClass("hidden");
                //     console.log(attrs.icon);
                //     console.log(attrs.title);
                //     console.log(attrs.description);
                // });
            }
        };
    }]);