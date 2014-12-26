//######
//## This work is licensed under the Creative Commons Attribution-Share Alike 3.0 
//## United States License. To view a copy of this license, 
//## visit http://creativecommons.org/licenses/by-sa/3.0/us/ or send a letter 
//## to Creative Commons, 171 Second Street, Suite 300, San Francisco, California, 94105, USA.
//######

$(document).ready(function() {
 $.fn.idleTimeout = function(options) {
    var defaults = {
      inactivity: 60000, // 1 Minute
      noconfirm: 10000, // 10 Seconds
      sessionAlive: 300000, // 5 Minutes
      redirect_url: '/js_sandbox/',
      click_reset: true,
      alive_url: '/js_sandbox/',
      logout_url: '/js_sandbox/',
      showDialog: true
    };

    //##############################
    //## Private Variables
    //##############################
    var opts = $.extend(defaults, options);
    var liveTimeout, confTimeout, sessionTimeout;

    function fancyTimeout(msg, callback) {
        var ret;
        $.fancybox({
            modal : true,
            content : "<div style=\"width:250px;height:100px;\">"
                    + "<p>You are about to be signed out due to inactivity.</p>"
                    + "</div>"
                    + "<div style=\"text-align:center;margin-top:20px;\">"
                    + "<input id=\"fancyConfirm_ok\" style=\"margin:3px;padding:1px;width:85px;height:20px;\" type=\"submit\" value=\"Stay Logged In\">"
                    + "<input id=\"fancyConfirm_cancel\" style=\"margin:3px;padding:1px;width:75px;height:20px;\" type=\"button\" value=\"Logout\">"
                    + "</div>",
            afterShow : function() {
                $("#fancyConfirm_cancel").click(function() {
                    ret = false; 
                    $.fancybox.close();
                });
                $("#fancyConfirm_ok").click(function() {
                    ret = true; 
                    $.fancybox.close();
                });
            },
            afterClose : function() {
                if ($.isFunction) {
                    callback.call(this, ret);
                }
            }
        });
    }

    //##############################
    //## Private Functions
    //##############################
    var start_liveTimeout = function() {
      clearTimeout(liveTimeout);
      clearTimeout(confTimeout);
      liveTimeout = setTimeout(logout, opts.inactivity);

      if(opts.sessionAlive) {
        clearTimeout(sessionTimeout);
        sessionTimeout = setTimeout(keep_session, opts.sessionAlive);
      }
    };

    var logout = function() {
      confTimeout = setTimeout(redirect, opts.noconfirm);
      if(opts.showDialog) {
          fancyTimeout("", function(ret) {
              if (ret == true) {
                  stay_logged_in();
              } else {
                  redirect();
              }
          });
      }
    };

    var redirect = function() {
      if(opts.logout_url) {
        $.get(opts.logout_url);
      }
      window.location.href = opts.redirect_url;
    };

    var stay_logged_in = function(el) {
      start_liveTimeout();
      if(opts.alive_url) {
        $.get(opts.alive_url);
      }
    };

    var keep_session = function() {
      $.get(opts.alive_url);
      clearTimeout(sessionTimeout);
      sessionTimeout = setTimeout(keep_session, opts.sessionAlive);
    };

    //###############################
    // Build & Return the instance of the item as a plugin
    // This is basically your construct.
    //###############################
    return this.each(function() {
      obj = $(this);
      start_liveTimeout();
      if(opts.click_reset) {
        $(document).on('click', start_liveTimeout);
      }
      if(opts.sessionAlive) {
        keep_session();
      }
    });

 };
});

// Run jquery idletimeout when the Document is ready
$(document).ready(function() {
    var myLocation = window.location.pathname.substr(0,window.location.pathname.indexOf("/",1)+1 );
    $(document).idleTimeout({
        inactivity: 60000, // 1 Minute
        noconfirm: 10000, // 10 Seconds
        sessionAlive: 10000, // 10 Seconds
        redirect_url: myLocation + 'pages/fileUpload.faces',
        click_reset: true,
        alive_url: myLocation + 'pages/fileUpload.faces',
        logout_url: myLocation + 'pages/fileUpload.faces',
        showDialog: true
    });
});