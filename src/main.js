const data = Object.values((INJURIES));

let yearChart = data.map((elem) => (elem.Year));

const arr = [0, data.map((elem) => (elem.Total_Injured_Persons_Pedalcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Motorcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Large)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Light)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Car_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Pedestrians)), data.map((elem) => (elem.Total_Injured_Persons_Highway))];

let obj = {};
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
    count += 1;
    insertValues();
}

function insertValues(){
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

if(clickColumn2.addEventListener('click', function(){
    document.getElementById("sorted").innerHTML = arraySort.sort();
}));

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
