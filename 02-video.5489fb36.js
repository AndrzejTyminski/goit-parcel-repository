!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("play",(function(){t.getCurrentTime().then((function(e){localStorage.setItem("videoplayer-current-time",e)}))})),t.setCurrentTime(localStorage.getItem("videoplayer-current-time"));var r=_.add(2,3);console.log(r)}();
//# sourceMappingURL=02-video.5489fb36.js.map
