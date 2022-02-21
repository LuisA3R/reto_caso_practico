function Place_Order() {
  
  //DECLARACION DE VARIABLES
    let url = KeywordTests.flujoFeliz.Variables.Datos.Value("URL_PLACE");
    let name = KeywordTests.flujoFeliz.Variables.Datos.Value("NOMBRE");
    let country = KeywordTests.flujoFeliz.Variables.Datos.Value("PAIS");
    let city = KeywordTests.flujoFeliz.Variables.Datos.Value("CIUDAD");
    let credit_card = KeywordTests.flujoFeliz.Variables.Datos.Value("CREDITCARD");
    let month = KeywordTests.flujoFeliz.Variables.Datos.Value("MES");
    let year = KeywordTests.flujoFeliz.Variables.Datos.Value("YEAR");                
    
    var page = Sys.Browser("*").Page(url);
    Sys.Browser().BrowserWindow(0).Maximize();
    
    page.Wait();
    
    
    //Click en Place Order
    
    do{
      aqUtils.Delay(1000);
      var button_order = page.FindChildByXPath("//button[contains(text(),'Place Order')]");
      count++;
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO";
      }
    }while(button_order == null);
    button_order.Click();
    var count = 0;
  
    //Buscar campos nombre
    do{
      aqUtils.Delay(1000);

      var campo_name = page.FindChildByXPath("//input[@id='name']");
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO";
      }
    }while(campo_name == null );
    campo_name.SetText(name);
    var count = 0;
    
    //Buscar campos Country
    do{
      aqUtils.Delay(1000);

      var campo_country = page.FindChildByXPath("//input[@id='country']");
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO";
      }
    }while(campo_country == null );
    campo_country.SetText(country);
    var count = 0;
    
    //Buscar campos City
    do{
      aqUtils.Delay(1000);

      var campo_city = page.FindChildByXPath("//input[@id='city']");
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO";
      }
    }while(campo_city == null );
    campo_city.SetText(city);
    var count = 0;
    
     //Buscar campos Credit Card
    do{
      aqUtils.Delay(1000);

      var campo_creditcard = page.FindChildByXPath("//input[@id='card']");
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO";
      }
    }while(campo_creditcard == null );
    campo_creditcard.SetText(credit_card);
    var count = 0;
    
    //Buscar campos Month
    do{
      aqUtils.Delay(1000);

      var campo_month = page.FindChildByXPath("//input[@id='month']");
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO";
      }
    }while(campo_month == null );
    campo_month.SetText(month);
    var count = 0;
    
    //Buscar campos Year
    do{
      aqUtils.Delay(1000);

      var campo_year = page.FindChildByXPath("//input[@id='year']");
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO";
      }
    }while(campo_year == null );
    campo_year.SetText(year);
    var count = 0;
    
    
    //Click en Purchase
    do{
      aqUtils.Delay(1000);
      var button_purchase = page.FindChildByXPath("//button[contains(text(),'Purchase')]");
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO";
      }
    }while(button_purchase == null );
    button_purchase.Click();
    var count = 0;
    
    //Click en OK
    do{
      aqUtils.Delay(1000);
      var button_success = page.FindChildByXPath("//button[contains(text(),'OK')]");
      count++;
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO";
      }
    }while(button_success == null );
    button_success.Click();
    var count = 0;
    
    
    }  
    