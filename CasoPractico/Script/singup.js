function singup(){
   //sección declarativa 
  var index = KeywordTests.flujoFeliz.Variables.Datos.Value("MAIN_URL");//variable que almacena la url del index utilizando el csv
  var username = KeywordTests.flujoFeliz.Variables.Datos.Value("USERNAME");//variable que almacena el username del csv
  var password = KeywordTests.flujoFeliz.Variables.Datos.Value("PASSWORD");//variable que almacena el password del csv
  
  var page = Sys.Browser("*").Page(index);//ejecucion el navegador en la página que le enviamos con la variable index
  
  Sys.Browser().BrowserWindow(0).Maximize();//función para maximizar la ventana del navegador
  
  page.Wait();//funcion de pausa
  
  var count = 0;
  
  do{
  var singin = page.FindChildByXPath("//a[@id='signin2']");//variable que almacena el xpath del buttom singin
  if(count >3){
    throw "No se encontro el campo signin"
  }
  else
    singin.Click();
    
  aqUtils.Delay(1000);
  }while(singin == null);
  do{    
  var campo_username = page.FindChildByXPath("//input[@id='sign-username']");//variable que almacena el xpath del campo username
  count++;
  if(count>5)
   throw "no se encontró el campo: username"; 
  
  }while(campo_username == null);
  
  campo_username.SetText(username);//setea el dato que contiene la variable username del csv en el campo username de la página
  count = 0;
  
  aqUtils.Delay(2000);//delay de 2 segundos
  
  do{    
  var campo_password = page.FindChildByXPath("//input[@id='sign-password']");//variable que almacena el xpath del campo password
  count++;
  if(count>5)   
  throw "no se encontró el campo: username"; 
 
  }while(campo_password == null);
  campo_password.SetText(password);//setea el dato que contiene la variable password del csv en el campo password de la página
  count = 0;
  
  aqUtils.Delay(2000);
 
  do{
      aqUtils.Delay(2000);
      count++;
      var clickSingUp = page.FindChildByXPath("//button[contains(text(),'Sign up')]");//variable que almacena el xpath del del buttom singup
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO PARA INICIAR";
      }
    }while(clickSingUp == null);
 
  
  clickSingUp.Click();//click al buttom singup
  aqUtils.Delay(2000)//delay de 2 segundos
  page.Alert.Button("OK").Click();//click al alert
    
}