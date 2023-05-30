var sheet = SpreadsheetApp.getActiveSheet();

function myFunction(){
 
}

function onOpen() {
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

      .addToUi();
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
