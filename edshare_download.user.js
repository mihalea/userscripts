// ==UserScript==
// @name        EdShare Download
// @description Automatic link translation for edshare downloads
// @version  2
// @author Mircea Mihalea
// @copyright 2018, mihalea (https://openuserjs.org/users/mihalea)
// @namespace   ro.mihalea.edshare
// @license MIT
// @description Automatically redirects to the download link
// @include     https://secure.ecs.soton.ac.uk/*
// @version     2
// @grant       GM.xmlHttpRequest
// @require     https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

$(document).ready(function () {
  console.log("Edshare loaded");
  $('a').click(function (e) {
    var anchor = $(this);
    var url = anchor.attr('href');
    
    if (/(https?:\/\/)?(www\.)?edshare\.soton\.ac\.uk\/[0-9]+\/?/.test(url)) {
      console.log("Found edshare link");
      console.log(url);
      
      e.preventDefault();
      
      GM.xmlHttpRequest({
        method: 'GET',
        url: url,
        onload: function (page) {
          console.log("Page loaded");
						$(page.response).find('#ep_inplace_docinfo_0').find('a').each(function (index) {
							link = $(this).attr('href');
              
              
              if(/edshare/.test(link)) {
              	anchor.attr('href', link);
								window.location.href = link;
              }
          });

        }
      });
    }
  })
})
