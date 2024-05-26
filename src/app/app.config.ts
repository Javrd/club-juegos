import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"club-juegos-e57b9","appId":"1:652977867113:web:c31aeaf7bd14a0516255f8","storageBucket":"club-juegos-e57b9.appspot.com","apiKey":"AIzaSyDb6GTzso0Pls6eXdzmcKYEU74t2UcqYVs","authDomain":"club-juegos-e57b9.firebaseapp.com","messagingSenderId":"652977867113"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
