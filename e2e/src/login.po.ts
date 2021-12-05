import { browser, By, by, element } from "protractor";

export class LoginPage {
    private credentias = {
        username: 'rosa.sepulveda',
        password: '1011'
    };

    navigateTo() {
        // return browser.get('/' + s);
        return browser.get('/login');
    }
    
    fillCredentials(credentias: any = this.credentias) {
        element(by.css('[name="usuario"]')).sendKeys(credentias.username);
        element(by.css('[name="password"]')).sendKeys(credentias.password);
        element(By.name('Iniciar sesión')).click();
      }
    
      getPageTitleText() {
        element(by.css("[page=login]"));
        return element(by.css(".page-selected ion-label")).getText();
      }
    
      getErrorMessage() {
        return element(by.css('.alert-danger')).getText();
      }


    // backButton() {
    //     return element(by.buttonText("Volver"));
    // }

    // recuperarButton() {
    //     return element(by.buttonText("Recuperar contraseña"));
    // }

}