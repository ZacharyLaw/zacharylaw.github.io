function doGet(req) {
  console.log(req)
  if(req.pathInfo=='cat') return html('cat')
  if(req.pathInfo=='map') return html('map')
  if(req.pathInfo=='tree') return html('tree')
  if(req.pathInfo=='signin') return html('signin')
  if(req.parameter.page=='map') return html('map')
  return html('main')
}
function html(filename){
  return HtmlService.createTemplateFromFile(filename).evaluate().addMetaTag('viewport','width=device-width,initial-scale=1').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function grab(v) {
  console.log([Session.getActiveUserLocale(),
    Session.getEffectiveUser().getEmail(),
    Session.getActiveUser().getEmail(),
    Session.getActiveUser(),
    Session.getActiveUser().getUsername(),
  Session])
  switch (v) {
    case 'lang':return Session.getActiveUserLocale()
    case 'author':return Session.getEffectiveUser().getEmail()
    case 'user':return Session.getActiveUser().getEmail()
    case 'getActiveUser':return Session.getActiveUser()
    case 'getUsername':return Session.getActiveUser().getUsername()
    default:return -1;
  }
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}