const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("play",(function(){t.getCurrentTime().then((function(e){localStorage.setItem("videoplayer-current-time",e)}))})),t.setCurrentTime(localStorage.getItem("videoplayer-current-time"));const o=_.add(2,3);console.log(o);
//# sourceMappingURL=02-video.b2dc8d7c.js.map
