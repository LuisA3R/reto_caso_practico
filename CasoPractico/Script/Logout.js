function Logout(){
  var url = KeywordTests.flujoFeliz.Variables.Datos.Value("MAIN_URL");

  var page = Sys.Browser("*").Page(url);
  Sys.Browser().BrowserWindow(0).Maximize();
  
  page.Wait();
  
  var count = 0;
  
  
  do{    
  var campo_logout = page.FindChildByXPath("//a[@id='logout2']");
  count++;
  if(count>5)   
  throw "NO SE ENCONTRO EL BOTON"; 
 
  }while(campo_logout == null);
  campo_logout.Click();
  count = 0;
  
  aqUtils.Delay(2000);
 
}