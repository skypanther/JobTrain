// Some helpful globals and namespaces
UI = {};
log = function(x){ Ti.API.info(x); };
_ = null;

var Push = nrequire('/lib/push');

var subscribePushNotifications = function() {
  var channel = Ti.App.id;
  Push.subscribe(channel);
};

// initialize and open the app.
var init = function(testing) {
  _ = nrequire('/support/underscore');
  nrequire('/ui/proxies');
  Application = nrequire('/windows/application');
  if(!Ti.App.Properties.hasProperty('foo')) {
		var mWin = Ti.UI.createWindow({
			title: 'Login'
		});
	
		var activeMovie = Titanium.Media.createVideoPlayer({
			url: 'http://av.vimeo.com/56093/223/124085341.mp4?aksessionid=c9690bb353a48b5f261ea09f0b1456af&token=1350899813_f11125537fde1789169f64971a8be43b',
			backgroundColor: '#111',
			mediaControlStyle: Titanium.Media.VIDEO_CONTROL_NONE // See TIMOB-2802, which may change this property name
		});
		mWin.add(activeMovie);

var btn = Ti.UI.createButton({
	title: 'Close'
});
btn.addEventListener('click', function(){
	mWin.close();
})
mWin.setLeftNavButton(btn)

		mWin.open({modal: true});
		mWin.addEventListener('close', function() {
			activeMovie.stop();
			Application.open();
		});
  } else {
  	  Application.open();
  }
  subscribePushNotifications();
};

module.exports = {init: init};
