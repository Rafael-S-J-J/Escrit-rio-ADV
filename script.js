
document.getElementById("form-whatsapp-envio").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagemContato").value;

    const texto = `Olá, meu nome é *${nome}*.\nAssunto: *${assunto}*\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

    const telefoneDestino = "557199110476"; // Substitua com o número de destino no formato internacional
    const url = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

});

function toggleMenu() {
  const menu = document.getElementById('topoMenu');
  menu.classList.toggle('active');
}








