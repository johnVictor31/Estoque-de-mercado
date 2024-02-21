let btnEnviar = document.querySelectorAll('#botao button')[0];
let btnExcluir = document.querySelectorAll('#botao button')[1];
let btnEditar = document.querySelectorAll('#botao button')[2];

let NomeCliente = document.querySelectorAll('#wrap input')[0];
let IDCliente = document.querySelectorAll('#wrap input')[1];
let NomeProduto = document.querySelectorAll('#wrap input')[2];
let IDProduto = document.querySelectorAll('#wrap input')[3];
let Quantidade = document.querySelectorAll('#wrap input')[4];

let tabela = document.querySelector('#tabela table');
let BD = [];


btnEnviar.onclick = function(){
    let produto = new Object();
    produto.NomeCliente = NomeCliente.value;
    produto.IDCliente = IDCliente.value;
    produto.NomeProduto = NomeProduto.value;
    produto.IDProduto = IDProduto.value;
    produto.Quantidade = Quantidade.value;

    produto.id = BD.length;
    BD.push(produto);
    tabela.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.NomeCliente}</td><td>${produto.IDCliente}</td><td>${produto.NomeProduto}</td><td>${produto.IDProduto}</td><td>${produto.Quantidade}</td></tr>`;
}

btnExcluir.onclick = function(){
    for(let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#tabela table tr td input')[i];
        if (elemento.checked){
            BD.splice(elemento.id, 1);
            tabela.innerHTML = `<tr><td width="30px"></td><td>NomeCliente</td><td>IDCliente</td><td>NomeProduto</td><td>IDProduto</td><td>Quantidade</td></tr>`;
            montarTabela();
        }
    }
}

function montarTabela(){
    for (let i = 0; i <BD.length; i++){
        tabela.innerHTML += `<tr><td width="30px"><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].NomeCliente}</td><td>${BD[i].IDCliente}</td><td>${BD[i].NomeProduto}</td><td>${BD[i].IDProduto}</td><td>${BD[i].Quantidade}</td></tr>`;
    }
}

btnEditar.onclick = function(){
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#tabela table tr td input')[i];
        if (elemento.checked){
            BD[i].NomeCliente = NomeCliente.value;
            BD[i].IDCliente = IDCliente.value;
            BD[i].NomeProduto = NomeProduto.value;
            BD[i].IDProduto = IDProduto.value;
            BD[i].Quantidade = Quantidade.value;
            tabela.innerHTML = `<tr><td width="30px"></td><td>NomeCliente</td><td>IDCliente</td><td>NomeProduto</td><td>IDProduto</td><td>Quantidade</td></tr>`;
            montarTabela();
        }
    }
}

function verificar(id){
    let cont = 0;
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#tabela tr td input')[i];
       if (elemento.checked){
        NomeCliente.value = BD[i].NomeCliente;
        IDCliente.value = BD[i].IDCliente;
        NomeProduto.value = BD[i].NomeProduto;
        IDProduto.value = BD[i].IDProduto;
        Quantidade.value = BD[i].Quantidade;


        cont++;
        if(cont > 1){
            alert('nao e possivel mais de uma informação');
            elemento.checked = false;
            break;
        }
       } 
    }
}