/* global data */
/* exported data */
var $photoUrl = document.querySelector('#photourl');
var $image = document.querySelector('.image');
var $formEntry = document.querySelector('.form-entry');
var $entriesList = document.querySelector('.new-entries');
var $navEntries = document.querySelector('.nav-entries-a');
var $newButton = document.querySelector('.button-new');

$photoUrl.addEventListener('input', imageEntry);
$formEntry.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', renderEntries);
$navEntries.addEventListener('click', viewEntries);
$newButton.addEventListener('click', viewEntryForm);

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
  $entriesList.prepend(renderEntry(newEntryObj));
  data.view = 'entries';
  switchViews('entries');
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

var $viewDivList = document.querySelectorAll('.view');

function switchViews(viewName) {
  for (var i = 0; i < $viewDivList.length; i++) {
    if ($viewDivList[i].getAttribute('data-view') === viewName) {
      $viewDivList[i].className = 'view';
    } else {
      $viewDivList[i].className = 'hidden';
    }
  }
}

var $textWrapper = document.querySelector('.text-wrapper');

function renderEntries() {
  $textWrapper.className = 'hidden';
  for (var i = 0; i < data.entries.length; i++) {
    var renderedElement = renderEntry(data.entries[i]);
    $entriesList.appendChild(renderedElement);
  }
  if (data.view === 'entries') {
    viewEntries();
  } else {
    viewEntryForm();
  }
}

function viewEntries(event) {
  data.view = 'entries';
  switchViews('entries');
}

function viewEntryForm(event) {
  data.view = 'entry-form';
  switchViews('entry-form');
}
