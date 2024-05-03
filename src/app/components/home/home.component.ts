import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';

import { TarjetaJuegoComponent } from '../layout/tarjeta-juego/tarjeta-juego.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, TarjetaJuegoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    public loginsCollection: any[] = [] 

    public isThereData = false

    juegosInformacion = [
        {
            title: "Ahorcado",
            description: "Prueba tu conocimiento con las palabras sin que te cuelguen!",
            image: {
                src: "https://t3.ftcdn.net/jpg/03/63/09/08/360_F_363090811_wNoDTuqgxnVN3ZdWJAH9rkiexDEtMLA9.jpg",
                alt: "Imagen tradicional del juego del ahorcado"
            },
            gamePath: "ahorcado"
        },
        {
            title: "Mayor o Menor",
            description: "sdmsafnjsnf",
            image: {
                src: "https://www.caosyciencia.com/wp-content/uploads/2023/09/mayor-o-menor-que.jpg",
                alt: "Imagen de mayor o menor"
            },
            gamePath: "mayor-o-menor"
        },
        {
            title: "Preguntados",
            description: "Da clases con tu vasto conocimiento respondiendo correctamente múltiples preguntas acerca de varios temas.",
            image: {
                src: "https://img.freepik.com/fotos-premium/icono-pregunta-respuesta-signo-interrogacion_297535-5194.jpg",
                alt: "Juego del Preguntados"
            },
            gamePath: "preguntados"
        },
        {
            title: "Mario",
            description: "Juega al tradicional Mario y muestra tu liderazgo.",
            image: {
                src: "https://elcomercio.pe/resizer/Rpf-glkfKsgpmiV5Dw3fVKpM7yQ=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LNTKTVVQN5EJDNYWEYMPYM7NUY.jpg",
                alt: "Mario"
            },
            gamePath: "mario"
        },
    ]

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