var player = document.getElementById('player');

  var handleSuccess = function(stream) {
    player.srcObject = stream;
  };

  navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then(handleSuccess)

      navigator.permissions.query({name:'camera'}).then(function(result) {
        if (result.state == 'granted') {
      
        } else if (result.state == 'prompt') {
      
        } else if (result.state == 'denied') {
      
        }
        result.onchange = function() {
      
        };
      });