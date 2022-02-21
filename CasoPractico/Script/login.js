function login(){
    //Seccion declarativa
    //Variable de URL principal:"https//demoblaze.com"
    let url = KeywordTests.flujoFeliz.Variables.Datos.Value("MAIN_URL");
    //Variable del nombre de usuario
    let user = KeywordTests.flujoFeliz.Variables.Datos.Value("USERNAME");
    //Variable de la contraseña
    let pass = KeywordTests.flujoFeliz.Variables.Datos.Value("PASSWORD");
    //variable de pagina principal
    var page = Sys.Browser("*").Page(url);
    
    Sys.Browser().BrowserWindow(0).Maximize();
    
    page.Wait();
    
    var count = 0;
    
    //Ciclo de busqueda del boton login
    do{
      aqUtils.Delay(500);
      
      var button_login = page.FindChildByXPath("//a[@id='login2']");//XPath del boton de log in
      count++;
      //Validacion de que se encontro el campo de boton de login
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO: button de login \n"+button_login;
      }
    }while(button_login == null);
   
    button_login.Click();
    //Ciclo de busqueda
    do{
      aqUtils.Delay(500);

      var campo_user = page.FindChildByXPath("//input[@id='loginusername']");//XPath del campo username
      count++;
      //Validacion de que se encontro el campo de username
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO: campo username \n"+campo_user;
      }
    }while(campo_user == null );
    campo_user.SetText(user);
    
    //Ciclo de busqueda del campo password
    do{
      aqUtils.Delay(500);
      
      var campo_password = page.FindChildByXPath("//input[@id='loginpassword']");//XPath del campo password
      count++;
      //Validacion de que se encontro el campo password
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO: password \n"+campo_password;
      }
    }while(campo_password == null);
    campo_password.SetText(pass);
    //Ciclo de busqueda de boton de confirmar login
    do{
      aqUtils.Delay(500);
      var button_login_sec = page.FindChildByXPath("//button[contains(text(),'Log in')]");//Boton de confirmacion de log in
      count++;
      //Validacion de que se encontro el campo Log in
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO PARA INICIAR";
      }
    }while(button_login_sec == null);
    button_login_sec.Click();

}