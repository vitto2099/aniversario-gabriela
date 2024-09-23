document.getElementById("cardButton").addEventListener("click", function() {
  const hiddenContent = document.getElementById("hiddenContent");
  hiddenContent.style.display = "block"; // Exibe o conteúdo
  hiddenContent.style.opacity = "0"; // Começa invisível
  hiddenContent.style.transition = "opacity 1s"; // Transição suave
  setTimeout(() => {
    hiddenContent.style.opacity = "1"; // Aparece lentamente
  }, 10);
});
