'use strict';
angular.module('yapp')
    .controller('BlogCtrl', function ($scope, $rootScope, $location, $state, $stateParams, blogList, $sce, $filter, $q) {
        $scope.$state = $state;
        $scope.catListItemID = $stateParams.catlistid;
        $scope.catListItemContentID = $stateParams.catlistitemid;
        $scope.postListData = [];
        $scope.selectedBlogId;
        $scope.renderHtml50 = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };
        $scope.renderHtml = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };
        blogList.getBlogCatList('all', function (catListData) {
            $scope.categoryListData = catListData;
            if (($stateParams.catlistid != "") && ($stateParams.catlistid != undefined)) {

                if ($stateParams.catlistid == "posts") {
                    console.log("BLCAT ALL  " + $stateParams.catlistid);
                    $scope.BlogTitle = "ALL POSTS";
                    $scope.BlogDesc = "ALL POSTS DESCRIPTION HERE";
                    blogList.getPostList("posts", function (postListData) {
                        $scope.postListData = postListData;
                    });
                } else {
                    angular.forEach($scope.categoryListData, function (value, key) {
                        if (value.url == $stateParams.catlistid) {
                            console.log("BLCAT " + $stateParams.catlistid + "~" + value.id);
                            $scope.BlogTitle = value.name;
                            $scope.BlogDesc = value.desc;
                            $scope.selectedBlogId = value.id;
                            blogList.getPostList($scope.selectedBlogId, function (postListData) {
                                $scope.postListData = postListData;
                            });

                        }
                        var setddwidth = $(".use-btn").width() + 38;
                        $(".blog-drop").css("min-width", setddwidth);

                    });

                }
            }
        });


        if ($stateParams.postid) {
            console.log("BLPOST " + $stateParams.postid);
            blogList.getpostData($stateParams.postid, function (postData) {
                $scope.postData = postData;
                $scope.catListItem = $filter('filter')($scope.postData, {
                    url: $stateParams.postid
                })[0];
            });
        }

    });