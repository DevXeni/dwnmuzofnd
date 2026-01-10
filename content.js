/*
* File: background.js
* Description: content script
*
* @author Kseniya Nikula aka DevXeni
* @version 1.0.0
* @copyright Copyright (c) 2026, Kseniya Nikula. All rights reserved.
*
*/

domReadyPromise = new Promise((resolve) => {
    if (document.readyState !== "loading") {
        resolve();
    } else {
        document.addEventListener("DOMContentLoaded", resolve);
    }
});
domReadyPromise.then(() => {
    let allDownloadableLinks = document.querySelectorAll("ul.songs > li.item"); 
    if(allDownloadableLinks.length != 0){  
        for(let i=0; i < allDownloadableLinks.length-1; i++){
            let linkUrl = allDownloadableLinks[i].querySelector("li.play").getAttribute("data-url");
            let track = allDownloadableLinks[i].querySelector("span.track");
            let fileName = track.innerText
            let el = allDownloadableLinks[i].querySelector("a.zvukDlButton");
            if(el) {
                el.href = "";
                el.target = "";
                //track.insertAdjacentHTML('beforeend', "&nbsp;Скачать&nbsp;файл&nbsp;");
                el.addEventListener("click",function(event){
                    event.preventDefault();
                    if (linkUrl && fileName) {
                        browser.runtime.sendMessage({url:linkUrl,name: fileName})
                    }           
                }, false);
            }
            
        }
    }
}); 


