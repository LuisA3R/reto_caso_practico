function singup(){
  var index = KeywordTests.flujoFeliz.Variables.Datos.Value("MAIN_URL");
  var username = KeywordTests.flujoFeliz.Variables.Datos.Value("USERNAME");
  var password = KeywordTests.flujoFeliz.Variables.Datos.Value("PASSWORD");
  
  var page = Sys.Browser("*").Page(index);
  
  Sys.Browser().BrowserWindow(0).Maximize();
  
  page.Wait();
  
  var count = 0;
  
  do{
  var singin = page.FindChildByXPath("//a[@id='signin2']");
  if(count >3){
    throw "No se encontro el campo signin"
  }
  else
    singin.Click();
    
  aqUtils.Delay(1000);
  }while(singin == null);
  do{    
  var campo_username = page.FindChildByXPath("//input[@id='sign-username']");
  count++;
  if(count>5)
   throw "no se encontró el campo: username"; 
  
  }while(campo_username == null);
  
  campo_username.SetText(username);
  count = 0;
  
  aqUtils.Delay(2000);
  
  do{    
  var campo_password = page.FindChildByXPath("//input[@id='sign-password']");
  count++;
  if(count>5)   
  throw "no se encontró el campo: username"; 
 
  }while(campo_password == null);
  campo_password.SetText(password);
  count = 0;
  
  aqUtils.Delay(2000);
 
  do{
      aqUtils.Delay(2000);
      count++;
      var clickSingUp = page.FindChildByXPath("//button[contains(text(),'Sign up')]");
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO PARA INICIAR";
      }
    }while(clickSingUp == null);
 
  
  clickSingUp.Click();
  aqUtils.Delay(2000)
  page.Alert.Button("OK").Click();
    
}