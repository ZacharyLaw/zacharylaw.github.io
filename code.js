function doGet(req) {
  console.log(req)
  if(req.pathInfo=='cat') return html('cat')
  if(req.pathInfo=='map') return html('map')
  if(req.parameter.page=='map') return html('map')
  return html('main')
}
function html(filename){
  return HtmlService.createTemplateFromFile(filename).evaluate().addMetaTag('viewport','width=device-width,initial-scale=1').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}
function grab(v) {
  switch (v) {
    case 'lang':return Session.getActiveUserLocale()
    case 'author':return Session.getEffectiveUser().getEmail()
    case 'user':return Session.getActiveUser().getEmail()
    case 'getActiveUser':return Session.getActiveUser()
    case 'getUsername':return Session.getActiveUser().getUsername()
    default:return -1;
  }
}