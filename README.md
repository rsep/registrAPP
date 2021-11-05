# registrAPP
Caso Semestral para el ramo PGY4121 / primavera 2021

###### Integrantes:
- Camilo Flores
- Rosario Sepúlveda

-------------------------------------------------------

[ERROR] ng has unexpectedly closed (exit code 127).
```
npm install @ionic/app-scripts@latest --save-dev
```

Crear pages anidadas en carpeta
```
ionic g page nombreCarpeta/nombrePagina
ionic g page pages/login
```

-------------------------------------------------------

###### Comandos importantes:

Instalación Ionic
```
npm install-g  @ionic/cli
```

Angular Material
```
npm install -g @angular/cli@latest
ng add @angular/material
```

Storage Ionic
```
npm install @ionic/storage-angular
```

Lottie (para gráficos animados)
```
npm i lottie-web ngx-lottie
```

BarcodeScanner (API nativa) - Capacitor
```
npm install phonegap-plugin-barcodescanner
npm install @ionic-native/barcode-scanner
ionic cap sync
```

Integración Android Studio (sincronizar y levantar)
```
npm install @capacitor/android
npx cap add android
ionic capacitor sync android
npx cap open android
```

En caso de error con capacitor sync android:
```
npm install --save @ionic-native/core
```
