const emojiSelectorIcon = document.getElementById('emojiSelectorIcon');
const emojiSelector = document.getElementById('emojiSelector');

emojiSelectorIcon.addEventListener('click', () => {
    emojiSelector.classList.toggle('active');
});

fetch('https://emoji-api.com/emojis?access_key=3b6d752af5327473dba888db62421217f08b035a')
   .then(res => res.json())
   .then(data => loadEmoji(data))

function loadEmoji(data) {
   data.forEach(emoji => {
       let li = document.createElement('li');
       li.textContent = emoji.character;
       emojiList.appendChild(li);
   });
}
