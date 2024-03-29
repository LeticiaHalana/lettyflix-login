const body = document.querySelector('body');

function esquecerSenha() {
    const link = document.querySelector("#showMessage");
    const modalContainer = document.querySelector("#esquecer_senha");

    link.addEventListener("click", () => {
        modalContainer.showModal();
    });
    enviarEmail();
}



function enviarEmail() {
    const link = document.querySelector("#enviar");
    const modalContainer = document.querySelector("#esquecer_senha");

    link.addEventListener("click", () => {
        modalContainer.close();
    });
}
esquecerSenha();