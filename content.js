/*
* File: background.js
* Description: content script
*
* @author Kseniya Nikula aka DevXeni
* @version 1.0.0
* @copyright Copyright (c) 2026, Kseniya Nikula. All rights reserved.
*
*/


document.addEventListener("readystatechange", (event) => {
    if(document.readyState == "complete") {  
    let allDownloadableLinks = document.querySelectorAll("ul.mainSongs > li.item");
    for(let i=0; i < allDownloadableLinks.length-1; i++){
        let linkContainer = allDownloadableLinks[i].querySelector("li.play");
        let clickableElement = allDownloadableLinks[i].querySelector("a.playOtherLink");
        let fileName = allDownloadableLinks[i].querySelector("span.track").innerText;

        clickableElement.href = "";
        clickableElement.target = "";
        clickableElement.setAttribute("data-url",linkContainer.getAttribute("data-url"));
        clickableElement.addEventListener("click", function(event){

        if(!allDownloadableLinks[i].classList.contains("active") || allDownloadableLinks[i].classList.contains("pause") ){
            event.preventDefault();
            let fileToDownload = event.currentTarget.getAttribute("data-url");
            if (fileToDownload && fileName) {
                browser.runtime.sendMessage({url:fileToDownload,name:fileName })
            }
        } else {
            return false;
        }
        }, false);
    
    }
}

}, false);

