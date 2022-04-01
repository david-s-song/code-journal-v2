/* global data */
/* exported data */
var $photoUrl = document.querySelector('#photourl');
var $image = document.querySelector('.image');
var $formEntry = document.querySelector('.form-entry');

$photoUrl.addEventListener('input', imageEntry);
$formEntry.addEventListener('submit', submitForm);

function imageEntry(event) {
  var photoUrl = event.target.value;
  $image.setAttribute('src', photoUrl);
}

function submitForm(event) {
  var newEntryObj = {};
  data.nextEntryId++;
  data.entries.unshift(newEntryObj);
  $image.setAttribute('src', '../images/placeholder-image-square.jpg');
  $formEntry.reset();
}
