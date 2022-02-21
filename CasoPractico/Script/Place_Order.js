function Place_Order() {
  
   //sección declarativa 
    let url = KeywordTests.flujoFeliz.Variables.Datos.Value("URL_PLACE");//variable que almacena la url del car utilizando el csv
    let name = KeywordTests.flujoFeliz.Variables.Datos.Value("NOMBRE");//variable que almacena el nombre del usuario del csv
    let country = KeywordTests.flujoFeliz.Variables.Datos.Value("PAIS");//variable que almacena el pais del usuario que está en el csv
    let city = KeywordTests.flujoFeliz.Variables.Datos.Value("CIUDAD");//variable que almacena la ciudad del usuario que está en el csv
    let credit_card = KeywordTests.flujoFeliz.Variables.Datos.Value("CREDITCARD");//variable que almacena n° de tarjeta del usuario que está en el csv
    let month = KeywordTests.flujoFeliz.Variables.Datos.Value("MES");//variable que almacena el mes que esta en el csv
    let year = KeywordTests.flujoFeliz.Variables.Datos.Value("YEAR");//variable que almacena el año que esta en el csv
    
    var page = Sys.Browser("*").Page(url);//ejecucion el navegador en la página que le enviamos con la variable url
    Sys.Browser().BrowserWindow(0).Maximize();//función para maximizar la ventana del navegador
    
    page.Wait();//funcion de pausa
    
    
    //Click en Place Order
    do{
      aqUtils.Delay(1000);
      var button_order = page.FindChildByXPath("//button[contains(text(),'Place Order')]");//variable que almacena el xpath del buttom
      count++;
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO \n "+button_order;
      }
    }while(button_order == null);
    button_order.Click();
    var count = 0;
  
    //Buscar campos nombre
    do{
      aqUtils.Delay(1000);

      var campo_name = page.FindChildByXPath("//input[@id='name']");//variable que almacena el xpath del campo name
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO \n"+campo_name;
      }
    }while(campo_name == null );
    campo_name.SetText(name);
    var count = 0;
    
    //Buscar campos Country
    do{
      aqUtils.Delay(1000);

      var campo_country = page.FindChildByXPath("//input[@id='country']");//variable que almacena el xpath del campo pais
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO \n"+campo_country;
      }
    }while(campo_country == null );
    campo_country.SetText(country);
    var count = 0;
    
    //Buscar campos City
    do{
      aqUtils.Delay(1000);

      var campo_city = page.FindChildByXPath("//input[@id='city']");//variable que almacena el xpath del campo ciudad
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO \n"+ campo_city;
      }
    }while(campo_city == null );
    campo_city.SetText(city);
    var count = 0;
    
     //Buscar campos Credit Card
    do{
      aqUtils.Delay(1000);

      var campo_creditcard = page.FindChildByXPath("//input[@id='card']");//variable que almacena el xpath del credit card
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO \n"+campo_creditcard;
      }
    }while(campo_creditcard == null );
    campo_creditcard.SetText(credit_card);
    var count = 0;
    
    //Buscar campos Month
    do{
      aqUtils.Delay(1000);

      var campo_month = page.FindChildByXPath("//input[@id='month']");//variable que almacena el xpath del campo mes
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO \n"+campo_month;
      }
    }while(campo_month == null );
    campo_month.SetText(month);
    var count = 0;
    
    //Buscar campos Year
    do{
      aqUtils.Delay(1000);

      var campo_year = page.FindChildByXPath("//input[@id='year']");//variable que almacena el xpath del campo año
      count++;
      
      if(count>5)
      {
        throw "NO SE ENCONTRO EL CAMPO \n"+campo_year;
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
        throw "NO SE ENCONTRO EL CAMPO \n"+button_purchase;
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
        throw "NO SE ENCONTRO EL CAMPO OK";
      }
    }while(button_success == null );
    button_success.Click(); //click del alert
    var count = 0;

    }  
    