'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
    .controller('HomeCtrl', function ($scope, $rootScope, $location, $state, $stateParams, TempStorage, blogList, $sce, $filter, $q) {


		$scope.currentTime = new Date();
		$scope.currentmonth = $scope.currentTime.getMonth() + 1;
		$scope.currentday = $scope.currentTime.getDate();
		$scope.currentyear = $scope.currentTime.getFullYear()

        var SocialAround = {
            init: function () {
                this.arrange();
            },
            arrange: function () {
                if ("TransitionEvent" in window || "WebKitTransitionEvent" in window || "OTransitionEvent" in window) {
                    $(".home-main").addClass("animate")
                } else {
                    $(".triggers li").css("opacity", "1");
                }
            }
        };
        //Home Social
        blogList.getHomeSocialList('homePage', function (response) {
			$scope.homeContent = response;
			$scope.homeSocial = response[0];
            $scope.homeSocialGet = $scope.homeSocial.value;
			
			$scope.homeAbout = response[1];
			$scope.homeService = response[2];
			$scope.homeBlog = response[3];
			$scope.homeContact= response[4];
			
			
			
            $scope.homeSocialGetTotal = $scope.homeSocialGet.length;
            TempStorage.homeSocialCount = $scope.homeSocialGet.length - 1;
            $scope.homeSocialDataSet = [];
            var space = 360 / $scope.homeSocialGetTotal;
            var spacedelay = 0.1;
            angular.forEach($scope.homeSocialGet, function (value, key) {
                var paramsitem = {
                    name: value.name,
                    id: value.id,
                    title: value.title,
                    icon: value.icon,
                    url: value.url,
                    angle: space * key,
                    iangle: 45 - space * key,
                    delay: spacedelay,
                };
                $scope.homeSocialDataSet.push(paramsitem);
                spacedelay = spacedelay + 0.1;
            });

            SocialAround.init();
        });

        function wayPointActivate() {
            if ($('.home-page').hasClass('active-slide')) {}
            if ($('.home-about-mini').hasClass('active-slide')) {
                $('.wp1').waypoint(function () {
                    $('.wp1').addClass('animated fadeInUp');
                }, {
                    offset: '100%'
                });
            }
            if ($('.home-about-page').hasClass('active-slide')) {

                $('.wp2').waypoint(function () {
                    $('.wp2').addClass('animated fadeInUp');
                }, {
                    offset: '100%'
                });

            }
            if ($('.home-blog-page').hasClass('active-slide')) {

                $('.wp3').waypoint(function () {
                    $('.wp3').addClass('animated fadeInUp');
                }, {
                    offset: '100%'
                });

            }
        }

        function menuActivate() {
            if ($('.home-page').hasClass('active-slide')) {
                $('.header-container').removeClass("inverse");
            } else {
                $('.header-container').addClass("inverse");
            }
        }
        var slider = $.fn.fsvs({
            autoPlay: false,
            speed: 1000,
            bodyID: 'fsvs-body',
            selector: '> .slide',
            mouseSwipeDisance: 40,
            afterSlide: function () {
                wayPointActivate();
            },
            beforeSlide: function () {
                menuActivate();
            },
            endSlide: function () {},
            mouseWheelEvents: true,
            mouseWheelDelay: false,
            mouseDragEvents: false,
            touchEvents: false,
            arrowKeyEvents: false,
            pagination: false,
            nthClasses: 2,
            detectHash: false
        });

        $scope.gotoElement = function (eID) {
            anchorSmoothScroll.scrollTo(eID);
        };
        changeHeight();


        $scope.renderHtml50 = function (html_code) {
            return $sce.trustAsHtml(html_code);
        };
        
        blogList.getPostList('posts', function (homeBlogData) {
            $scope.homeBlogData = homeBlogData;
        });

    });