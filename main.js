
var $addButton = document.querySelector('.add-button');
var $addWindowEntry = document.querySelector('.add-window-entry');
// var $modalOff = document.querySelector('.modal-off');

$addButton.addEventListener('click', modalOn);

function modalOn(event) {
  $addWindowEntry.className = 'add-window-entry';
}

// function modalOn() {
//   var modalTurnOn;
//   $modal.className = 'modal ' + modalTurnOn;
//   $addWindowEntry.className = 'add-window-entry';
// }
// $modal.addEventListener('click', modalOn);
// // function addWindowEntryOn() {
// //   $addWindowEntry.className = 'add-window-entry ' + 'hidden';
// // }
// // // $modalOff.addEventListener('click', addWindowEntryOn);
