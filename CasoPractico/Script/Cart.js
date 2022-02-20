function Cart(){{
  var index = KeywordTests.flujoFeliz.Variables.Datos.Value("MAIN_URL");
  
  var page = Sys.Browser("*").Page(index);
  
  Sys.Browser().BrowserWindow(0).Maximize();
  
  page.Wait();
  
  var count = 0;
    
    do{
      aqUtils.Delay(1000);
      var button_cart = page.FindChildByXPath("//a[@id='cartur']");
      count++;
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO";
      }
    }while(button_cart == null);
    button_cart.Click();
    
    count =0
        do{
      aqUtils.Delay(1000);
        var button_delete = page.FindChildByXPath("//a[contains(text(),'Delete')]")
      count++;
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO";
      }
    }while(button_delete == null);
    button_delete.Click();
    

  
}}