var sheet = SpreadsheetApp.getActiveSheet();

function myFunction(){
 
}
// function that works with built in menus
/*function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.

  ui.createMenu('FREDsheets')

      .addSubMenu(ui.createMenu('Money, Banking, & Finance')
        .addItem('Interest Rates', 'menuItem1')
        .addItem('Exchange Rates', 'menuItem2'))

      .addSeparator()

      .addSubMenu(ui.createMenu('Population, Employment, & Labor Markets')
          .addItem('Current Population Survey (household Survey)', 'menuItem3')
          .addItem('Current Employment Statistics (Establishment Survey)', 'menuItem4'))
      
      .addSeparator()

      .addItem('Http Test', 'httpTest1')

  
      .addToUi();
}*/


//functions that will open sidebar to custom html 
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('FREDsheets')
      .addItem('Open Sidebar', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('index.html').setTitle('FREDsheets'); 
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}







function httpTest1(){
  
  //var response = UrlFetchApp.fetch("https://api.stlouisfed.org/fred/series/observations?series_id=GNPCA&api_key=2bade6f9caaef5efb4632d639cb8c8c1", {'muteHttpExceptions': true});
  //sheet.appendRow([response]);
  
  
}

function menuItem1(){
  sheet.appendRow(['Interest Rates']);
}

function menuItem2(){
  sheet.appendRow(['Exchange Rates']);
}

function menuItem3(){
  sheet.appendRow(['Pop']);
}

function menuItem4(){
  sheet.appendRow(['Employment']);
}
