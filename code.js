var profile=SpreadsheetApp.openById("1XWPC9ToTDPThWTF-h0s6_LWesx2Dew_0dEodfpF0FCI").getSheetByName("Profile")

function doGet(req) {
  console.log(req)
  if(req.pathInfo=='cat') return html('cat')
  if(req.pathInfo=='map') return html('map')
  if(req.pathInfo=='tree') return html('tree')
  if(req.pathInfo=='signin') return html('signin')
  if(req.pathInfo=='getuser') return html('getuser')

  if(req.parameter.page=='signin') return html('signin')
  if(req.parameter.page=='map') return html('map')
  if(req.parameter.page=='cat') return html('cat')
  if(req.parameter.page=='getuser') return html('getuser')

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
    case 'profile':return JSON.stringify(profile.getDataRange().getValues().slice(1),null)
    default:return -1;
  }
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getUser(){
  //Session.getEffectiveUser().getEmail(); // Just for scope
  var url = "https://www.googleapis.com/oauth2/v1/userinfo?alt=json";
  var param = {
    method      : "Get",
    headers     : {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
    'muteHttpExceptions' :true
  };
  var html = UrlFetchApp.fetch(url,param);
  var data = JSON.parse(html.getContentText());
  Logger.log(JSON.stringify(data))
  /* Result is JSON
  {"id":"Google User ID","email":"user@mail.com","verified_email":true,"picture":"https://xxxxxxxxxxxxxxxxx/photo.jpg"}
  */
  return JSON.stringify(data)
}