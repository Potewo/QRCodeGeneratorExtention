var qrcode = new QRCode(document.getElementById("qr"), { text: "https://example.com" });

function generateFromClipboard() {
  navigator.clipboard.readText().then(
    function(clipText) {
      generate(clipText);
    }).catch(
      error => console.log(error)
    );
}

function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true, active: true});
}

function generateFromTabURL() {
  getCurrentWindowTabs().then(tabs => {
    console.log(tabs);
    generate(tabs[0].url);
  }).catch( error => {
    console.log(error);
  });
  // let url = "";
  // for (let tab of tabs) {
  //   if (tab.active) {
  //     url = tab.url;
  //   }
  // }
  // url = tabs[0].url;
  // generate(url);
}

function generate(url) {
  document.getElementById("url").innerText = url;
  qrcode.clear();
  qrcode.makeCode(url);
}

generateFromClipboard();
// generateFromTabURL();

document.getElementById("fromTabURL").addEventListener('click', generateFromTabURL);
document.getElementById("fromClipboard").addEventListener('click', generateFromClipboard);
