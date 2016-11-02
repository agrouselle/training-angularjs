(function(){
    angular.module('NoteWrangler')
        .directive('title', function($timeout){
            return {
                restrict: 'A',
                link: function(scope, element){
                    $timeout(function(){
                        element.tooltip({container: 'body'})
                    })

                    scope.$on('$destroy', function(){
                        element.tooltip('destroy')
                    })
                }
            }
        })
}())