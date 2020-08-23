chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === true) {
    let matches = document.documentElement.innerHTML.match(/\$(\d)*/);
    alert(matches);
    console.log(matches);
    sendResponse("yes");
  }
});
