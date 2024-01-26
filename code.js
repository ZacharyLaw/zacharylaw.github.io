function doGet(req) {
  console.log(req)
  if(req.pathInfo=='map') return html('map')
  if(req.parameter.page=='map') return html('map')

  else return html('main')
}
function html(filename){
  return HtmlService.createTemplateFromFile(filename).evaluate().addMetaTag('viewport','width=device-width,initial-scale=1').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}