function crearTriggerNotificacion() {
    var hoja = SpreadsheetApp.openById('1gU2mx8cBpL_4H5vouFGgr9rusETdNd6IrBzmP9fOJaQ');
  
    var nombreHoja = hoja.getSheetByName('Usuario');
  
    // Crear el trigger
    ScriptApp.newTrigger('enviarNotificacion')
      .forSpreadsheet(hoja)
      .onEdit()
      .create();
  
    Logger.log('Se ha creado un trigger en la hoja ' + nombreHoja + ' que enviará una notificación cuando se edite.');
  }
  
  function enviarNotificacion(e) {
    console.log(e)
    // var range = e.range;
    // var row = range.getRow();
    // var col = range.getColumn();
    // var sheet = range.getSheet().getName();
    // Logger.log("La celda " + sheet + "!" + range.getA1Notation() + " ha sido modificada en la fila " + row + " y columna " + col);
  }