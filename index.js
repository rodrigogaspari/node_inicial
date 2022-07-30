function helloWorld() {
  // FIXME fazer isso aqui funcionar
  console.log('Hello World');
}

const saudacao = () => {
  const hora = new Date().getHours();
  if (hora <= 12) return 'Bom dia';
  if (hora <= 18) return 'Boa tarde';
  return 'Boa noite';
};

// comentário mais bonito!
helloWorld();

function minhaFuncao() {
  // TODO implementar aqui
  console.log('Teste');
}

function minhaFuncaoDois() {
  console.log('valor de função teste');
}

minhaFuncao();
minhaFuncaoDois();
console.log(`A saudação no momento é: ${saudacao()}`);
