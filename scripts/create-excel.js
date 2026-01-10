import ExcelJS from 'exceljs';

async function createExcelWithScreenshot() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Screenshot');

  // Add image
  const imageId = workbook.addImage({
    filename: 'test-results/screenshot.png',
    extension: 'png',
  });

  // Position the image at cell A1 with size
  worksheet.addImage(imageId, {
    tl: { col: 0, row: 0 },
    ext: { width: 800, height: 600 },
  });

  // Save the workbook
  await workbook.xlsx.writeFile('screenshot.xlsx');
  console.log('Excel file with screenshot created: screenshot.xlsx');
}

createExcelWithScreenshot().catch(console.error);
