/**
* Import styles (automatically injected into <head>).
**/
import '../styles/main.css';



/**
* Enable LiveReload
**/
if (ENV !== 'production') {
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>'
  );
}
