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
  event.preventDefault();
  var newEntryObj = {};
  newEntryObj.title = $formEntry.elements.title.value;
  newEntryObj.photoUrl = $formEntry.elements.photourl.value;
  newEntryObj.notes = $formEntry.elements.notes.value;
  newEntryObj.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newEntryObj);
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $formEntry.reset();
}
