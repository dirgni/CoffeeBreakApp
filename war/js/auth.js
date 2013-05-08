FB_LOGIN = {
    logWrap: null,
    username: null,
    init: function() {
        FB.init({
            appId      : '127975257397447', // App ID
            channelUrl : 'http:/localhost/www/CoffeeBreakApp/war/index.html', // Channel File
            status     : true, // check login status
            cookie     : true, // enable cookies to allow the server to access the session
            xfbml      : true  // parse XFBML
        });

        this.logWrap = $('#userlinks');

        if (!this.isLoggedIn()) {
            this.showLogin();
        } else {
            this.showLogOut();
        }

    },

    login: function() {
        var self = this;
        if (!this.isLoggedIn()) {
            FB.login(function(response) {
                if (response.authResponse) {
                    self.showLogOut();
                    NAVI.refresh();
                } else {
                   alert('sisse logimine ebaõnnestus');
                }
            });
        }


    },

    logout: function() {
        FB.logout(function(response) {
            self.username = null;
            return true;
        });

        NAVI.refresh();
        this.showLogin();
    },

    isLoggedIn: function(callback) {
        FB.api('/me', function(response) {
            var isLoggedIn = false;

            if(typeof(response.verified) !== 'undefined' && response.verified) {
                isLoggedIn = true;
            }

            if (typeof(callback) === 'function') {
                callback(isLoggedIn);
            }

            return isLoggedIn;
        });
    },

    setUserName: function() {
        var self = this;

        FB.api('/me', function(response) {
            $('<div class="username"/>')
                .text('Tere, ' + response.name)
                .prependTo(self.logWrap);
        });
    },

    showLogin: function() {
        var self = this,
            button = $('<button/>')
            .text('logi sisse')
            .on('click', function(){
                self.login();
            });

        this.logWrap.html(button);
    },

    showLogOut: function() {
        var self = this,
            button = $('<button/>')
            .text('logi välja')
            .on('click', function(){
                self.logout();
            });

        var user = $('<div class="username"/>');
        this.logWrap.html(button);
        this.setUserName();
    }
}

