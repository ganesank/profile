var $scope, $location;


angular
    .module('yapp')
    .factory('blogList', function ($http, $rootScope) {
        return {
            geHomeList: function (callback) {
                $http({
                    method: 'GET',
                    url: 'content/listofcategories.json',
                    cache: true
                }).success(callback);
            },
            getPostList: function (id, callback) {
                $http({
                    method: 'GET',
                    url: 'http://ganny.in/wp-json/wp/v2/posts' ,
                    cache: true
                }).success(callback).
                error(function (data, status) {
                    console.log("JSON DATA NOT FOUND")
                });

            },
            getBlogCatList: function (id, callback) {

                $http({
                    method: 'GET',
                    url: $rootScope.serverDataPath + 'blogcatlist.php',
                    cache: true
                }).success(callback).
                error(function (data, status) {
                    console.log("JSON DATA NOT FOUND")
                });

            },
            getpostData: function (id, callback) {
                $http({
                    method: 'GET',
                    url: $rootScope.serverDataPath + 'blogpost.php?postis=' + id,
                    cache: true
                }).success(callback).
                error(function (data, status) {
                    console.log("JSON DATA NOT FOUND")
                });
            },
            getHomeAboutList: function (id, callback) {
                $http({
                    method: 'GET',
                    url: 'content/' + id + '.json',
                    cache: true
                }).success(callback).
                error(function (data, status) {
                    console.log("JSON DATA NOT FOUND")
                });

            },
            getHomeSocialList: function (id, callback) {
                $http({
                    method: 'GET',
                    url: 'content/' + id + '.json',
                    cache: true
                }).success(callback).
                error(function (data, status) {
                    console.log("JSON DATA NOT FOUND")
                });

            },
            getpageData: function (id, callback) {
                $http({
                    method: 'GET',
                    url: 'content/' + id + '.json',
                    cache: true
                }).success(callback).
                error(function (data, status) {
                    console.log("JSON DATA NOT FOUND")
                });
            },
			getBlogImage: function (id, callback) {
                $http({
                    method: 'GET',
                    url: 'http://ganny.in/wp-json/wp/v2/media/' + id ,
                    cache: true
                }).success(callback).
                error(function (data, status) {
                    console.log("JSON DATA NOT FOUND")
                });
            }
			
			
        };
    });
angular
    .module('yapp')
    .service('anchorSmoothScroll', function () {

        this.scrollTo = function (eID) {

            // This scrolling function 
            // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

            var startY = currentYPosition();
            var stopY = elmYPosition(eID);
            var distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY);
                return;
            }
            var speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            var step = Math.round(distance / 25);
            var leapY = stopY > startY ? startY + step : startY - step;
            var timer = 0;
            if (stopY > startY) {
                for (var i = startY; i < stopY; i += step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY += step;
                    if (leapY > stopY) leapY = stopY;
                    timer++;
                }
                return;
            }
            for (var i = startY; i > stopY; i -= step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY -= step;
                if (leapY < stopY) leapY = stopY;
                timer++;
            }

            function currentYPosition() {
                // Firefox, Chrome, Opera, Safari
                if (self.pageYOffset) return self.pageYOffset;
                // Internet Explorer 6 - standards mode
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                // Internet Explorer 6, 7 and 8
                if (document.body.scrollTop) return document.body.scrollTop;
                return 0;
            }

            function elmYPosition(eID) {
                var elm = document.getElementById(eID);
                console.log("elm" + eID);
                var y = elm.offsetTop;
                var node = elm;
                while (node.offsetParent && node.offsetParent != document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                }
                return y;
            }

        };

    });
yapp.factory('TempStorage', function () {
    var TempStorage = {
        homeSocialCount: 0
    };
    return TempStorage;
});
/*
yapp.directive('socialHomeComplete1',function(){
		return {
        restrict: 'EA',
		scope: {
            count: '='
        },
        controller: function($scope, TempStorage) {
			//if ($cindex == TempStorage.homeSocialCount)
           // console.log("socialHomeComplete " );
       }
    	}
	});*/
yapp.directive('socialHomeComplete', ['$parse', 'TempStorage', function ($parse, TempStorage) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            //console.log("socialHomeComplete " + parseInt(attrs.count) +" "+ TempStorage.homeSocialCount);
            $(elem).hover(function () {
                var e = $("a", this).data("title");
                var ce = 'hp_' + $(this).data("title");
                $(".home-page").toggleClass(ce);
                $(".description").show().html(e)
            }, function () {
                var ce = 'hp_' + $(this).data("title");
                $(".home-page").removeClass(ce);
                $(".description").hide().html("")
            });

        },
        controller: function ($scope, TempStorage) {

        }

    }


}]);
yapp.directive('appdate', [function () {
    return {
        restrict: 'EA',
        transclude: true, // Grab the contents to be used as the heading
        template: '', // In effect remove this element!
        replace: true,
        link: function (scope, element, attr, controller) {
            scope.$watch(function () {}, function (heading) {
                var dateval = element.attr("title");
                var datearray = dateval.split('-');
                var datereturn = '';
                var simonth = parseInt(datearray[1]);;
                var bmonth = ["Jan", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
                var smonth = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                datereturn = datearray[2] + " " + smonth[simonth];
                element.html('');
                element.append(datereturn);


            });
        }
    };
}]);
yapp.directive('blcat', ['blogList', function (blogList) {
    return {
        restrict: 'EA',
        transclude: true, // Grab the contents to be used as the heading
        template: '', // In effect remove this element!
        replace: true,
        link: function (scope, element, attr, controller) {
            scope.$watch(function () {}, function (heading) {
                var catnumbers = element.attr("title");
                var catnumbersarri = catnumbers.split(',');
                console.log(" fgfgf " + catnumbers)
                blogList.getBlogCatList('posts', function (catListData) {
                    var categoryListArray = catListData;
                    var categoryListreturn = '';
                    angular.forEach(categoryListArray, function (value, key) {
                        for (var tp = 0; tp <= categoryListArray.length; tp++) {
                            console.log(value.id + " fgfgf " + catnumbersarri[tp])
                            if (value.id == catnumbersarri[tp]) {
                                categoryListreturn += '<a href="#/blog/' + value.url + '" class="blogcatlink"><i class="fa fa-folder-open-o"></i>  ' + value.name + '</a>';
                                element.html('');
                                element.append(categoryListreturn);
                            }
                        }
                    });

                });


            });
        }
    };
}]);

yapp.directive('postimage', ['blogList', function (blogList) {
    return {
        restrict: 'EA',
        transclude: true, // Grab the contents to be used as the heading
        template: '', // In effect remove this element!
        replace: true,
        link: function (scope, element, attr, controller) {
            scope.$watch(function () {}, function (heading) {
                var tags = element.attr("title");
                var tagsarray = tags.split(',');
                var tagsprite = '';
				 blogList.getBlogImage(tags, function (catListData) {
                    var imagePath = catListData.media_details.sizes.medium_large.source_url;
                    
                   element.attr("src", imagePath);

                });
               
           


            });
        }
    };
}]);


angular
    .module('yapp')
    .directive('slideTitle', function () {
        return {
            restrict: 'A',

            replace: true,
            controller: function ($scope) {
                //console.log("EEE");

            }
        }
    });