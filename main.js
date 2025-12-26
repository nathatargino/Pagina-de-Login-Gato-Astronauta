function mostrarSenha(element) {
    const inputPass = document.getElementById('senha');
    if (inputPass.type === 'password') {
        inputPass.type = 'text';
        element.textContent = 'visibility';
    } else {
        inputPass.type = 'password';
        element.textContent = 'visibility_off';
    }
}

function abrirModal(event) {
    if (event) event.preventDefault(); 
    document.getElementById('modal-portfolio').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modal-portfolio').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-portfolio');
    if (event.target == modal) {
        fecharModal();
    }
}