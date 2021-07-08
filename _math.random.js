const random = (min = 10, max = 50) => {
    let num = Math.random() * (max - min) + min;
    return Math.round(num);
};
let tableContainer = document.querySelector(".table-container");
let rowsCount =3;
let coloumsCount =3;
let button = document.querySelectorAll("button")[0];
let calculationButton = document.querySelectorAll("button")[1];



let tableColumns =(i)=>{
    let columns ="";
    for (j=0; j<=coloumsCount-1;j++){
        let ranNumber = random();
        columns +=`<td>${ranNumber}</td>`
    }
    return columns;

}

let tableRows = ()=>{
   let  row = "";
   for(i=0; i<=rowsCount-1;i++){
       row +=`<tr>${tableColumns(i)}</tr>`
   }

   return row;

}

let table =()=>(`<table>${tableRows()}</tbale>`)

tableContainer.innerHTML = table();



const handleClickEvent = ()=>{
    tableContainer.innerHTML = table();
}

const horizontalRowsCal = () => {
    let horizontalSum = 0;
    let rows = document.querySelectorAll('tr');

    rows.forEach(rowElement => {
        let columns = rowElement.querySelectorAll('td');
        columns.forEach(columnElement => {
            horizontalSum += (+columnElement.innerText);
        });
    });

    return horizontalSum;
};

const verticalColumnsCal = () => {
    let verticalSum = 0;
    for (let i = 1; i <= columnsCount; i++) {
        let cells = document.querySelectorAll(`tr td:nth-child(${i})`);
        cells.forEach((tdElement) => (verticalSum += +tdElement.innerText))
    }
    return verticalSum;
}

const handleCalcuationButtonClick = () => {

    let horizontalCount = horizontalRowsCal();
    let verticalCount = verticalColumnsCal();
   
    document.getElementById('varticalRowsCount').innerText = verticalCount;
    document.getElementById('horizontalRowsCount').innerText = horizontalCount;

    document.getElementById('totalMulVal').innerText = (horizontalCount * verticalCount);
}



button.addEventListener("click", handleClickEvent);
calculationButton.addEventListener('click', handleCalcuationButtonClick);