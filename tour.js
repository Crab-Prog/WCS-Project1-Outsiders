const button = document.querySelectorAll('.buy_btn');
button.forEach(item => item.addEventListener('click', () => {
  window.open(url,"404.html")
  console.log("bouton cliqué")
}));