angular.module('app', ['components'])

    .controller('BeerCounter', function($scope, $locale) {
        $scope.beers = [0, 1, 2, 3, 4, 5, 6];
        if ($locale.id == 'en-us') {
            $scope.beerForms = {
                0: 'no beers',
                one: '{} beer',
                other: '{} beers'
            };
        } else if($locale.id == 'fr-fr') {
            $scope.beerForms = {
                0: 'pas de bière',
                one: '{} bière',
                other: '{} bières'
            };
        } else {
            $scope.beerForms = {
                0: 'žiadne pivo',
                one: '{} pivo',
                few: '{} pivá',
                other: '{} pív'
            };
        }
    });