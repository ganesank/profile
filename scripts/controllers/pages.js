'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
    .controller('PageCtrl', function ($scope, $location, $state, $stateParams, blogList, $sce, $filter, $q) {
        $scope.$state = $state;
        $scope.pageurl = $stateParams.pageurl;
        console.log("pageurl " + $scope.pageurl);
        $('.wp1').waypoint(function () {
            $('.wp1').addClass('animated fadeInLeft');
        }, {
            offset: '100%'
        });
        $scope.renderHtml50 = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };
        $scope.renderHtml = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };

        if ($stateParams.pageurl) {
            console.log("Category List " + $stateParams.pageurl);
            blogList.getpageData($stateParams.pageurl, function (pageContent) {
                $scope.pageContent = pageContent;
                $scope.pageData = $filter('filter')($scope.pageContent, {
                    url: $stateParams.pageurl
                })[0];
                console.log("Category List " + pageContent);


            });
        }

    });