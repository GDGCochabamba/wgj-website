const ExcelJS = require('exceljs');
const fs = require('fs');

const workbook = new ExcelJS.Workbook();
let rows = [];
let registerNames = [];
let keys = [];

function findCoincidence(workbook, worksheetName, values, compared, cellName) {
  const sheet = workbook.addWorksheet(worksheetName);
  const indexName = keys.indexOf(cellName);
  let newItems = [keys]
  for(let item of values) {
    if(compared === item[indexName]) {
      newItems.push(item);
    }
  }
  sheet.addRows(newItems)
}

function findNotCoincidence(workbook, worksheetName, values, compared, cellName) {
  const sheet = workbook.addWorksheet(worksheetName);
  const indexName = keys.indexOf(cellName);
  let newItems = []
  for(let item of values) {
    if(compared !== item[indexName]) {
      newItems.push(item);
    }
  }
  sheet.addRows(newItems)
}

workbook.xlsx.readFile('results-survey745956.xlsx')
  .then(function() {
    const worksheet = workbook.getWorksheet('Registro Women Game Jam 2020 -');
    keys = worksheet.getRow(1).values;
    worksheet.eachRow(function(row, rowNumber) {
      const indexName = keys.indexOf('Nombre completo');
      const indexSubmit = keys.indexOf('Fecha de envío');
      const name = row.values[indexName];
      const isSubmit = row.values[indexSubmit];
      if (!!isSubmit && !!name && !registerNames.includes(name) && name.length > 4) {
        registerNames.push(name);
        rows.push(row.values)
      }
    });
  }).then(() => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Registro limpio');
    sheet.addRows(rows)
    findCoincidence(workbook, 'menores de edad', rows, 'Menor de 18 (menor de edad)', '¿Cuál es tu edad?')
    findCoincidence(workbook, 'equipos', rows, 'Sí', '¿Tienes un equipo ya conformado?')
    findNotCoincidence(workbook, 'sin equipo', rows, 'Sí', '¿Tienes un equipo ya conformado?')
    findNotCoincidence(workbook, 'LGBT', rows, 'Mujer', '¿Cómo te identificas a ti misma?')
    workbook.xlsx.writeFile('filtrados.xlsx');
    console.log('limpieza terminada')
  });
