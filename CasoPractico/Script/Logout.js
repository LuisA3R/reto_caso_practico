function Logout(){
 //sección declarativa 
  var url = KeywordTests.flujoFeliz.Variables.Datos.Value("MAIN_URL"); //variable que almacena la url del index utilizando el csv
  var page = Sys.Browser("*").Page(url); //ejecucion el navegador en la página que le enviamos con la variable url
  var count = 0;//declaración de la variable contador
  
  Sys.Browser().BrowserWindow(0).Maximize();//función para maximizar la ventana del navegador
  
  page.Wait();//funcion de pausa 
  
  //ciclo de repetición para controlar que el buttom no sea null
  do{    
  var campo_logout = page.FindChildByXPath("//a[@id='logout2']");//variable que almacenará el xpath del buttom de logout
  count++;//incremento a 1 
  if(count>5)  //condicion para el erro 
  throw "NO SE ENCONTRO EL campo: logOut \n"+campo_logout; 
 
  }while(campo_logout == null);//fin del while
  
  campo_logout.Click();//click al buttom logout
  count = 0;
  
  aqUtils.Delay(2000);//delay o pausa de 2 segundos
 
}