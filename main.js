function mostrarSenha(element) {
  var inputPass = document.getElementById('senha');

  if (inputPass.type === 'password') {
    inputPass.setAttribute('type', 'text');
    element.textContent = 'visibility';
  } else {
    inputPass.setAttribute('type', 'password');
    element.textContent = 'visibility_off';
  }
}
function alerta(element) {
  alert('Olá, obrigado por visitar meu projeto , veja mais projetos como esse em https://github.com/nathatargino \uD83D\uDE03');
}