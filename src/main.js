// cleanTable(); fazer para todos os eventos
// // insertCells(); fazer para todos os eventos (?)
// // insertYear(); fazer para todos os eventos
// insertValues(); chamar uma função para cada evento (2)
// // printValues(); fazer para todos os eventos

const data = Object.values((INJURIES));

let yearChart = data.map((elem) => (elem.Year));

const arr = [0, data.map((elem) => (elem.Total_Injured_Persons_Pedalcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Motorcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Large)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Light)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Car_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Pedestrians)), data.map((elem) => (elem.Total_Injured_Persons_Highway))];

let obj = {};
// let objSort = {};
let year;
let values;
let ind;
let chng = document.getElementById("slct");
let clickColumn2 = document.getElementById("column2");
let count;
let arrayFilter;
let arraySort;
let average;
let max;
let min;

// FUNCIONANDO!!!!!!!!!!!!!!!!!!!!!!!!!!
// let chng = document.getElementById("slct").addEventListener('change', function(){
//     let ind = document.getElementById("slct").selectedIndex;
//     for(i in data){
//         year = data[i].Year;
//         values = arr[ind][i];
//         obj[year] = values;
//     }
//     console.log(obj);
// });


// // SELECT
if(chng.addEventListener('change', function(){
    cleanTable();
    ind = document.getElementById("slct").selectedIndex;
    let title = document.getElementById("slct").options[ind];
    document.getElementById("title").innerHTML = title.text;
    insertCellsValues();
}));

function cleanTable(){
    table.innerHTML = "";
}

function insertCellsValues(){
    count = 0;
    arrayFilter = [];
    arraySort = [];
    for(i of data){
        row = document.getElementById("table").insertRow(-1);
        firstCell = row.insertCell(-1);
        secondCell = row.insertCell(-1);
        getData();
    }
}

function getData(){
    year = i.Year.slice(0, 4);
    values = arr[ind][count];
    obj[year] = values;
    // objSort = year + ': ' + values;
    count += 1;
    insertValues();
}

function insertValues(){
    // firstCell.innerHTML = yearChart[count-1];
    firstCell.innerHTML = Object.keys(obj)[count-1];
    if(obj[year] == null){
        secondCell.innerHTML = '-';
        arraySort.push(0); 
    }
    else{
        secondCell.innerHTML = obj[year];
        arrayFilter.push(obj[year]);
        arraySort.push(obj[year]);
        calc();
    }
}

// CALCULO AGREGADO
function calc(){
    average = (arrayFilter.reduce((accum, curr) => accum + curr)/arrayFilter.length).toFixed(2);
    max = Math.max(...arrayFilter);
    min = Math.min(...arrayFilter);
    document.getElementById("media").innerHTML = 'Média: ' + average;
    document.getElementById("max").innerHTML = 'Máxima: ' + max;
    document.getElementById("min").innerHTML = 'Mínima: ' + min;
}





// Object.entries() retorna um array dos pares key: value

// // ORDENAR
// // CRIAR UM OBJETO COM KEY (ANO), VALOR (VALUE) E PRINTAR NA ORDEM CORRETA
if(clickColumn2.addEventListener('click', function(){
    document.getElementById("sorted").innerHTML = arraySort.sort();
    // cleanTable();
    // count = 0;
    // insertCellsSort();
}));

// function insertCellsSort(){
//     for(i of data){
//     row = document.getElementById("table").insertRow(-1);
//     firstCell = row.insertCell(-1);
//     secondCell = row.insertCell(-1);
//     sorted();
//     }
// }

// function sorted(){
//     // if(arr[count] == null){
//     document.getElementById("sorted").innerHTML = arraySort.sort();
    // firstCell.innerHTML = Object.keys(obj)[count];
    // if((Object.values(obj)[count]) == null){
    //     secondCell.innerHTML = '-';
    // }
    // else{
    //     secondCell.innerHTML =  Object.values(obj)[count];
    // }
    // console.log(Object.values(obj)[count]);
    // }
    // count += 1;
    // let sort = arr[count].sort();
    // firstCell.innerHTML = Object.keys(obj);

    // else{
    //     secondCell.innerHTML = sort;
    // }
    // console.log(obj[year].sort());
