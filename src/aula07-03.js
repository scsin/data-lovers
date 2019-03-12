const data = Object.values((INJURIES));

const year = data.map((elem) => (elem.Year));
year.push('Méd', 'Máx', 'Mín');

const arr = [0, data.map((elem) => (elem.Total_Injured_Persons_Pedalcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Motorcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Large)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Light)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Car_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Bus_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Or_Occupant)), data.map((elem) => (elem.Total_Injured_Persons_Pedestrians)), data.map((elem) => (elem.Total_Injured_Persons_Highway)), data.map((elem) => (elem.Total_Injured_Persons_Commuter_Carrier))];

let plus;
let row;
let average;
let arrayFilter = [];

function cleanTable(){
    row = document.getElementById("table");
    table.innerHTML = "";
    plus = 0;
}

let chng = document.getElementById("slct");
chng.addEventListener('change', function(){
    cleanTable();
    let ind = document.getElementById("slct").selectedIndex;
    let title = document.getElementById("slct").options[ind];
    document.getElementById("title").innerHTML = title.text;
    for(i of year){
        row = document.getElementById("table").insertRow(-1);
        let firstCell = row.insertCell(-1);
        let secondCell = row.insertCell(-1);
        let count = year.indexOf(i);
        firstCell.innerHTML = i.slice(0,4);
        if(arr[ind][count] == null){
            secondCell.innerHTML = '-';
        }
        else{
            plus += 1;
            arrayFilter.push(arr[ind][count]);
            average = ((arr[ind]).reduce((accum, curr) => accum + curr)/plus).toFixed(2);
            secondCell.innerHTML = arr[ind][count];
            arrayFilter.splice(plus);
            if(plus == 26){
                let max = Math.max(...arrayFilter);
                let min = Math.min(...arrayFilter);
                arr[ind].push(average, max, min);
            }
        }
    }
    // ORDENAR
    // precisa limpar a tabela + ordenar + printar
    let value = document.getElementById("column2").addEventListener('click', sortedAsc);
    function sortedAsc(){
        cleanTable();
        
        console.log(arr[ind].sort());
            // (a, b) => (a > b ? 1 : -1)));
    }
    function sortedDesc(){
        console.log(arr[ind].reverse());
            // (a, b) => (a > b ? -1 : 1)));
    }
});

// CHART.JS
var chart = document.getElementById("chart").getContext("2d");
var x = {
    type: 'bar',
    data: {
        labels: year,
        datasets: arrayFilter
    }
};

var myFirstChart = new Chart(chart, x);