window.onload = function () {
    var app = new Vue({
        el: '#app',
        data: {
            social: [{
                    name: "google",
                    id: 1,
                    title: "Google+",
                    icon: "fa-google-plus",
                    elink: "https://plus.google.com/+GanesanKaruppaiya",
                },
                {
                    name: "github",
                    id: 1,
                    title: "Github",
                    icon: "fa-github",
                    elink: "https://github.com/ganesankar",
                },
                {
                    name: "linkedIn",
                    id: 1,
                    title: "LinkedIn",
                    icon: "fa-linkedin",
                    elink: "https://in.linkedin.com/in/ganesankar",
                },
                {
                    name: "instagram",
                    id: 1,
                    title: "Instagram",
                    icon: "fa-instagram",
                    elink: "https://www.instagram.com/ganesankar/",
                },
                {
                    name: "twitter",
                    id: 1,
                    title: "Twitter",
                    icon: "fa-twitter",
                    elink: "http://twitter.com/ganesankar",
                },
                {
                    name: "facebook",
                    id: 1,
                    title: "Facebook",
                    icon: "fa-facebook",
                    elink: "http://facebook.com/ganesankars",
                },
                {
                    name: "medium",
                    id: 1,
                    title: "Medium",
                    icon: "fa-medium",
                    elink: "https://medium.com/@ganesankar/",
                },
                {
                    name: "pinterest",
                    id: 1,
                    title: "Pinterest",
                    icon: "fa-pinterest",
                    elink: "https://www.pinterest.com/ganesankar/",
                },
                {
                    name: "skype",
                    id: 1,
                    title: "Skype",
                    icon: "fa-skype",
                    elink: "skype:ganesan.intech",
                },



            ],
            contacts: [{
                    name: 'Location',
                    ico: 'Location',
                    elink: 'Chennai, IN',
                    target: 'https://www.google.com/maps/search/chennai/@13.0473748,79.9288061,10z'

                },
                {
                    name: 'Phone',
                    ico: 'Location',
                    elink: '+91 994 373 2416',
                    target: 'tel:+919943732416'
                },
                {
                    name: 'Web',
                    ico: 'Location',
                    elink: 'http://ganny.in',
                    target: 'http://ganny.in'
                },
                {
                    name: 'Email',
                    ico: 'Location',
                    elink: 'hello@ganny.in',
                    target: 'mailto:hello@ganny.in'
                }
            ],
            items: [{
                    childMsg: 'Foo'
                },
                {
                    childMsg: 'Bar'
                }
            ],
            firstname: 'Ganesan',
            lastname: 'Karuppaiya',
            designation: 'UI/ UX Consultant, Designer, Developer',
            introcontent: '<p>	the graphics and web designer by nature. self taught programmer playing with user experience.creator of clean and sharp interfaces					and innovator focusing business, users and success					</p>',
            aboutContent: '<p>A creative UX and UI designer with great business and design background who loves clean and sharp interfaces. with extreme passion and believe that great graphics in combination with a great user experience can make nearly every app or website a huge success;	</p><p>I specialise in product development, interactive design, graphic design, and business development. In ultimate i see output of my work, which is always focused at the point where user, business and technical requirements meet and tends to become a perfect product.</p>',
            services: [{
                    id: '01',
                    name: 'VISUALISING IDEAS',
                    img: 'http://ganny.in/wp-content/uploads/2016/12/logo-degning-vectr-banner.jpg',
                    values: 'Every great design starts with an simple idea and best way to present an idea is to visualise it. It makes your idea alive.							In many cases, visualisation helps to understand the story of the business idea.'
                },
                {
                    id: '02',
                    name: 'INNOVATIVE INTERFACES',
                    img: 'http://ganny.in/wp-content/uploads/2016/12/websites-degning-banner.jpg',
                    values: 'It’s very important that all the fundamental parts are well defined and working This is where problem solving meets visual							impact. I’ll unite products and users, design and experiences.'
                },
                {
                    id: '03',
                    name: 'BUILDING PRODUCTS',
                    img: 'http://ganny.in/wp-content/uploads/2016/12/custome-webdevelopments-banner.jpg',
                    values: 'It doesn’t stop with design. I can develop your product from visual concept to fully functional website with defined standards.'
                }

            ],
            servicelinks: [{
                    elink: 'https://ganny.in/services/#gui',
                    name: 'Graphic Design & branding',
                },
                {
                    elink: 'https://ganny.in/services/#ui',
                    name: 'User Interface Designing',
                },
                {
                    elink: 'https://ganny.in/services/#ux',
                    name: 'User Experiance Products',
                }
            ],
            otherlinks: [{
                    elink: 'https://ganny.in/about/',
                    name: 'About Me',
                },
                {
                    elink: 'https://ganny.in/my-works/',
                    name: 'Other works',
                },
                {
                    elink: 'https://ganny.in/contact',
                    name: 'Connect',
                }
            ],
            otherprojects: [{
                    name: 'Wordpress Angular FrontEnd SPA',
                    desc: 'Wordpress Angular FrontEnd SPA',
                    technology: 'Angular, ',
                    img: 'https://via.placeholder.com/80/dedede/cccccc/?text=WAF',
                    elink: 'https://github.com/ganesankar/angular-wp-ui'
                },
                {
                    name: 'Wordpress ReactJS Redux FrontEnd SPA',
                    desc: 'Wordpress ReactJS Redux FrontEnd SPA',
                    technology: 'ReactJS, Redux, Saga, Webpack, HTML5, CSS3 ',
                    img: 'https://via.placeholder.com/80/dedede/cccccc/?text=WRI',
                    elink: 'https://github.com/ganesankar/react-redux-saga-wp-ui'
                },
                {
                    name: 'Wordpress VueJS  FrontEnd SPA',
                    desc: 'Wordpress VueJS Redux FrontEnd SPA',
                    technology: 'VueJS, Webpack, HTML5, CSS3 ',
                    img: 'https://via.placeholder.com/80/dedede/cccccc/?text=VUW',
                    elink: 'https://github.com/ganesankar/vuejs-wp-ui'
                },

            ],
            activeImage: 'http://ganny.in/wp-content/uploads/2018/11/48015c10c64f38f5a2a7a0cc9bd3b9c5.jpg',
            limitPosition: 500,
            scrolled: false,
            lastPosition: 0,
			thisyear: new Date().getFullYear()

        },
        methods: {
            mouseOver: function (imgs) {
                this.activeImage = imgs;

            },
            mouseOut: function () {
                this.activeImage = 'http://ganny.in/wp-content/uploads/2018/11/48015c10c64f38f5a2a7a0cc9bd3b9c5.jpg';
            },
            handleScroll() {
				console.log("Hrloow")
                if (window.scrollY > 100) {
                    this.scrolled = true;
                    // move up!
                }else{
					this.scrolled = false;
				}

                
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    })
}

$(document).ready(function () {

    $('html').addClass('js-enabled');
    setup_dense();

    $(window).load(function () {
        $(".js-preloader").fadeOut(800, function () {
            $(".js-main-container").fadeIn(800);

            setup_scrollreveal();
            setup_progress_bar_animation();
        });
    });

});



function setup_progress_bar_animation() {
    var $animation_elements = $("[class*='a-']");
    var $window = $(window);

    $window.on('scroll resize', function () {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            // Check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');

                // Animate progress bar
                if ($element.hasClass('a-progress-bar')) {
                    $element.css('width', $element.attr('data-percent') + '%');
                }

            }
            //else {
            //    $element.removeClass('in-view');
            //}
        });
    });

    $window.trigger('scroll');

}



function setup_dense() {
    if ($.isFunction($.fn.dense)) {

        $('img').dense({
            'glue': '@'
        });

    }
}

