//FRED API onatour@umass.edu   2bade6f9caaef5efb4632d639cb8c8c1
const api_key = "2bade6f9caaef5efb4632d639cb8c8c1";

const sheet = SpreadsheetApp.getActiveSheet();

//functions that will open sidebar to custom html 
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('FREDsheets')
      .addItem('Open Sidebar', 'showSidebar')
      .addToUi();
}

// Displays the html in the sidebar
function showSidebar() {
  let html = HtmlService.createHtmlOutputFromFile('index.html').setTitle('FREDsheets'); 
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}

//returns the new html page to be displayed
function newPage(page) {
  return HtmlService.createHtmlOutputFromFile(page).getContent()
}

//prints back into the sheet what the search feild has
function repeatSearch(s){
  sheet.appendRow([s])
  fredSearch(s);
}



// prints back into the sheet what the strucutred seach query 
function searchFred(query){
  let url ="https://api.stlouisfed.org/fred/series/search?search_text=" + query + "&api_key=" + api_key + "&file_type=json";

  //let response = UrlFetchApp.fetch(url);

  sheet.appendRow([url]);

  //let result = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});

  //sheet.appendRow([result])


}

function fredSearch(query){
  const response = UrlFetchApp.fetch(("https://api.stlouisfed.org/fred/series/search?search_text=" + query + "&api_key=" + api_key + "&file_type=json" + "&limit=10"), { 'muteHttpExceptions': true });
  const json = response.getContentText();

  

  sheet.appendRow([response]);

  
  

}



