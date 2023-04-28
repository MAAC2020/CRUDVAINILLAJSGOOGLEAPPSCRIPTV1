//@ param {String} e: puede ser la ruta que quiero que se dirija
function doGet(e) {
  let template;
  if (e.parameters.v == "form") {
    template = HtmlService.createTemplateFromFile(
      "frontend/components/Usuario/TablaUsuario"
    );
  } else {
    template = HtmlService.createTemplateFromFile("frontend/index");
  }
  return template
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag(
      "viewport",
      'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"'
    )
    .setTitle("Nombre Proyecto");
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// function doGet() {
//   let template = HtmlService.createTemplateFromFile("frontend/index");
//   return template
//     .evaluate()
//     .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
//     .setSandboxMode(HtmlService.SandboxMode.IFRAME)
//     .addMetaTag(
//       "viewport",
//       'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"'
//     )
//     .setTitle("Nombre Proyecto");
// }

// function include(filename) {
//   return HtmlService.createHtmlOutputFromFile(filename).getContent();
// }
