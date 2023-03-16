//esse código é a maneira síncrona de fazer a requisição, o 'main.js'
//mostra como fazer esse mesmo código de forma mais eficiente!

var consultaCep = fetch('https://viacep.com.br/ws/38408186/json/') // o fetch consome a api
    .then(resposta => resposta.json()) //converte para JSON 
    .then(r => { // 'then()' serve para executar uma tarefa após a anterior ser sexecutada
        if(r.erro){ //verifica se deu erro e retona uma mensagem no console
            throw Error('Esse CEP não existe'); //joga um erro
        } else {
            console.log(r);
        };
    }) 
    .catch(erro => console.log(erro)) //pega o erro e exibe qual foi o erro

    .finally(mensagem => console.log('Processamento concluído')); // finaliza o consumo da API

console.log(consultaCep)