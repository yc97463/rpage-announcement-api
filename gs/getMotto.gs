function doGet(request){
  // 引入 Spreadsheet 資料
  const targetSpreadSheet = SpreadsheetApp.openById("1K5jxab6xWZZ__XTIAh4sxZ4x3eXtdPAUmfGnyvoxk2s");
  Logger.log(targetSpreadSheet.getName());
  //https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#openById(String)
  const sheetName = targetSpreadSheet.getSheetByName('sheet1');
  var sheetValues = sheetName.getDataRange().getValues();
  
  var jsonFormated = [];
  var sid = 0;
  sheetValues.forEach((data) => {
    if(data[2]!=true||data[1]==""){return;};
    jsonFormated.push({
      ['id']:sid,
      ['name']:data[0].toString(),
      ['content']:data[1].toString(),
    })
    sid+=1
  })
var exportFormat = JSON.stringify(jsonFormated);
  var final = ContentService.createTextOutput(exportFormat).setMimeType(ContentService.MimeType.JSON);
  Logger.log(final);
  return final;
}