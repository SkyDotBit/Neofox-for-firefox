let tooble = true;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dumbutton").addEventListener("click", communicate);
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "readit" }, (response) => {
            document.getElementById("goobler").innerHTML = response.reply;
        });
    });
});
function communicate() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "togglestat" }, (response) => {
            document.getElementById('goobler').innerText = response.reply;
        });
    });
}