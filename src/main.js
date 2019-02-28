// Recomendamos usar src/main.js para toda a parte do seu código 
// destinada a mostrar dados na tela. Com isto nos referimos basicamente 
// as manipulações de DOM: operações como criação de nós, registro de 
// manipuladores de eventos (event listeners o event handlers), etc.

// Esta não é a única forma de dividir seu código. Você pode usar mais 
// arquivos e pastas para que sua estrutura fique clara para suas 
// companheiras.

let data = Object.values(INJURIES[0]);

for(items of data){
    if(items == null){
        document.write('Ø' + ' ');
    }
    else{
        document.write(items + ' ');
    }
}

document.getElementById("year").