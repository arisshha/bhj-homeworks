const editor = document.getElementById('editor');
const storageKey = 'textEditorContent';
function saveText() {
  localStorage.setItem(storageKey, editor.value);
}

function loadText() {
  const savedText = localStorage.getItem(storageKey);
  if (savedText) {
    editor.value = savedText;
  }
}

editor.addEventListener('input', saveText);
window.addEventListener('load', loadText);