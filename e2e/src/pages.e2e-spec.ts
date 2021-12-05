import { browser, element, by } from "protractor";
import { By } from "selenium-webdriver";
import { LoginPage } from "./login.po";
import { AppPage } from './app.po';
import { doesNotReject } from "assert";

// importar servicio para validar login

describe("Prueba_E2E", () => {
    let page: AppPage;

    // configuracion
    beforeEach(()=>{
        // browser.get("/"); //ir al inicio, una especie de index de nuestra app navegar al localhost
        page = new AppPage();
    })

    // prueba 0
    // it("Prueba O. Se levanta Error", () =>{
    //     fail("no existe");
    // })

    // prueba 1
    // it("1. El login se muestra por defecto", function() {
    //     page.navigateTo('login');
    //     browser.driver.sleep(500);
    //     let identificador = element(by.css("#btn-login"));
    //     expect(identificador.getId()).toContain('btn-login_85'); //identificador = Iniciar sesión
    // });

    it("expectTest", function() {
        page.navigateTo('');
        let y = element(by.id('btn-login')).getAttribute('innerText');
        expect(y).toEqual('moon');
        // let x= 'hola';
        // expect(x).toBe('hola');
    })

    // it("2. El usuario navega a Recuperar Contraseña",() => {
    //     page.navigateTo();
    //     element(by.id("btn-login")).click();
    //     browser.driver.sleep(500);
    //     let identificador = element(by.id("btn-recuperar")).getAttribute;
    //     expect(identificador).toContain("k"); //identificador = Recuperar contraseña
    // });

    // // prueba 2
    // it("2. El usuario puede navegar a recuperar contraseña",() => {
    //     element(by.css("[page=recuperacion]")).click();
    //     browser.driver.sleep(500);
    //     expect(element(by.css(".page-selected ion-label")).getText()).toContain("Recuperacion");
    // });

    // prueba 3 
    // it("3. El usuario puede navegar al login",() => {
    //     element(by.css("[pages=login]")).click();
    //     browser.driver.sleep(500);
    //     expect(element(by.css(".page-selected ion-label")).getText()).toContain("Login");
    // })

    // prueba 4
    // it("4. El usuario puede navegar al home",() => {
    //     element(by.css("[page=home]")).click();
    //     browser.driver.sleep(500);
    //     expect(element(by.css(".page-selected ion-label")).getText()).toContain("Home");
    // })

    // prueba 5
    // it("5. El usuario puede navegar al resumen",() => {
    //     element(by.css("[page=resumen]")).click();
    //     browser.driver.sleep(500);
    //     expect(element(by.css(".page-selected ion-label")).getText()).toContain("Resumen");
    // })

    // prueba 6
    // it("6. El usuario puede navegar al historial",() => {
    //     element(by.css("[page=historial]")).click();
    //     browser.driver.sleep(500);
    //     expect(element(by.css(".page-selected ion-label")).getText()).toContain("Historial");
    // })

/*
---------------------------------
*/
    // // prueba 3
    // it("3. Ingresar el correo rosa.sepulveda@duocuc.cl", () => {
    //     element(by.model('user.mail')).sendKeys('rosa.sepulveda@duocuc.cl');
    //     browser.driver.sleep(200);
    //     expect(element(by.css(".page-selected ion-input")).getText()).toContain("rosa.sepulveda@duocuc.cl");
    // });

    // prueba 4
    // it("4. El usuario debe navegar al Home luego de ingresar credenciales",()=>{
    //     var inputUser = element(by.model('user.mail'));
    //     inputUser.sendKeys('rosa.sepulveda@duocuc.cl');

    //     var inputPass = element(by.model('user.password'));
    //     inputPass.sendKeys('1111');

    //     var boton = element(by.buttonText('login()'));
    //     boton.click();

    //     browser.get('/');
    //     var destino = browser.setLocation('home');

    //     browser.sleep(500);

    //     expect(browser.getCurrentUrl()).toBe(destino);

    //     // element(by.model('user.mail')).sendKeys('rosa.sepulveda@duocuc.cl');
    //     // element(by.css("[page=login]")).click();
    //     // expect(element(by.css(".page-selected ion-label")).getText()).toContain("Login");
    // })

    /*
    importante
    */
    // it("El nombre del alumno pasa como dato al home", ()=>{
    //     var inputUser = element(by.model('user.mail'));
    //     inputUser.sendKeys('rosa.sepulveda@duocuc.cl');

    //     var inputPass = element(by.model('user.password'));
    //     inputPass.sendKeys('1111');

    //     var boton = element(by.buttonText('login()'));
    //     boton.click();
 

    //     browser.driver.sleep(500);
    //     expect(element(by.id('#saludo')).getText()).toContain("Caho! Rosario");
    // })

    // // prueba 5
    // it("5. El usuario puede navegar al home si no ingresa credenciales",()=>{
    //     // element(by.model('user.mail')).sendKeys('rosa.sepulveda@duocuc.cl');
    //     element(by.css("[page=home]")).click();
    //     expect(element(by.css(".page-selected ion-label")).getText()).toContain("Home");
    // })


})

