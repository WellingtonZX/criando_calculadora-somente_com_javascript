//CRIANDO UMA CALCULADORA:

function calculadora() {
  //Declarei uma função chamada calculadora, usando a função declarativa;
  const operacao = Number(
    prompt(
      "Escolha a operação:\n 1 - soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisao Inteira (%)\n 6 - Potenciação (**)"
    )
  );
  //Aqui criei uma constante(const) chamada operação, que vai receber um (prompt), Logo em seguida declarei as operações;
  //Numer--> Vai converter de string para number, começa com N maiusculo;
  //O (prompt) vai mostrar uma janela que é para pegar uma entrada de um usuario;
  // (\n) = Contra barra + N  -> E utilizado para fazer uma quebra de linha;

  //VERIFICANDO SE A OPERAÇÃO É VÁLIDA
  if (!operacao || operacao >= 7) {
    //(!operação) = Ele vai ver se operação e diferente do tipo numero; (||)<--(ou) se opração maior ou igual a sete;
    alert("erro - Operação Inválida! "); //Ele vai mostrar um alerta --> erro - operação invalida....;
    calculadora(); // E vai chamar calculadora novamente;
  } else {
    // (se não) ele vai executar toda essa operação abaixo;

    //DEFININDO VARIAVEIS;
    let n1 = Number(prompt("Ensira o Primeiro Numero: ")); //Definir uma let chamada (n1) que vai ser um prompt e vai receber a ('mensagem');
    let n2 = Number(prompt("Ensira o Segundo Numero: ")); //Definir uma let chamada (n2) que vai ser um prompt e vai receber a ('mensagem');
    let resultado; //Definir uma let chamada (resultado) que vai inicializar sem nenhum valor;
    //Numer--> Vai converter de string para number, começa com N maiusculo;

    //VERIFICANDO SE AS VARIÁVEIS SÃO VÁLIDAS:
    if (!n1 || !n2) {
      //Criando um if(se), (!n1, !n2) = Vai verificar se e diferente de numero;
      alert("Erro - Parãmetros inválidos"); // Criado um alerta --> Erro - parãmetros inválidos;
      calculadora(); //Chamando calculadora novamente;
    } else {
      //Caso não dé erro, ele vai chamar executar os comandos abaixo.

      //DECLARANDO FUNÇÕES;
      function soma() {   //Declarei uma funcão chamada soma...;
        resultado = n1 + n2; //que vai pegar o resultado e vai atribuir (n1) mais(+) (n2);

        // MOSTRANDO O RESULTADO USANDO TEMPLATE STRINGS
        alert(`${n1} + ${n2} = ${resultado}`); //E vai demonstrar um alerta...;
        novaOperacao(); //Vai aparecer a mensagem depois da operação --> Deseja fazer uma nova operação?
      }
      //Lembrando que é para utilizar crase(``)--> Asim podemos utilizar string junto com expressoes e junto com variaveis;
      //Number--> o Prompit interpreta a entrada do usuario como uma string e não como number| Pra resolver é so utilizar (number);

      function Subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }
      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoreal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisaointeira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
      }
      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª = ${resultado}`);
        novaOperacao();
      }

      //NOVA OPERAÇÃO
      function novaOperacao() {
        //Criado uma função chamada novaOperacao...;
        let opcao = prompt(
          "Deseja fazer uma nova operação?\n 1 - Sim\n 2 - não "
        ); //Que vai receber uma variavel chamada opcao e que vai ser um prompt e esse prompt vai perguntar se desejo fazer uma nova operação;

        if (opcao == 1) {
          //se a opcao for igual igual a 1 então ele vai chamar a calculadora novamente;
          calculadora();
        } else if (opcao == 2) {
          //Se a opção for igual igual a 2 , ele vai dar uma alerta dizendo --> até mais;
          alert("Até mais");
        } else {
          //Se a opcao não for nenhum nem outro, ele vai dar um erro com a mensagem -->'digite uma opção valida? ';
          alert("Digite uma opção válida! ");
          novaOperacao();
        }
      }
    }

    //CRIANDO UM VERIFICADOR DE OPERAÇÕES;
    /*if (operacao == 1) {
      //Se operação for igual igual a 1(um);
      soma(); //Então ele vai chamar uma função chamada soma;
    } else if (operacao == 2) {
      // Se operação for igual igual a 2(dois);
      Subtracao(); //Então ele vai chamar uma função chamada subtração;
    } else if (operacao == 3) {
      // Se operação for igual igual a 3(tres);
      multiplicacao(); //Então ele vai chamar uma função chamada Multiplicação;
    } else if (operacao == 4) {
      // Se operação for igual igual a 4(quatro);
      divisaoreal(); //Então ele vai chamar uma função chamada Divisão Real;;
    } else if (operacao == 5) {
      // Se operação for igual igual a 5(cinco);
      divisaointeira(); //Então ele vai chamar uma função chamada Divisão Inteira;;
    } else if (operacao == 6) {
      // Se operação for igual igual a 6(seis);
      potenciacao(); //Então ele vai chamar uma função chamada Pontenciação;
    }*/

    //OUTRO METODO DE OPERAÇÃO, USANDO SWITCH CASE
    switch (
      operacao //CRIANDO O SWITCH CASE
    ) {
      case 1: //CASO 1...;
        soma(); //Realiza a soma;
        break; //Realizado um break para não ficar em loop;
      case 2: //caso 2...;
        Subtracao(); //Realiza a subtração;
        break; //Realizado um break para não ficar em loop e assim sucessivivamente....
      case 3:
        multiplicacao();
        break;
      case 4:
        divisaoreal();
        break;
      case 5:
        divisaointeira();
        break;
      case 6:
        potenciacao();
        break;
    }
  }
}
calculadora(); //Chamei a função calculadora;

//FIM DA CALCULADORA;
