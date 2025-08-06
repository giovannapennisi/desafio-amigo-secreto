let listaDeNomes = [];

function adicionarAmigo(){
    let nomeDoAmigo = document.querySelector('input').value;

    if (nomeDoAmigo === "") {
        alert(`Ops, parece que nada foi digitado. Por favor, insira um nome válido.`);
    } else {
        listaDeNomes.push(nomeDoAmigo);
        atualizarLista();
        limparCampo();
    }
}

function atualizarLista() {

    document.querySelector('#listaAmigos').innerHTML = ''; 
    // limpa a lista antes de adicionar os nomes

    for (let i = 0; i < listaDeNomes.length; i++) {
        let mensagemNomeExibido = `${listaDeNomes[i]}`;
        exibirTextoNaTela('#listaAmigos', mensagemNomeExibido);
    }
}

function sortearAmigo() {
    let tamanhoLista = listaDeNomes.length;

    if (tamanhoLista === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * tamanhoLista);
    let mensagemNomeSorteado = `O seu amigo secreto é ${listaDeNomes[nomeSorteado]}!`;
    
    document.querySelector('#resultado').innerHTML = '';   // limpa resultado anterior
    document.querySelector('#listaAmigos').innerHTML = ''; // limpa a lista (tira da tela) 
    exibirTextoNaTela('#resultado', mensagemNomeSorteado);
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    let li = document.createElement('li');
    li.textContent = texto;
    campo.appendChild(li);
}

function limparCampo(){
    let nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}
