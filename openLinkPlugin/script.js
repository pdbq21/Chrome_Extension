let root = document.getElementById('sold');
let list = root.querySelectorAll('.cart_level_cost_for_seller>.order');

let notesLink = '';
list.forEach((item) => {
  if (item.querySelector('input').checked) {
//user-notes
    notesLink += `${item.querySelector('.user-notes a').href}\n`;
  }
});

chrome.storage.local.set({'notes': notesLink.split('\n')}, function() {
  // Notify that we saved.
  // message('Settings saved');
});
