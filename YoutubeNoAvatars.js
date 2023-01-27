// ==UserScript==
// @name         Removal of Youtube Avatars
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Clean site
// @author       a13chrju
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `img.yt-img-shadow, #author-thumbnail {display: none}`

  document.head.appendChild(style);
})();
