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
	    
	    var marker = new google.maps.Marker({
	         map: map,
	         position: new google.maps.LatLng(58.38062, 26.72509),
	         visible: true
	        });
	    
        var boxText = document.createElement("div");
        boxText.style.cssText = "border: 1px solid black; margin-top: 8px; background: yellow; padding: 5px;";
        boxText.innerHTML = "Tartu<br>Tartumaa<br>";
                
        var myOptions = {
                 content: boxText
                ,disableAutoPan: false
                ,maxWidth: 0
                ,pixelOffset: new google.maps.Size(-140, 0)
                ,zIndex: null
                ,boxStyle: { 
                  background: "url('tipbox.gif') no-repeat"
                  ,opacity: 0.75
                  ,width: "280px"
                 }
                ,closeBoxMargin: "10px 2px 2px 2px"
                ,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,isHidden: false
                ,pane: "floatPane"
                ,enableEventPropagation: false
        };
       	
    	google.maps.event.addListener(marker, "click", function (e) {
			ib.open(theMap, this);
    	});	
	        
    	var ib = new InfoBox(myOptions);
	    ib.open(map, marker);    

     },

	 loadScript: function(callback) {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyANeacaev765Lzw74t_96zZNqvnlAqJc78&sensor=false&callback=NAVI.initialize";
		document.body.appendChild(script);
	    script.onload = function() {
	        var scriptInfoBox = document.createElement("script");
	        scriptInfoBox.type = "text/javascript";
	        scriptInfoBox.src = "http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/src/infobox_packed.js";
	        document.body.appendChild(scriptInfoBox);
	        scriptInfoBox.onload = callback;
	    };

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