// import { browser, by, element } from "protractor";
// import { Navigation } from "selenium-webdriver";
// import { RecuperacionPage } from "./recuperacion.po";

// describe('E2E Vista Recuperar Contraseña',()=>{
//     let page: RecuperacionPage;

//     // Confifuracion
//     beforeEach(()=>{
//         page = new RecuperacionPage();
//     })

//     // Prueba 1
//     it("1. El usuario regresa al login al clickear botón Volver",()=>{
//         page.backButton().click;
//         expect(page.navigateTo('login'));
//     })

//     // deberia salir False porque no tenemos usuario keysend
//     it("2. El usuario pasa al login si agregó un email y clickeo Recuperar",()=>{
//         page.recuperarButton().click;
//         expect(page.navigateTo('login'));
//     })

// })