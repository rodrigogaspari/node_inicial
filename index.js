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


//comentário mais bonito!
helloWorld(); 

function minhaFuncao() 
{
    console.log('Hello World');
}

function minhaFuncao() 
{
    console.log("Teste");
}

function minhaFuncaoDois() 
{
    console.log('valor de função teste');
}

minhaFuncao();
console.log('A saudação no momento é: ' + saudacao()); 
