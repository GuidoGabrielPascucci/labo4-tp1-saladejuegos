import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    public loginsCollection: any[] = [] 

    public isThereData = false


    constructor(private firestore: Firestore) {}

    mostrarLogins() {

        if (!this.isThereData) {
            this.getDataFromFirebase()
        }
        
        this.isThereData = true

    }

    getDataFromFirebase() {
        let col = collection(this.firestore, 'logins')
        const observable = collectionData(col)
        observable.subscribe((respuesta) => {
            // actualizamos nuestro array
            this.loginsCollection = respuesta
        })
    }

    limpiar() {
        this.isThereData = false
    }


}
