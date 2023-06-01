import { utils, write } from 'xlsx';

export const exportToExcel = (data) => {
  const workbook = utils.book_new();
  const worksheet = utils.json_to_sheet(data);
  utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const fileName = 'Data_KRefurbish.xlsx';

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    // For IE browser
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    // For other browsers
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
