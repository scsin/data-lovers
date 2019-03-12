// cleanTable(); fazer para todos os eventos
// // insertCells(); fazer para todos os eventos (?)
// // insertYear(); fazer para todos os eventos
// insertValues(); chamar uma função para cada evento (2)
// // printValues(); fazer para todos os eventos

const data = Object.values((INJURIES));

const year = data.map((elem) => (elem.Year));
year.push('Méd', 'Máx', 'Mín');

const arr = [0, data.map((elem) => (elem.Total_Injured_Persons_Pedalcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Motorcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Large)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Light)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Car_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Bus_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Or_Occupant)), data.map((elem) => (elem.Total_Injured_Persons_Pedestrians)), data.map((elem) => (elem.Total_Injured_Persons_Highway)), data.map((elem) => (elem.Total_Injured_Persons_Commuter_Carrier))];

let row = document.getElementById("table");
let firstCell;
let secondCell;
let average;
let arrayFilter = [];
let chng = document.getElementById("slct");
let value = document.getElementById("column2");

// SELECT
if(chng.addEventListener('change', function(){
    cleanTable();
    insertCellsValues();
}));

// let main = document.getElementsByTagName('main').addEventListener('change', function(){
//     cleanTable();
// });

// PESSOAS FERIDAS
if(value.addEventListener('click', function(){
    cleanTable();
    insertCellsSort();
}));

function cleanTable(){
    table.innerHTML = "";
}

function insertCellsValues(){
    for(i of year){
        row = document.getElementById("table").insertRow(-1);
        firstCell = row.insertCell(-1);
        secondCell = row.insertCell(-1);
        insertValues();
    }
    // if(for chamado por chng){chamar insertCellsValues()}
    // else(chamar insertCellsSort());
}

function insertCellsSort(){
    for(i of year){
        row = document.getElementById("table").insertRow(-1);
        firstCell = row.insertCell(-1);
        secondCell = row.insertCell(-1);
        sorted();
    }
}

function insertValues(){
    // INSERIR ANO (precisa fazer 1 vez só)
    let ind = document.getElementById("slct").selectedIndex;
    let title = document.getElementById("slct").options[ind];
    document.getElementById("title").innerHTML = title.text;
    let count = year.indexOf(i);
    firstCell.innerHTML = i.slice(0,4);
    // IF ELSE PARA VALUES E SORT. Como fazer?
    if(arr[ind][count] == null){
        secondCell.innerHTML = '-';
    }
    else{
        arrayFilter.push(arr[ind][count]);
        console.log(row.rowIndex);
        secondCell.innerHTML = arr[ind][count];
        average = ((arr[ind]).reduce((accum, curr) => accum + curr)/arrayFilter.length).toFixed(2);
        if(arrayFilter.length == 26){
            let max = Math.max(...arrayFilter);
            let min = Math.min(...arrayFilter);
            arr[ind].push(average, max, min);
        }
    }        
}

// ORDENAR PELO ÍNDICE DE CADA CÉLULA (?)
// CRIAR UM OBJETO COM KEY (ANO), VALOR (VALUE) E PRINTAR NA ORDEM CORRETA
function sorted(){
    firstCell.innerHTML = i.slice(0,4);
    let count = year.indexOf(i);
    let ind = document.getElementById("slct").selectedIndex;
    console.log(arr[ind]);
    let sortedAsc = arr[ind].sort();
    // console.log(sortedAsc.indexOf(i));
    // console.log(sortedAsc[count]);
    let sortedDesc = arr[ind].reverse();
    secondCell.innerHTML = sortedAsc[count];
}

//     function sortedAsc(){
//         cleanTable();
//         console.log(arr[ind].sort());
//             // (a, b) => (a > b ? 1 : -1)));
//     }
//     function sortedDesc(){
//         console.log(arr[ind].reverse());
//             // (a, b) => (a > b ? -1 : 1)));
//     }


// // CHART.JS
// var chart = document.getElementById("chart").getContext("2d");
// var x = {
//     type: 'bar',
//     data: {
//         labels: year,
//         datasets: arrayFilter
//     }
// };

// var myFirstChart = new Chart(chart, x);