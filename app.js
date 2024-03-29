// load appjs

var appjs = require('appjs');

// serve static files from a directory
appjs.serveFilesFrom(__dirname + '/content');

// // handle requests from the browser
// appjs.router.post('/', function(request, response, next){
  // response.send('Hey! How are you ' + request.post('firstname'));
// })

// create a window
var window = appjs.createWindow({
  width: 640,
  height: 460,
  alpha: false,
});

// prepare the window when first created
window.on('create', function(){
  console.log("Window Created");
  // window.frame controls the desktop window
  window.frame.show().center();
});

// the window is ready when the DOM is loaded
window.on('ready', function(){
  console.log("Window Ready");
  // directly interact with the DOM
  window.process = process;
  window.module = module;

  window.addEventListener('keydown', function(e){
    // show chrome devtools on f12 or commmand+option+j
    if (e.keyIdentifier === 'F12' || e.keyCode === 74 && e.metaKey && e.altKey) {
      window.frame.openDevTools();
    }
  });
});

// cleanup code when window is closed
window.on('close', function(){
  console.log("Window Closed");
});