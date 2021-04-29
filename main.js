navigator.clipboard.readText().then(
  function(clipText) {
    document.getElementById("text").innerText = clipText;
  }).catch(
    error => console.error(error)
  );
