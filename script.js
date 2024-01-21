function showRandomText() {
  const additionalText = document.getElementById('additionalText');
  additionalText.innerHTML = getRandomText();
  additionalText.classList.remove('hidden');
}

function getRandomText() {
  const texts = ["Some random text 1", "Another random text 2", "Yet another random text 3"];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}
