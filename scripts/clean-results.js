const ExcelJS = require('exceljs');
const fs = require('fs');

const workbook = new ExcelJS.Workbook();
let rows = [];
let registerNames = [];

workbook.xlsx.readFile('results-survey745956.xlsx')
  .then(function() {
    const worksheet = workbook.getWorksheet('Registro Women Game Jam 2020 -');
    const keys = worksheet.getRow(1).values;
    worksheet.eachRow(function(row, rowNumber) {
      const indexName = keys.indexOf('Nombre completo');
      const name = row.values[indexName];
      if (!!name && !registerNames.includes(name) && name.length > 4) {
        registerNames.push(name);
        rows.push(row.values)
      }
    });
  }).then(() => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Registro limpio');
    sheet.addRows(rows)
    workbook.xlsx.writeFile('limpios.xlsx');
    console.log('limpieza terminada')
  });
