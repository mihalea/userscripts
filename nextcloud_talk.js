// ==UserScript==
// @name     Nextcloud Talk - Better call layout
// @description Better nextcloud talk user interface for group calling, copying skype
// @version  1.3
// @license MIT
// @author Mircea Mihalea
// @namespace ro.mihalea.talk
// @grant    none
// @require       http://code.jquery.com/jquery-3.3.1.min.js
// @include  https://ds.mihalea.ro/call/*
// @updateURL https://raw.githubusercontent.com/mihalea/userscripts/master/nextcloud_talk.js
// @downloadURL https://raw.githubusercontent.com/mihalea/userscripts/master/nextcloud_talk.js
// ==/UserScript==

$(document).ready(function() {
  console.log("Overriding OCA switchVideoToId");
  unsafeWindow.OCA.SpreedMe.speakers.switchVideoToId = function (id) { return; };
  
  setInterval(function() {
    console.log("Runny scheduled custom style task");
    $(".videoContainer-dummy").css("display","none");
  
    $(".videoContainer").filter(function() {
      return this.id.match("container_.+");
    }).css({
      "position": "relative",
      "top": "50%",
      "transform": "translateY(-50%)"
    });

    $("#localVideoContainer").css({
      "position": "absolute",
      "width": "10%",
      "right": "15px",
      "bottom": "15px",
      "min-width": "200px"
    });

    $("#videos").css({
      "align-items": "flex-start",
      "background": "#000"
    });

    $(".videoContainer").css("padding", "0 1%");

    $("#screensharing-button").css("display", "none");
  }, 5000);
});
