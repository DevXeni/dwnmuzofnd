
if(window.location.hostname == "muzofond.fm") {
const allDownloadableLinks = document.querySelectorAll("ul.mainSongs li.item");
for(let i=0; i < allDownloadableLinks.length-1; i++){
    let linkContainer = allDownloadableLinks[i].querySelector("li.play");
    let fileName = allDownloadableLinks[i].querySelector("span.track").innerText;
    linkContainer.addEventListener("click", function(){
        let fileToDownload = event.currentTarget.getAttribute("data-url");
        console.log(fileToDownload)
        console.log(fileName);
        /*let linkToDownload = document.createElement("a");
        linkToDownload.href = fileToDownload;
        linkToDownload.download = fileName;
        linkToDownload.style.display = 'none';
        document.body.appendChild(linkToDownload);
        linkToDownload.click(function(){prompt(fileName)});
        document.body.removeChild(linkToDownload);*/
        function onStartedDownload(id) {
            console.log(`Started downloading: ${id}`);
        }

        function onFailed(error) {
            console.log(`Download failed: ${error}`);
        }


        let downloading = chrome.downloads.download({//browser.downloads.download({
           url: fileToDownload,
           //filename: fileName,
           //conflictAction: "uniquify",
           //saveAs: true
        });

        downloading.then(onStartedDownload, onFailed);
    }, false);
}}