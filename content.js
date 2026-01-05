/*
* File: background.js
* Description: content script
*
* @author Kseniya Nikula aka DevXeni
* @version 1.0.0
* @copyright Copyright (c) 2026, Kseniya Nikula. All rights reserved.
*
*/

const allDownloadableLinks = document.querySelectorAll("ul.mainSongs li.item");
for(let i=0; i < allDownloadableLinks.length-1; i++){
    let linkContainer = allDownloadableLinks[i].querySelector("li.play");
    let fileName = allDownloadableLinks[i].querySelector("span.track").innerText;
    linkContainer.addEventListener("click", function(){
        let fileToDownload = event.currentTarget.getAttribute("data-url");
        if (fileToDownload) {
            console.log(fileToDownload)
            console.log(fileName);
            browser.runtime.sendMessage({url:fileToDownload,name:fileName })
        }
    }, false);
}