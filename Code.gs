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

function showSidebar() {
  let html = HtmlService.createHtmlOutputFromFile('index.html').setTitle('FREDsheets'); 
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}


//https://stackoverflow.com/questions/41156292/google-apps-script-switching-html-files
function showSecond(){
  let html = HtmlService.createHtmlOutputFromFile('index2.html').setTitle('second');
  SpreadsheetApp.getUI().showSidebar(html);
}

function newPage(page) {
  return HtmlService.createHtmlOutputFromFile(page).getContent()
}

// function showSidebar() {
//   let html = HtmlService.createHtmlOutput('https://fred.stlouisfed.org/').setTitle('FREDsheets'); 
//   SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
//       .showSidebar(html);
// }

function repeatSearch(s){
  sheet.appendRow([s])
  searchFred(s);
}

function searchFred(query){
  let url ="https://api.stlouisfed.org/fred/series/search?search_text=" + query + "&api_key=" + api_key + "&file_type=json";

  //let response = UrlFetchApp.fetch(url);

  sheet.appendRow([url]);

  //let result = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});

  //sheet.appendRow([result])



}


function httpTest1(){
  
  //let response = UrlFetchApp.fetch("https://api.stlouisfed.org/fred/series/observations?series_id=GNPCA&api_key=2bade6f9caaef5efb4632d639cb8c8c1", {'muteHttpExceptions': true});
  //sheet.appendRow([response]);
  
  
}

function menuItem1(){
  //sheet.appendRow(['Interest Rates']);
  console.log("hello world");
}


// function that works with built in menus
// function onOpen() {
//   var ui = SpreadsheetApp.getUi();
//   // Or DocumentApp or FormApp.

//   ui.createMenu('FREDsheets')

//       .addSubMenu(ui.createMenu('Money, Banking, & Finance')
//         .addItem('Interest Rates', 'menuItem1')
//         .addItem('Exchange Rates', 'menuItem2'))

//       .addSeparator()

//       .addSubMenu(ui.createMenu('Population, Employment, & Labor Markets')
//           .addItem('Current Population Survey (household Survey)', 'menuItem3')
//           .addItem('Current Employment Statistics (Establishment Survey)', 'menuItem4'))
      
//       .addSeparator()

//       .addItem('Http Test', 'httpTest1')

  
//       .addToUi();
// }


