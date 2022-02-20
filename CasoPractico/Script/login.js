﻿function login(){
     //DECLARACION DE VARIABLES
    let url = KeywordTests.flujoFeliz.Variables.Datos.Value("MAIN_URL");
    let user = KeywordTests.flujoFeliz.Variables.Datos.Value("USERNAME");
    let pass = KeywordTests.flujoFeliz.Variables.Datos.Value("PASSWORD");
    
    var page = Sys.Browser("*").Page(url);
    
    
    Sys.Browser().BrowserWindow(0).Maximize();
    
    page.Wait();
    
    var count = 0;
    
    //Buscar campos usuario
    
    do{
      aqUtils.Delay(500);
      
      var button_login = page.FindChildByXPath("//a[@id='login2']");
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO PARA INICIAR";
      }
    }while(button_login == null);
   
    button_login.Click();
   
    do{
      aqUtils.Delay(500);

      var campo_user = page.FindChildByXPath("//input[@id='loginusername']");
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO PARA INICIAR";
      }
    }while(campo_user == null );
    campo_user.SetText(user);
    
 
    do{
      aqUtils.Delay(500);
      
      var campo_password = page.FindChildByXPath("//input[@id='loginpassword']");
      count++;

      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO PARA INICIAR";
      }
    }while(campo_password == null);
    campo_password.SetText(pass);
    
    do{
      aqUtils.Delay(500);
      var button_login_sec = page.FindChildByXPath("//button[contains(text(),'Log in')]");
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO PARA INICIAR";
      }
    }while(button_login_sec == null);
    button_login_sec.Click();

}