// }
//     firstCell.innerHTML = i.slice(0,4);
//     let count = year.indexOf(i);
//     let ind = document.getElementById("slct").selectedIndex;
//     console.log(arr[ind]);
//     let sortedAsc = arr[ind].sort();
//     // console.log(sortedAsc.indexOf(i));
//     // console.log(sortedAsc[count]);
//     let sortedDesc = arr[ind].reverse();
//     secondCell.innerHTML = sortedAsc[count];
// }

//     function sortedAsc(){
//         console.log(arr[ind].sort());
//             // (a, b) => (a > b ? 1 : -1)));
//     }
//     function sortedDesc(){
//         console.log(arr[ind].reverse());
//             // (a, b) => (a > b ? -1 : 1)));
//     }


let firstGraf = document.getElementById('firstGraf').getContext('2d');
let chart = new Chart(firstGraf, {
    type: 'bar',

    data: {
        labels: yearChart,

        datasets: [
            {
                label: 'Ciclistas',
                data: arr[1],
                backgroundColor: "#162e3a",
            },
            {
                label: 'Motociclistas',
                data: arr[2],
                backgroundColor: "#4bb7a0",
            },
            {
                label: 'Ocupantes de caminhão grande',
                data: arr[3],
                backgroundColor: "#ca5b40",
            },
            {
                label: 'Ocupantes de caminhão pequeno',
                data: arr[4],
                backgroundColor: "#9fcde5",
            },
            {
                label: 'Ocupantes de carro',
                data: arr[5],
                backgroundColor: "#FFD700",
            },
            {
                label: 'Pedestres',
                data: arr[6],
                backgroundColor: "#ffd164",
            },
            {
                label: 'Rodovias',
                data: arr[7],
                backgroundColor: "#b2e4ff",
            }
        ]
    }
});







// let arrayFilter = [];



// // PESSOAS FERIDAS
// if(value.addEventListener('click', function(){
//     cleanTable();
//     insertCellsSort();
// }));



// function insertCellsSort(){
//     for(i of year){
//         row = document.getElementById("table").insertRow(-1);
//         firstCell = row.insertCell(-1);
//         secondCell = row.insertCell(-1);
//         sorted();
//     }
// }
// let x;
// function insertValues(){
//     // firstCell.innerHTML = year;
//     // for(i in obj){
//     //     firstCell.innerHTML = i;
//     //     console.log(obj[i]);
//     //     secondCell.innerHTML = obj[i];
//     // }
//     firstCell.innerHTML = obj.year;
//     // x = values[data.indexOf(i)];
//     if(values == null){
//         secondCell.innerHTML = '-';
//     }
//     else{
//         // secondCell.innerHTML = x;
//         // console.log(obj[year]);
//         secondCell.innerHTML = values;
//     }
    // insert average, max, min
    // reduce(values) / values.length
    // Math.max(values);
    // Math.min(values);
// }

// secondTable();

// function secondTable(){
//     let average = (values[data.indexOf(i)]).reduce();
//     console.log(average);
// }

//     // IF ELSE PARA VALUES E SORT. Como fazer?
//     if(arr[ind][count] == null){
//         secondCell.innerHTML = '-';
//     }
//     else{
//         arrayFilter.push(arr[ind][count]);
//         console.log(row.rowIndex);
//         secondCell.innerHTML = arr[ind][count];
//         average = ((arr[ind]).reduce((accum, curr) => accum + curr)/arrayFilter.length).toFixed(2);
//         if(arrayFilter.length == 26){
//             let max = Math.max(...arrayFilter);
//             let min = Math.min(...arrayFilter);
//             arr[ind].push(average, max, min);
//         }
//     }        
// }




// // CHART.JS
// var chart = document.getElementById("chart").getContext("2d");
// var x = {
//     type: 'bar',
//     data: {
//         labels: year,
//         datasets: arrayFilter
//     }
// };

