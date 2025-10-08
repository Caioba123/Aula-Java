//Questão 1
// let x = 10;
// let y = 5;  

// function Somar(x, y) {
//     return x + y;  
// }

// console.log(Somar(x, y));  




// function Subtrair(x, y) {
//     return x - y;  
// }

// console.log(Subtrair(x, y));  




// function Multiplicar(x, y) {
//     return x * y;  
// }

// console.log(Multiplicar(x, y));  




// function Dividir(x, y) {
//     return x / y;  
// }

// console.log(Dividir(x, y));  


//Questão 2
// let salário = prompt("Digite o seu salário:");
// let gratificação = 0.05
// let imposto = 0.07

// function Operação(x, y) {
//      return (salário / gratificação) * imposto;  
// }

// let resultado = (salário / gratificação) * imposto;

// console.log("Seu salário com imposto e gratificação será:", resultado);



//Questão 3
// let nome = prompt("Digite o seu nome:");
// let idade = prompt("Digite a sua idade:");
// let numero = prompt("Digite o seu numero:");

// console.log("Seu nome é:", nome);
// console.log("Sua idade é:", idade);
// console.log("Seu numero é:", numero);


//Questão 4
// let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
// let valor2 = parseFloat(prompt("Digite o segundo valor:"));

// resultado1 = valor1 + valor2;
// resultado2 = valor1 - valor2;
// resultado3 = valor1 * valor2;
// resultado4 = valor1 / valor2;

// console.log("A soma dos valores é:", resultado1);
// console.log("A subtração dos valores é:", resultado2);
// console.log("A multiplicação dos valores é:", resultado3);
// console.log("A divisão dos valores é:", resultado4);


//Questão 5
// let x = parseFloat(prompt("Digite o primeiro valor:"));
// let y = parseFloat(prompt("Digite o segundo valor:"));


// function Somar(x, y) {
//     return x + y;  
// }
// console.log(Somar(x, y));  


// function Subtrair(x, y) {
//     return x - y;  
// }
// console.log(Subtrair(x, y));  


// function Multiplicar(x, y) {
//     return x * y;  
// }
// console.log(Multiplicar(x, y));  


// function Dividir(x, y) {
//     return x / y;  
// }
// console.log(Dividir(x, y));  

//Questão 6
// let nome = prompt("Digite o seu nome:");
// let cidade = prompt("Digite a sua cidade:");
// let estado = prompt("Digite o seu estado:");
// let cep = prompt("Digite o seu cep:");
// let numero = parseFloat(prompt("Digite o seu numero:"));
// let area = prompt("Digite a sua área:");

// console.log("Seu nome é:", nome);
// console.log("Sua cidade é:", cidade);
// console.log("Seu estado é:", estado);
// console.log("Seu cep é:", cep);
// console.log("Seu numero é:", numero);
// console.log("Sua área é:", area);

// Questão 7
// function calcularLucro() {
  
//  var vendas = parseFloat(prompt("Digite o valor projetado do total de vendas:"));
//  var lucro = vendas * 0.23;
  
//  console.log("O lucro projetado é de R$ " , lucro);

// Chama a função
// calcularLucro();


// Questão 8

function maiorNumero() {
  var n1 = parseFloat(prompt("Digite o primeiro número:"));
  var n2 = parseFloat(prompt("Digite o segundo número:"));
  var n3 = parseFloat(prompt("Digite o terceiro número:"));
  var n4 = parseFloat(prompt("Digite o quarto número:"));
  var n5 = parseFloat(prompt("Digite o quinto número:"));

  var maior = n1;

  if (n2 > maior) {
    maior = n2;
  }
  if (n3 > maior) {
    maior = n3;
  }
  if (n4 > maior) {
    maior = n4;
  }
  if (n5 > maior) {
    maior = n5;
  }

  alert("O maior número é: " + maior);
}

// Chama a função
maiorNumero();

