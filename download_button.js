var player = videojs(document.querySelector('.video-js'), {
          plugins: {
            vjsdownload:{
              beforeElement: 'playbackRateMenuButton',
              textControl: 'Download video',
              name: 'downloadButton',
            }
          }
        } , function() {
          console.log('Callback video-js initiated');
          this.on('downloadvideo', function(){
          console.log('downloadvideo triggered'); 
        });
      });
