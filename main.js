var qrcode = new QRCode(document.getElementById("qr"), "");

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
