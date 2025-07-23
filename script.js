
document.addEventListener("DOMContentLoaded", function () {
  const formWpp = document.getElementById("form-whatsapp-envio");

  formWpp.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nomeContato").value;
    const email = document.getElementById("emailContato").value;
    const telefone = document.getElementById("telefoneContato").value;
    const assunto = document.getElementById("assuntoContato").value;
    const mensagem = document.getElementById("mensagemContato").value;

    const texto = `Olá, me chamo ${nome}, meu e-mail é ${email}, telefone ${telefone}. Assunto: ${assunto}. Mensagem: ${mensagem}`;
    const url = `https://wa.me/557199110476?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
});
