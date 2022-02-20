function addProducts(){
  var index = KeywordTests.flujoFeliz.Variables.Datos.Value("MAIN_URL");
 
  var page = Sys.Browser("*").Page(index);
  Sys.Browser().BrowserWindow(0).Maximize();
  page.Wait();
  
  var count = 0;
    do{
      aqUtils.Delay(1000);
      
      var celular = page.FindChildByXPath("//a[contains(text(),'Samsung galaxy s6')]");
      count++;
      
      if(count>5)
      {
       throw "NO SE ENCONTRO EL CAMPO:celular"+celular;
      }
    }while(celular == null);
    
    celular.click();
    aqUtils.Delay(1000);
    var addToCart = page.FindChildByXPath("//a[contains(text(),'Add to cart')]");
    addToCart.click();
    page.Alert.Button("OK").Click();
    aqUtils.Delay(1000);
    var home = page.FindChildByXPath("//a[@id='nava']")
    home.Click()
    aqUtils.Delay(1000);
    var laptops = page.FindChildByXPath("//a[contains(text(),'Laptops')]")
    laptops.Click()

    
     var count = 0;
    do{
      aqUtils.Delay(1000);
      
      var macbook = page.FindChildByXPath("//a[contains(text(),'MacBook Pro')]");
      count++;
      
      if(count>5)
      {
       throw "NO SE ENCONTRO EL CAMPO:macbook \n"+macbook;
      }
    }while(macbook == null);
    
    macbook.click();
    aqUtils.Delay(1000);
    addToCart = page.FindChildByXPath("//a[contains(text(),'Add to cart')]");
    addToCart.Click()
    aqUtils.Delay(2000)
    page.Alert.Button("OK").Click();
    aqUtils.Delay(2000)
    home.Click()
    
  
  
}