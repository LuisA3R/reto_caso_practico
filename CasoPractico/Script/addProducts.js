function addProducts() {
  //Seccion declarativa
  //Variable de URL principal:"https//demoblaze.com"
  var index = KeywordTests.flujoFeliz.Variables.Datos.Value("MAIN_URL");
  //variable de pagina principal
  var page = Sys.Browser("*").Page(index);
  //Programa principal
  Sys.Browser().BrowserWindow(0).Maximize();
  page.Wait();
  //Ciclo de busqueda de primer articulo
  var count = 0;
  do {
    aqUtils.Delay(1000);
    var celular = page.FindChildByXPath("//a[contains(text(),'Samsung galaxy s6')]"); //XPath para el primer articulo: "Samsung Galaxy S6"
    count++;
    //Validacion de que el campo fue encontrado
    if (count > 5) {
      throw "NO SE ENCONTRO EL CAMPO:celular" + celular;
    }
  } while (celular == null);
  celular.click();
  aqUtils.Delay(1000);
  var addToCart = page.FindChildByXPath("//a[contains(text(),'Add to cart')]"); //Asignacion de XPath del boton "Add to Cart"
  addToCart.click();
  page.Alert.Button("OK").Click();
  aqUtils.Delay(1000);
  var home = page.FindChildByXPath("//a[@id='nava']") //Variable de boton de inicio
  home.Click()
  aqUtils.Delay(1000);
  var laptops = page.FindChildByXPath("//a[contains(text(),'Laptops')]") //XPath para categoria de "Laptops"
  laptops.Click()
  //Ciclo de busqueda de segundo articulo
  var count = 0;
  do {
    aqUtils.Delay(1000);
    var macbook = page.FindChildByXPath("//a[contains(text(),'MacBook Pro')]"); //XPath para el segundo articulo: "Macbook Pro"
    count++;
    //Validacion de que se encontro el campo macbook 
    if (count > 5) {
      throw "NO SE ENCONTRO EL CAMPO:macbook \n" + macbook;
    }
  } while (macbook == null);

  macbook.click();
  aqUtils.Delay(1000);
  addToCart = page.FindChildByXPath("//a[contains(text(),'Add to cart')]"); //Asignacion de XPath del boton "Add to Cart"
  addToCart.Click()
  aqUtils.Delay(2000)
  page.Alert.Button("OK").Click();
  aqUtils.Delay(2000)
  home.Click()

}