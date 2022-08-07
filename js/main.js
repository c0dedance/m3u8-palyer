function playM3u8(url) {
  if (Hls.isSupported()) {
    var video = document.getElementById('player');
    video.volume = 1.0;
    var hls = new Hls();
    var m3u8Url = decodeURIComponent(url)
    hls.loadSource(m3u8Url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      video.play();
    });
  }
}
const params = window.location.search?.slice(1)?.split('=')
const url = params[1]
// console.log(url);
playM3u8(url)