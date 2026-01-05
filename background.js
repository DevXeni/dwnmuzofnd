/*
* File: background.js
* Description: background script
*
* @author Kseniya Nikula aka DevXeni
* @version 1.0.0
* @copyright Copyright (c) 2026, Kseniya Nikula. All rights reserved.
*
*/
function onStartedDownload(id) {
    console.log("Started downloading: ${id}");
}

function onFailed(error) {
    console.log("Download failed: ${error}");
}

function downloadFile(message) {
    if(message === undefined || message === null) {
        console.log("Message not found");
        return false
    }
    let downloading = browser.downloads.download({
        url: message.url,
        filename: fileName,
        conflictAction: "uniquify",
        saveAs: true
    });
    downloading.then(onStartedDownload, onFailed);
}       
browser.runtime.onMessage.addListener(downloadFile);