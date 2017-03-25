'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */


var yapp = angular.module('yapp', ['ui.router', 'ngAnimate', 'ngSanitize']);

yapp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/about', '/about/profile');
    $urlRouterProvider.when('/blog', '/blog/posts');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('base', {
            abstract: true,
            url: '',
            templateUrl: 'views/base.html'
        })
        .state('home', {
            url: '/',
            parent: 'base',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .state('about', {
            url: '/about',
            parent: 'base',
            templateUrl: 'views/pages.html',
            controller: 'PageCtrl',
            onEnter: function () {
                console.log("PAGE");
            }
        })

    .state('pageContent', {
            url: '/:pageurl',
            parent: 'about',
            controller: 'PageCtrl',
            templateUrl: 'views/pages/profile.html'
        })
        .state('pages', {
            url: '/page',
            parent: 'base',
            templateUrl: 'views/pages.html',
            controller: 'PageCtrl',
            onEnter: function () {
                console.log("PAGE");
            }
        })
        .state('pagesContent', {
            url: '/:pageurl',
            parent: 'pages',
            controller: 'PageCtrl',
            templateUrl: 'views/pages/page.html',
            controller: 'PageCtrl',
            onEnter: function () {
                console.log("PAGE");
            }
        })

    .state('blog', {
            url: '/blog',
            parent: 'base',
            templateUrl: 'views/blog.html',
            controller: 'BlogCtrl',
            onEnter: function () {
                console.log("BLOG");
            }
        })
        .state('blog.category', {
            url: '/:catlistid',
            parent: 'blog',
            templateUrl: 'views/blog/category.html',
            controller: 'BlogCtrl',
            onEnter: function () {
                console.log("CATEGORY");
            }
        })
        .state('blog.postid', {
            url: '/:catlistid/:postid',
            parent: 'blog',
            controller: 'BlogCtrl',
            templateUrl: 'views/blog/post.html',
            onEnter: function () {
                console.log("POST");
            }
        })
        .state('contact', {
            url: '/contact',
            parent: 'base',
            templateUrl: 'views/contact.html',
            controller: 'MailCtrl'
        });

});
yapp.run(function ($rootScope) {
    $rootScope.serverDataPath = 'http://localhost/server/ganny16server/';
})
yapp.directive('myHeader', function () {
    return {

        restrict: 'E',
        replace: true,
        controller: function ($scope) {
            console.log("EEE");
            //templateUrl:'views/header.html',
        }
    }
});