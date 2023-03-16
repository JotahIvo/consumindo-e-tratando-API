const inputCep = document.getElementById('cep');

inputCep.addEventListener('focusout', () => {
    buscaEndereco(inputCep.value);
});

async function buscaEndereco(cep){
    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

    try { //vai ocorrer a tentativa de realizar essas requisições se der errado o catch é ativado
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        //a função assincrona acelera o processamento dos dados e a função json()
        //converte os dados para o formato JSON

        if(consultaCepConvertida.erro){ //verifica se há erro e joga o erro com o 'throw'
            throw Error('CEP não existente!');
        };
        
        //preencher o valor dos inputs
        const inputCidade = document.getElementById('cidade');
        const inputEndereco = document.getElementById('endereco');
        const inputEstado = document.getElementById('estado');
        const inputBairro = document.getElementById('bairro');

        inputCidade.value = consultaCepConvertida.localidade;
        inputEndereco.value = consultaCepConvertida.logradouro;
        inputBairro.value = consultaCepConvertida.bairro;
        inputEstado.value = consultaCepConvertida.uf;

        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch(erro){ //capta o erro e executa o comando escrito
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    };
};

/* let ceps = ['01001000', '38408186', '75692026']; //array de ceps
let consjuntoDeCeps = ceps.map(cep => buscaEndereco(cep)); //retorna todos os ceps depois da requisição
Promise.all(consjuntoDeCeps).then(respostas => console.log(respostas)); //auxilia em múltiplas requisições */