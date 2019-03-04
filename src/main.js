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
let year = data.map((elem) => (elem.Year));

// pegar cada valor dentro da array year e imprimir na coluna ano
for(i of year){
    let row = document.getElementById("year").insertRow(-1);
    let cell = row.insertCell(-1);
    cell.innerHTML = i;
}

// pegar os valores anuais das categorias do dropdown e guardar em uma array
let arr = [0, data.map((elem) => (elem.Total_Injured_Persons_Pedalcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Motorcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Large)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Light)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Car_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Bus_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Or_Occupant)), data.map((elem) => (elem.Total_Injured_Persons_Pedestrians)), data.map((elem) => (elem.Total_Injured_Persons_Highway)), data.map((elem) => (elem.Total_Injured_Persons_Commuter_Carrier))];

// Vincular as opções do dropdown com a função categories
let chng = document.getElementById("slct");
chng.addEventListener('change', categories);

// replaceChild()
// filter(): usar para filtrar do maior para o menor....


// pegar cada valor dentro da array arr e imprimir na coluna valor, começando na cell[i] (O ÍNDICE DROPDOWN DEVE SER IGUAL A POSIÇÃO DO ARRAY)
function categories(){
    // let row = document.getElementById("value").clear;
    let ind = document.getElementById("slct").selectedIndex;
    for(i of arr[ind]){
        // pegar o INDEX do i para colocar no row.deleteCell[i[index]]
        // let delC = arr[ind].indexOf(i);
        // console.log(delC);
        // row.deleteCell(i[delC]);
        row = document.getElementById("value").insertRow(-1);
        if(i == null){
            cell = row.insertCell(-1);
            cell.innerHTML = '-';
        }
        else{
            cell = row.insertCell(-1);
            cell.innerHTML = i;
        }
    }
}
