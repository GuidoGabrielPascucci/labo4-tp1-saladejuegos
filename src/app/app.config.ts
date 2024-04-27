import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "sala-de-juegos-d6eba", "appId": "1:17392839037:web:70f84504390e587d5cc414", "storageBucket": "sala-de-juegos-d6eba.appspot.com", "apiKey": "AIzaSyAXK25eTJ_in9YjeHVSukZ0_OJB2tna21I", "authDomain": "sala-de-juegos-d6eba.firebaseapp.com", "messagingSenderId": "17392839037" }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
