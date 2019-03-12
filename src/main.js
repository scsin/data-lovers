// Recomendamos usar src/main.js para toda a parte do seu código 
// destinada a mostrar dados na tela. Com isto nos referimos basicamente 
// as manipulações de DOM: operações como criação de nós, registro de 
// manipuladores de eventos (event listeners ou event handlers), etc.

// Esta não é a única forma de dividir seu código. Você pode usar mais 
// arquivos e pastas para que sua estrutura fique clara para suas 
// companheiras.

// visualizar os dados, filtrá-los, ordená-los e fazer algum cálculo agregado.

// Como mínimo, sua implementação deve:
// Mostrar os dados em uma interface: pode ser um card, uma tabela, uma lista, etc.
// Permitir ao usuário filtrar e ordenar os dados.
// Calcular estatísticas como média aritmética, máximo e/ou mínimo de algum atributo numérico, ou contar quantas vezes aparece um determinado valor, por exemplo.


// acessar os dados que estão no documento injuries.js
let data = Object.values((INJURIES));

// mapear o (elemento), o (indice), o (array) e dar um console.log de cada um desses parâmetros ou apenas daquele que vc quiser
// data.map((elem, i, array) => console.log(elem.Total_Injured_Persons_Motorcyclists));

// armazenar em uma array os valores de todos os anos e de Total_Injured_Persons_Motorcyclists
// let year = data.map((elem) => (elem.Year));

// pegar os valores anuais das categorias do dropdown e guardar em uma array
let arr = [data.map((elem) => (elem.Year)), data.map((elem) => (elem.Total_Injured_Persons_Pedalcyclists))];
    // , data.map((elem) => (elem.Total_Injured_Persons_Motorcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Large)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Light)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Car_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Bus_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Or_Occupant)), data.map((elem) => (elem.Total_Injured_Persons_Pedestrians)), data.map((elem) => (elem.Total_Injured_Persons_Highway)), data.map((elem) => (elem.Total_Injured_Persons_Commuter_Carrier))];

// Vincular as opções do dropdown com a função categories
let chng = document.getElementById("slct").addEventListener('change', categories);

// FILTRAR E VISUALIZAR OS DADOS
// pegar cada valor dentro da array arr e imprimir na coluna valor, começando na cell[i] (O ÍNDICE DROPDOWN DEVE SER IGUAL A POSIÇÃO DO ARRAY)
function categories(){
    // pegar cada valor dentro da array year e imprimir na coluna ano
    let ind = document.getElementById("slct").selectedIndex;
    console.table(arr[ind]);
}
        let row = document.getElementById("year").insertRow(-1);
        let cell = row.insertCell(-1);
        cell.innerHTML = i;
    }
    // let row = document.getElementById("value").clear;
    var teste = arr[ind];
    // pegar cada valor dentro das diferentes categorias da array arr e imprimir na coluna valor
    for(i of arr[ind]){
        // pegar o INDEX do i para colocar no row.deleteCell[i[index]]
        // let delC = arr[ind].indexOf(i);
        // console.log(delC);
        // row.deleteCell(i[delC]);
        row = document.getElementById("value").insertRow(-1);
        if(i == null){
            cell = row.insertCell(-1);
            cell.innerHTML = '-';
            i = 0;
        }
        else{
            cell = row.insertCell(-1);
            cell.innerHTML = i;
        }
    }
    // let sorted = document.getElementById("column2").addEventListener('click', sortedTable);
    // teste.sort()
    // ORDENAR
    let sortedTable = teste.sort((a, b) => (a > b ? 1 : -1));
    // function sortedTable(a, b){
    //     console.log(b);
    //     if(b >= a){
    //         console.log(1);
    //     }
    //     else{
    //         console.log(0);
    //         // return -1;
    //     }
    // }
    console.log(sortedTable);
}

// sorted.sort((a,b) => (b >= a ? 1 : -1));
// sort(): do maior para o menor e vice-versa (vídeo Jaque 22 min)
//         addEventListener() do clique no 'Ano' e 'Valor'
//         function()

// ESSA FUNÇÃO SÓ VAI SER CHAMADA SE O USUÁRIO CLICAR NO 'ANO' OU 'VALOR'
// ADICIONAR UM MOUSEOVER 
// ELE NÃO TÁ ACHANDO A E B










// posso usar a tabela com uma coluna e concatenar year e value (ficaria bom??? acho que não)
// usar template string (?????)
// replaceChild(): 








// FILTRAR
// filter(): valores maiores do que X
//         criar uma variável input e um button (?)
//         IF os dados forem maiores ou menores do que X > print
// let but = document.getElementById("filter").value.addEventListener("click", v);
// function v(){
//     if(values > i){
//         console.log(i);
//     }
// };










// CÁLCULO AGREGADO
// adicionar o cálculo agregado em outro lugar que não a tabela
// reduce(média);
