// SORT
// let companies = [3, 4, 5, 2, 1];
// const sortedCompanies = companies.sort((a, b) => (b > a ? -1 : 1));
// console.log(sortedCompanies);



let data = Object.values((INJURIES));

let year = data.map((elem) => (elem.Year));

let arr = [0, data.map((elem) => (elem.Total_Injured_Persons_Pedalcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Motorcyclists)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Large)), data.map((elem) => (elem.Total_Injured_Persons_Truck_Occupants_Light)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Car_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Bus_Occupants)), data.map((elem) => (elem.Total_Injured_Persons_Passenger_Or_Occupant)), data.map((elem) => (elem.Total_Injured_Persons_Pedestrians)), data.map((elem) => (elem.Total_Injured_Persons_Highway)), data.map((elem) => (elem.Total_Injured_Persons_Commuter_Carrier))];

let chng = document.getElementById("slct").addEventListener('change', function(){
    for(i of year){
        let row = document.getElementById("year").insertRow(-1);
        let cell = row.insertCell(-1);
        cell.innerHTML = i;
    }
    let ind = document.getElementById("slct").selectedIndex;
    for(i of arr[ind]){
        row = document.getElementById("value").insertRow(-1);
        if(i == null){
            cell = row.insertCell(-1);
            cell.innerHTML = '-';
            arr[ind[i]] = 0;
        }
        else{
            cell = row.insertCell(-1);
            cell.innerHTML = i;
        }
    }
    // ORDENAR
    let value = document.getElementById("column2").addEventListener('click', sortedAsc);
    function sortedAsc(){
        console.log(arr[ind].sort((a, b) => (a > b ? 1 : -1)));
    }
    function sortedDesc(){
        console.log(arr[ind].sort((a, b) => (a > b ? -1 : 1)));
    }
});


// filter() retorna true ou false