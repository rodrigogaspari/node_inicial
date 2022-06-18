function helloWorld()
{
    console.log('Hello World');     
}

const saudacao = () => 
{
    var data = new Date();
    return data.getHours() < 12 ? "Bom dia!" : 
    data
    .getHours() <=18 ? "Boa tarde" : "Boa noite"; 
}


//comentário
helloWorld(); 

function minhaFuncao() 
{
    console.log('Hello World');
}

function minhaFuncao() 
{
    console.log("Teste");
}


minhaFuncao();
console.log('A saudação no momento é: ' + saudacao()); 
