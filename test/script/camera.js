var player = document.getElementById('player');

  var handleSuccess = function(stream) {
    player.srcObject = stream;
  };

  navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then(handleSuccess)