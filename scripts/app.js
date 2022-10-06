const emojiSelectorIcon = document.getElementById('emojiSelectorIcon');
const emojiSelector = document.getElementById('emojiSelector');

emojiSelectorIcon.addEventListener('click', () => {
    emojiSelector.classList.toggle('active');
});

