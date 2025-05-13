function switchLang(lang) {
  document.querySelectorAll('.lang-section').forEach(div => div.classList.remove('active'));
  document.getElementById(lang).classList.add('active');
}
