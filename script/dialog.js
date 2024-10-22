const dialog = document.querySelector("#dialog-info");
const showButton = document.querySelector("dialog + a");
const closeButtonExtras = document.querySelector("dialog button");
var root = document.documentElement;

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
  root.classList.add('has-modal');
});

// "Close" button closes the dialog
closeButtonExtras.addEventListener("click", () => {
  dialog.close();
});

// "Close" event removes has-modal class from HTML
dialog.addEventListener("close", () => {
  root.classList.remove('has-modal');
});
