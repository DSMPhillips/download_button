var player = videojs(document.querySelector('.video-js'), {
          plugins: {
            vjsdownload:{
              beforeElement: 'playbackRateMenuButton',
              textControl: 'Download video',
              name: 'downloadButton',
              downloadURL: '//vjs.zencdn.net/v/oceans.mp4' //optional if you need a different download url than the source
            }
          }
        } , function() {
          console.log('Callback video-js initiated');
          this.on('downloadvideo', function(){
          console.log('downloadvideo triggered'); 
        });
      });
