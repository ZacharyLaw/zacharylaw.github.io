function doGet(req) {
  console.log(req)
  console.log('how are you not saying hai')
  Logger.log('prod no log?')
  if(req.parameter.page=='map') return html('map')
  else return html('main')
}
function html(filename){
  return HtmlService.createTemplateFromFile(filename).evaluate().addMetaTag('viewport','width=device-width,initial-scale=1').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}