const cameraSize = { w: 360, h: 240 };
const resolution = { w: 1080, h: 720 };
let video;
let media;

// video要素をつくる
video          = document.createElement('video');
video.id       = 'video';
video.width    = cameraSize.w;
video.height   = cameraSize.h;
video.autoplay = true;
document.getElementById('videoPreview').appendChild(video);

// video要素にWebカメラの映像を表示させる
media = navigator.mediaDevices.getUserMedia({
  audio: false,
  video: {
    width: { ideal: resolution.w },
    height: { ideal: resolution.h }
  }
}).then(function(stream) {
  video.srcObject = stream;
});