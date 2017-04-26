// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click() {
  chrome.tabs.executeScript(null,
      {code:
      "var ad = document.querySelectorAll('.feed_row .wall_marked_as_ads');" +
      "" +
      "ad.forEach(function(item){" +
      "var blockAd = item.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;" +
      "console.log(blockAd);" +
      "blockAd.style.backgroundColor='red';" +
      "blockAd.style.padding='10px';});" +
      ""});
  window.close();
}

document.addEventListener('DOMContentLoaded', click);
//_ads_promoted_post_data_w
//wall_marked_as_ads
//var ad = document.querySelectorAll('.wall_marked_as_ads');

