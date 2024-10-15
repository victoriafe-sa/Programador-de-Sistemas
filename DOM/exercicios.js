//exercicio 01
function multi(a, b) {
    return a * b;
}
console.log(multi(9, 2));

//exercicio 02
function conv(c) {
    return (9 / 5) * c - 32;
}
console.log(conv(30));

//exercicio 03
function area(l, d) {
    return l * d;
}
console.log(area(5, 6));

//exercicio 04
function div(e, f) {
    if (e / f == 0) {
        console.log('É divisível');
    } else {
        console.log('Não é divisível');
    }
}
console.log(div(3,7))

//exercicio 05
function neg(g) {
    if (g <0) {
        console.log('É negativos');
    }else {
        console.log('Não é negativo');
    }
}
console.log(neg(7))

//exercicio 06
let num = [1, 58, 94, 841, 48];
console.log(num[0] + num[1] + num[2] + num[3] + num[4]);

//exercicio 07
let par = [21, 4, 65, 8,25];
for (let i = 0; i <6; i++){
    if (par[i] % 2 == 0){
        console.log(par[i]);
    }
}

//exercicio 08
function quad(h){
    return h**2;
}
console.log(quad(5))

//exercicio 09
function letra() {
    let text = prompt('Digite uma palavra: ');
    let letter = text.charAt(0);
    if (letter === "v") {
        alert("A primeiro letra é igual a letra desejada");
    } else {
        alert("A primeiro letra não é igual a letra desejada")
    }
}


//exercicio 10
function maior_soma(j,k){
    if(j+k>10){
        console.log("Soma maior que 10")
    }else{
        console.log("Soma menor que 10")
    }
}
console.log(maior_soma(10,5))

//exercicio 11
let array = [1,2,3,4,5,6];
for (let i = 0; i<6; i++){
    if (array[i] % 2 == 0){
        console.log(true);
    }else{
        console.log(false);
    }
} 

//exercicio 12
function numero() {
    let num = prompt('Digite um numero: ');
    let num1 = prompt('Digite outro numero: ');
    let num2 = prompt('Digite um outro numero: ');
    if (num > num1 && num > num2) {
        alert(`O numero ${num} é o maior`);
    } else if (num1 > num && num1 > num2) {
        alert(`O numero ${num1} é o maior`);
    } else {
        alert(`O numero ${num2} é o maior`);
    }
}

//exercicio 13
function soma_N() {
    let N = prompt('Digite um numero para somar até: ');
    let n = 0;
    let soma = 0
    while (n <= N) {
        soma = soma + n;
        n++;
    }
    alert(`Total da soma: ${soma}`)
}

//exercicio 14
function zero(){
    let numero = prompt("Digite um numero: ")
    if(numero>0){
        alert("Numero é positivo");
    }else if(numero<0){
        alert("Numero é negativo");
    }else{
        alert("Numero é igual a zero");
    }
}

//exercicio 15
function bissexto(){
    let ano = prompt("Digite o anoÇ ")
    
}