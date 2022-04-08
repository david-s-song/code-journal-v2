/* global data */
/* exported data */
var $photoUrl = document.querySelector('#photourl');
var $image = document.querySelector('.image');
var $formEntry = document.querySelector('.form-entry');

$photoUrl.addEventListener('input', imageEntry);
$formEntry.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', DOMContentLoaded);

function imageEntry(event) {
  var photoUrl = event.target.value;
  $image.setAttribute('src', photoUrl);
}

function submitForm(event) {
  event.preventDefault();
  var newEntryObj = {};
  newEntryObj.title = $formEntry.elements.title.value;
  newEntryObj.photourl = $formEntry.elements.photourl.value;
  newEntryObj.notes = $formEntry.elements.notes.value;
  newEntryObj.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newEntryObj);
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $formEntry.reset();
}

function renderEntry(entryObj) {
  var $entryEl = document.createElement('li');
  $entryEl.className = 'li-entry-wrapper';

  var $divImageWrapper = document.createElement('div');
  $divImageWrapper.setAttribute('class', 'image-entries');
  $entryEl.appendChild($divImageWrapper);

  var $entryImage = document.createElement('img');
  $entryImage.className = 'image';
  $entryImage.setAttribute('src', entryObj.photourl);
  $entryImage.setAttribute('alt', 'entry-image');
  $divImageWrapper.appendChild($entryImage);

  var $divPgWrapper = document.createElement('div');
  $divPgWrapper.setAttribute('class', 'title-paragraph-entries-wrapper');
  $entryEl.appendChild($divPgWrapper);

  var $entryTitle = document.createElement('h2');
  $entryTitle.className = 'entry-title';
  $entryTitle.textContent = entryObj.title;
  $divPgWrapper.appendChild($entryTitle);

  var $entryParagraph = document.createElement('p');
  $entryParagraph.className = 'entry-paragraph';
  $entryParagraph.textContent = entryObj.notes;
  $divPgWrapper.appendChild($entryParagraph);

  return $entryEl;
}

function DOMContentLoaded(event) {
  var $entriesList = document.querySelector('.new-entries');
  for (var i = 0; i < data.entries.length; i++) {
    var renderedEntry = renderEntry(data.entries[i]);
    $entriesList.appendChild(renderedEntry);
  }
}

var $navEntries = document.querySelector('.nav-entries-a');

var $entries = document.querySelector('.entries');
var $entryForm = document.querySelector('.entry-form');

function viewEntryForm(event) {
  $entryForm.className = 'view entry-form';
  $entries.className = 'view entries hidden';
}

$navEntries.addEventListener('click', viewEntryForm);
