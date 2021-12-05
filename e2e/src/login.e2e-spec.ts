// import { browser, By, by, element } from "protractor";
// import { Navigation } from "selenium-webdriver";
// import { HomePage } from "./home.po";
// import { LoginPage } from "./login.po";

// // describe('E2E Vista Recuperar Contraseña',()=>{
// //     let page: LoginPage;

// //     // Confifuracion
// //     beforeEach(()=>{
// //         page = new LoginPage();
// //     })

// //     // Prueba 1
// //     it("1. El usuario no pasa al home si es erroneo", ()=>{
// //         var inputUser = element(by.model('user.mail'));
// //         inputUser.sendKeys('rosa.sepulveda@duocuc.cl');

// //         var inputPass = element(by.model('user.password'));
// //         inputPass.sendKeys('1110');

// //         var boton = element(by.buttonText('login()'));
// //         boton.click();

// //         expect(browser.get('home'));
// //     })

// //     // // deberia salir False porque no tenemos usuario keysend
// //     // it("2. El usuario pasa al login si agregó un email y clickeo Recuperar",()=>{
// //     //     page.recuperarButton().click;
// //     //     expect(page.navigateTo('login'));
// //     // })

// // })

// describe('login page', function(){

//     // configuracion
//     beforeEach(()=>{
//         browser.get("/"); //ir al inicio, una especie de index de nuestra app navegar al localhost
//     })
//     browser.driver.get('login');

//     it('debe cargar login page', function(){

//         // verificar la url actual
//         var currentUrl = browser.driver.getCurrentUrl();
//         expect(currentUrl).toMatch('/login');
//         /*Si quiero que tire error, comento linea 120 y el parametro de expect lo cambio*/
//     });

//     it('debe loguearse', function(){

//         // encontrar elementos de página
//         var userName = browser.driver.findElement(By.name('usuario'));
//         var userPass = browser.driver.findElement(By.name('password'));
//         var botonLogin = browser.driver.findElement(By.name('Iniciar sesión'));

//         // Llenar los campos
//         userName.sendKeys('rosa.sepulveda');
//         userPass.sendKeys('1111');
        
//         console.log(userName);
//         console.log(userPass);

//         // // Asegurar que los campos estén llenos
//         // expect(userName.getAttribute('value')).toContain('rosa.sepulveda');
//         // expect(userPass.getAttribute('value')).toContain('1111');

//         // // Click en Iniciar sesión
//         // botonLogin.click().then(function() {
//         //     browser.driver.wait(browser.waitForAngular(), 5 * 1000); 
//         //     expect(browser.driver.getCurrentUrl()).toMatch('/home')
//         // });
//     });
// })