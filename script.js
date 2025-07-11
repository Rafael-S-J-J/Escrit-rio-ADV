document.addEventListener("DOMContentLoaded", function () {
  const botaoWpp = document.getElementById("abrir-formulario");
  const formFlutuante = document.getElementById("form-flutuante");
  const fecharFormulario = document.getElementById("fechar-formulario");

  // Quando clica no ícone flutuante do WhatsApp, abre o formulário
  botaoWpp.addEventListener("click", () => {
    formFlutuante.classList.toggle("oculto");
  });

  // Quando clica no X, fecha o formulário
  fecharFormulario.addEventListener("click", () => {
    formFlutuante.classList.add("oculto");
  });

  // Envio do formulário para o WhatsApp
  document.getElementById("form-contato").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, me chamo ${nome}, meu e-mail é ${email}. Gostaria de dizer: ${mensagem}`;
    const url = `https://wa.me/557199110476?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
    formFlutuante.classList.add("oculto");
  });
});
