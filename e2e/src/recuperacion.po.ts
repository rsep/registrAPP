import { browser, by, element } from "protractor";

export class RecuperacionPage {
    navigateTo(s: string) {
        return browser.get('/' + s);
    }

    backButton() {
        return element(by.buttonText("Volver"));
    }

    recuperarButton() {
        return element(by.buttonText("Recuperar contraseña"));
    }

}