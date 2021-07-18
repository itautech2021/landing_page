function Enviar() { 

    let nome = document.getElementById("name");
    
    console.log(nome);

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' a sua mensagem foi encaminhada com sucesso');
    }
}