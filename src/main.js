const data = Object.values((INJURIES));

const yearChart = data.map((elem) => (elem.Year));

const arr = [0, data.map((elem) => (elem.Total_Injured_Persons_Pedalcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Motorcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Large)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Light)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Car_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Pedestrians)), data.map((elem) => (elem.Total_Injured_Persons_Highway))];

let obj = {};
const chng = document.getElementById("slct");
const clickColumn2 = document.getElementById("column2");
let count;
let arrayFilter;
let arraySort;
let average;
let max;
let min;
const firstGraf = document.getElementById('firstGraf').getContext('2d');

chng.addEventListener('change', function(){
    cleanTable();
    let ind = document.getElementById("slct").selectedIndex;
    let title = document.getElementById("slct").options[ind];
    document.getElementById("title").innerHTML = title.text;
    insertCellsValues(ind);
});

function cleanTable(){
    table.innerHTML = "";
}

function insertCellsValues(ind){
    count = 0;
    arrayFilter = [];
    arraySort = [];
    for(i of data){
        row = document.getElementById("table").insertRow(-1);
        firstCell = row.insertCell(-1);
        secondCell = row.insertCell(-1);
        getData(ind);
    }
}

function getData(ind){
    let year = i.Year.slice(0, 4);
    const values = arr[ind][count];
    obj[year] = values;
    count += 1;
    insertValues(year);
}

function insertValues(year){
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

function calc(){
    average = (arrayFilter.reduce((accum, curr) => accum + curr)/arrayFilter.length).toFixed(2);
    max = Math.max(...arrayFilter);
    min = Math.min(...arrayFilter);
    document.getElementById("media").innerHTML = 'Média: ' + average;
    document.getElementById("max").innerHTML = 'Máxima: ' + max;
    document.getElementById("min").innerHTML = 'Mínima: ' + min;
}

clickColumn2.addEventListener('click', function(){
    document.getElementById("sorted").innerHTML = arraySort.sort();
});

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
