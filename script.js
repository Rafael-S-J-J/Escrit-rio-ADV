document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá, me chamo ${nome}, meu e-mail é ${email}. Gostaria de dizer: ${mensagem}`;
  const url = `https://wa.me/557199110476?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
});
