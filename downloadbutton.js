<!-- styles for page -->
  #downloadButton {
      width: 34px;
      height: 33px;
      margin-top: 6px;
  }
</style>

<script type="text/javascript">
  videojs.getPlayer('myPlayerID').ready(function() {
    // Create variables and new div, anchor and image for download icon
    var myPlayer = this,
      controlBar,
      newElement = document.createElement('div'),
      newLink = document.createElement('a'),
      newImage = document.createElement('img');
    // Assign id and classes to div for icon
    newElement.id = 'downloadButton';
    newElement.className = 'downloadStyle vjs-control';
    // Assign properties to elements and assign to parents
    newImage.setAttribute('src','http://solutions.brightcove.com/bcls/brightcove-player/download-video/file-download.png');
    newLink.setAttribute('href','http://www.brightcove.com');
    newLink.appendChild(newImage);
    newElement.appendChild(newLink);
    // Get controlbar and insert before elements
    // Remember that getElementsByClassName() returns an array
    controlBar = document.getElementsByClassName('vjs-control-bar')[0];
    // Change the class name here to move the icon in the controlBar
    insertBeforeNode = document.getElementsByClassName('vjs-fullscreen-control')[0];
    // Insert the icon div in proper location
    controlBar.insertBefore(newElement,insertBeforeNode);
  });
