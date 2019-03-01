// Recomendamos usar src/main.js para toda a parte do seu código 
// destinada a mostrar dados na tela. Com isto nos referimos basicamente 
// as manipulações de DOM: operações como criação de nós, registro de 
// manipuladores de eventos (event listeners ou event handlers), etc.

// Esta não é a única forma de dividir seu código. Você pode usar mais 
// arquivos e pastas para que sua estrutura fique clara para suas 
// companheiras.

// acessar os dados que estão no documento injuries.js
let data = Object.values((INJURIES));

// mapear o (elemento), o (indice), o (array) e dar um console.log de cada um desses parâmetros ou apenas daquele que vc quiser
// data.map((elem, i, array) => console.log(elem.Total_Injured_Persons_Motorcyclists));

// armazenar em uma array os valores de todos os anos de Total_Injured_Persons_Motorcyclists
let motorc = (data.map((elem) => (elem.Total_Injured_Persons_Motorcyclists)));

for(item in data){    
    // add rows here

    // imprimir na tabela
    document.getElementById("value").innerHTML = motorc.join(" ");
}

// Object.keys(data).forEach(element => {
//     console.log(element);
// })




// ESSE CÓDIGO TÁ FUNCIONANDO
// data.forEach(element => {
//     document.getElementById("year").innerHTML = INJURIES[0].Year;
//     let mot = INJURIES[0].Total_Injured_Persons_Motorcyclists;
//     console.log(mot);
//     if(mot == null){
//         document.getElementById("value").innerHTML = 0;
//     }
//     else{
//         document.getElementById("value").innerHTML = INJURIES[0].Total_Injured_Persons_Motorcyclists;
//     }
// });





// for(items of data){
//     for(keys in items){
//         document.getElementById("year").innerHTML = INJURIES.Year;
//         let mot = INJURIES.Total_Injured_Persons_Motorcyclists;
//         console.log(mot);
//         if(mot == null){
//             document.getElementById("value").innerHTML = 0;
//         }
//         else{
//             document.getElementById("value").innerHTML = INJURIES.Total_Injured_Persons_Motorcyclists;
//         }
//     }
// }