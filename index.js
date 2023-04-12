var videoPlayer = document.getElementById("videoPlayer");
var fileInput = document.getElementById("inputFile");

var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var volumeUpButton = document.getElementById("volumeUpButton");
var volumeDownButton = document.getElementById("volumeDownButton");

// Controlar el evento click del botón de reproducir
playButton.addEventListener("click", function() {
  videoPlayer.play();
});

// Controlar el evento click del botón de pausar
pauseButton.addEventListener("click", function() {
  videoPlayer.pause();
});

// Controlar el evento click del botón de subir el volumen
volumeUpButton.addEventListener("click", function() {
  videoPlayer.volume += 0.1;
});

// Controlar el evento click del botón de bajar el volumen
volumeDownButton.addEventListener("click", function() {
  videoPlayer.volume -= 0.1;
});

// Controlar el evento change del input de selección de archivo
fileInput.addEventListener("change", function() {
  var file = fileInput.files[0];
  if (file.type === 'video/mp4' || file.type === 'video/webm' || file.type === 'video/ogg') {
    var videoURL = URL.createObjectURL(file);
    videoPlayer.src = videoURL;
    alert("Cargando el video, por favor espere...")
  } else {
    alert("Por favor, seleccione un archivo de vídeo válido");
    fileInput.value = "";
  }
});

// Controlar el evento loadedmetadata del video para mostrar la duración
videoPlayer.addEventListener("loadedmetadata", function() {
  var duration = videoPlayer.duration;
  console.log("Duración del video: " + duration + " segundos");
});