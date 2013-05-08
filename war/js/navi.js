NAVI = {
    navWrap: null,
    contentWrap: null,
    loading: null,

    resourceMap: {
        home : {
            url: "pages/home.html",
            access: 0,
            name: 'Avaleht'
        },
        vote :{
            url: "pages/vote.html",
            access: 10,
            name: 'Hääleta'
        },
        apply : {
            url: "pages/apply.html",
            access: 10,
            name: 'Kandideeri'
        },
        results :{
            url: "pages/results.html",
            access: 0,
            name: 'Tulemused'
        },
        stats : {
            url: "pages/stats.jsp",
            access: 0,
            name: 'Statistika'
        },
        contact : {
            url: "pages/contact.html",
            access: 0,
            name: 'Kontakt'
        },
        help : {
            url: "pages/help.html",
            access: 0,
            name: 'Abi'
        }
    },

    init: function() {
        var self = this;

       this.navWrap = $('#navitab');
       this.contentWrap = $('#main-content');
       this.loading = $('#loading');

        FB_LOGIN.isLoggedIn(function(response) {
            if (response) {
                self.renderMenu(true);
            } else {
                self.renderMenu();
            }
        });


        self.loading.show();
    },

    createLink: function(id, page) {
        var self = this,
            li = $([
            '<li>',
            '<a href="#' + id + '">' + page.name + '</a>',
            '</li>'
        ].join(''));

        li.data('id', id);

        li.on('click', function(e) {
            e.preventDefault();

            self.loadPage($(this));
            self.loading.show();
        });

        return li;
    },

     renderMenu: function(showHiddenItems) {
         var id,
             page;

         for(id in this.resourceMap) {
             page = this.resourceMap[id];

             if (page.access === 0 || (page.access > 0 && showHiddenItems)) {
                 this.navWrap.append(this.createLink(id, page));
             }
         }


         this.navWrap.find('li:first').trigger('click');
         this.loading.hide();
     },
     
     initialize: function() {
	    var mapProp = {
	      center:new google.maps.LatLng(58.508742,25.020850),
	      zoom:7,
	      mapTypeId:google.maps.MapTypeId.ROADMAP
	      };
	    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
     },

	 loadScript: function() {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyANeacaev765Lzw74t_96zZNqvnlAqJc78&sensor=false&callback=NAVI.initialize";
		document.body.appendChild(script);
	 },

    loadPage: function(elem) {
        var self = this,
            page = this.resourceMap[elem.data('id')];

        this.navWrap.find('li.active').removeClass('active');
        elem.addClass('active');

        this.contentWrap.empty();

        this.contentWrap.load(page.url, function() {
            self.loading.hide();
            if (page.name === 'Statistika') {
            	self.loadScript();
            }
        });

        
    },

    refresh: function() {
        this.navWrap.empty();
        this.init();
    }
    
}