/*
* File: background.js
* Description: content script
*
* @author Kseniya Nikula aka DevXeni
* @version 1.0.0
* @copyright Copyright (c) 2026, Kseniya Nikula. All rights reserved.
*
*/
const allDownloadableLinks = document.querySelectorAll("ul.mainSongs > li.item");
document.addEventListener("readystatechange", (event) => {
    if(document.readyState == "complete") {         
        for(let i=0; i < allDownloadableLinks.length-1; i++){
            let linkContainer = allDownloadableLinks[i].querySelector("li.play");
            let clickableElement = allDownloadableLinks[i].querySelector("a.playOtherLink");
            clickableElement.href = "";
            clickableElement.target = "";
            clickableElement.setAttribute("data-url",linkContainer.getAttribute("data-url"));
            console.log(clickableElement);
        }
    }
}, false);
for(let i=0; i < allDownloadableLinks.length-1; i++){
    let clickableLink = allDownloadableLinks[i].querySelector("a.playOtherLink");
    let fileName = allDownloadableLinks[i].querySelector("span.track").innerText;
    clickableLink.addEventListener("click", function(event){
        event.preventDefault();
        let fileToDownload = event.currentTarget.getAttribute("data-url");
        console.log(fileToDownload);
        if (fileToDownload && fileName) {
            browser.runtime.sendMessage({url:fileToDownload,name:fileName })
        }           
    }, false);    
}

