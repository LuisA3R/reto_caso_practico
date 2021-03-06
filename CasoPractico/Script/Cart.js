function Cart(){
  //Seccion declarativa
  //Variable de URL principal:"https//demoblaze.com/cart.html"
  var index = KeywordTests.flujoFeliz.Variables.Datos.Value("MAIN_URL");
  //variable de pagina principal
  var page = Sys.Browser("*").Page(index);
  
  Sys.Browser().BrowserWindow(0).Maximize();
  
  page.Wait();
  
  var count = 0;
    //Ciclo de busqueda del boton del carrito de compras
    do{
      aqUtils.Delay(1000);
      var button_cart = page.FindChildByXPath("//a[@id='cartur']");
      count++;
      //Validacion de que el campo fue encontrado
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO: boton del carrito \n"+button_cart;
      }
    }while(button_cart == null);
    button_cart.Click();
    
    count =0
    //Ciclo de busqueda del boton de delete del articulo
    do{
      aqUtils.Delay(1000);
        var button_delete = page.FindChildByXPath("//a[contains(text(),'Delete')]")
      count++;
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO: boton de delete de producto\n"+button_delete;
      }
    }while(button_delete == null);
    button_delete.Click();
    

  
}