console.log("Preload running...");

var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "images/attic.JPG",
  "images/introspook.png",
  "images/tape.png",
  "images/tape2.png",
  "images/textbox.png",
  "images/tv.png",
  "images/tvstand.png",
  "images/vhstape.png"
);
