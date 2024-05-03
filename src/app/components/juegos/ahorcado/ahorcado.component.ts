import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-ahorcado',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ahorcado.component.html',
    styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent implements OnInit {

    @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;

    // @HostListener('document:keydown', ['$event'])
    // handleKey($event: KeyboardEvent): void {
    //     console.log($event.key)
    // }


    // letrasDisponibles: string[] = [
    //     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    // ];

    // palabraAdivinar: string;

    // constructor() {
    //   this.palabraAdivinar = this.generarPalabraAleatoria();
    // }

    // generarPalabraAleatoria(): string {
    //   // Implementa lógica para generar una palabra aleatoria
    //   return 'ANGULAR';
    // }

    // seleccionarLetra(letra: string): void {
    //   // Implementa lógica para manejar la selección de una letra
    //   console.log('Letra seleccionada:', letra);
    // }

    ngOnInit(): void {

        if (this.canvasRef.nativeElement) {

            const canvas = this.canvasRef.nativeElement as HTMLCanvasElement
            const ctx = canvas.getContext("2d");

            if (ctx !== null) {

                // ctx.lineWidth = 1
                // ctx.font = "small-caps bold 25px impact";
                // ctx.textBaseline = "hanging";
                // ctx.textAlign = 'center'
                // ctx.fillRect(0, 0, 1400, 85)

                this.drawHang(ctx)

                // ctx.fillText("Ahorcado", 50, 50)


                // Obtener el contexto 2D del canvas

                // Establecer el color de relleno del texto
                ctx.fillStyle = 'red';

                // Establecer otras propiedades del texto (opcional)
                ctx.font = 'small-caps bold 60px impact';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                // Dibujar el texto en el canvas
                const texto = 'Ahorcado';
                const x = canvas.width / 2;
                // const y = canvas.height / 2;
                ctx.strokeText(texto, x, 80);






                // ctx.rect(100, 100, 50, 50)
                // ctx.strokeText("Ahorcado",100, 100);
                // ctx.fillText("Ahorcado",50, 50)

                // this.canvas.addEventListener('drawCharacter', () => {

                //     let index = fails - 1
                //     const drawingFunction = characterDrawingFunctions[index]
                //     drawingFunction(ctx)

                // })


                // this.canvas.addEventListener('gameOver', () => {
                //     // alert("Game Over")
                // })
            }

        }

    }


    // const canvas = document.getElementById("game") as HTMLCanvasElement;





    // if (canvas.getContext)
    // {
    //     const ctx = canvas.getContext("2d");
    //     if (ctx !== null) {

    //         ctx.lineWidth = 2
    //         ctx.font = "small-caps bold 120px impact";
    //         ctx.textBaseline = "hanging";
    //         ctx.textAlign = 'center'
    //         ctx.strokeText("Ahorcado", 700, 75);



    //         drawHang(ctx)
    //         canvas.addEventListener('drawCharacter', () => {
    //             let index = fails - 1
    //             const drawingFunction = characterDrawingFunctions[index]
    //             drawingFunction(ctx)
    //         })

    //         canvas.addEventListener('gameOver', () => {
    //             // alert("Game Over")



    //             /*

    //             <div class="modal" tabindex="-1">
    //   <div class="modal-dialog">
    //     <div class="modal-content">
    //       <div class="modal-header">
    //         <h5 class="modal-title">Modal title</h5>
    //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //       </div>
    //       <div class="modal-body">
    //         <p>Modal body text goes here.</p>
    //       </div>
    //       <div class="modal-footer">
    //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //         <button type="button" class="btn btn-primary">Save changes</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //             */




    //         })
    //     }
    // }


    posteBase = {
        x: 50,
        y: 500,
        width: 200,
        height: 75
    }

    poste = {
        x: 100,
        y: 120,
        width: 30,
        height: 380
    }

    posteArriba = {
        x: 100,
        y: 100,
        width: 200,
        height: 20
    }

    soga = {
        x: 275,
        y: 120,
        width: 5,
        height: 55
    }


    drawHang(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(this.posteBase.x, this.posteBase.y, this.posteBase.width, this.posteBase.height)
        ctx.fillRect(this.poste.x, this.poste.y, this.poste.width, this.poste.height)
        ctx.fillRect(this.posteArriba.x, this.posteArriba.y, this.posteArriba.width, this.posteArriba.height)
        ctx.fillRect(this.soga.x, this.soga.y, this.soga.width, this.soga.height)
    }

    // drawHead(ctx: CanvasRenderingContext2D) {
    //     ctx.beginPath()
    //     ctx.arc(277, 305, 30, 0, Math.PI * 2, true);
    //     ctx.closePath()
    //     ctx.stroke()
    // }

    // drawBody(ctx: CanvasRenderingContext2D) {
    //     ctx.fillRect(275, 335, 5, 90)
    // }

    // drawRightArm(ctx: CanvasRenderingContext2D) {
    //     ctx.beginPath()
    //     ctx.moveTo(275, 365)
    //     ctx.lineTo(325, 335)
    //     ctx.stroke()
    // }

    // drawLeftArm(ctx: CanvasRenderingContext2D) {
    //     ctx.beginPath()
    //     ctx.moveTo(275, 365)
    //     ctx.lineTo(225, 335)
    //     ctx.stroke()
    // }

    // drawRightLeg(ctx: CanvasRenderingContext2D) {
    //     ctx.beginPath()
    //     ctx.moveTo(275, 420)
    //     ctx.lineTo(325, 475)
    //     ctx.stroke()
    // }

    // drawLeftLeg(ctx: CanvasRenderingContext2D) {
    //     ctx.beginPath()
    //     ctx.moveTo(280, 420)
    //     ctx.lineTo(225, 475)
    //     ctx.stroke()
    // }


    // characterDrawingFunctions = [
    //     drawHead,
    //     drawBody,
    //     drawRightArm,
    //     drawLeftArm,
    //     drawRightLeg,
    //     drawLeftLeg
    // ]


    // --------------------------------------------------------------------------------------

    // const palabras = [
    //     "bilateral",
    //     "unicornio",
    //     "paralelo",
    //     "ambidiestro",
    //     "volatinero",
    //     "aproximaciones",
    //     "extraterrestre",
    //     "hospitalizado",
    //     "candelabro"
    // ]

    // const caracteres = [
    //     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    // ]

    // inicializarBotones() {
    //     const $fragment = document.createDocumentFragment()
    //     for (let i = 0; i < caracteres.length; i++) {
    //         const $btn = crearBoton(caracteres[i]) // creo un botón con una letra del abecedario
    //         $fragment.appendChild($btn) // lo agrego al fragmento
    //     }
    //     const $contenedor = crearContenedorDeBotones()
    //     $contenedor.appendChild($fragment)
    //     document.querySelector("#game-container")?.appendChild($contenedor)
    // }

    // crearBoton(char: string): HTMLButtonElement {
    //     const $btn = document.createElement('button') as HTMLButtonElement
    //     $btn.innerHTML = char
    //     $btn.setAttribute('class', 'p-3 m-3')
    //     $btn.addEventListener('click', buttonsClickHandler)
    //     return $btn
    // }

    // crearContenedorDeBotones(): HTMLDivElement {
    //     const divChars = document.createElement('div') as HTMLDivElement
    //     divChars.setAttribute('class', 'd-flex flex-row justify-content-between flex-wrap my-3')
    //     return divChars
    // }

    // buttonsClickHandler(this: HTMLButtonElement) {
    //     const letraSeleccionada = this.innerHTML.toLocaleLowerCase()
    //     if (palabraActual.includes(letraSeleccionada)) {
    //         const indices = []
    //         for (let i = 0; i < longitudPalabraActual; i++) {
    //             const letraActual = palabraActual[i];
    //             if (letraActual === letraSeleccionada) {
    //                 indices.push(i)
    //             }
    //         }
    //         // tengo los indices
    //         // dibujar letra
    //         // const drawLetterEvent = new Event('drawLetter')
    //     } else {
    //         fails += 1
    //         drawHangman()
    //         if (fails === 6) {
    //             setTimeout(() => {
    //                 gameOver()
    //             }, 10);
    //         }
    //     }
    // }

    // drawHangman() {
    //     const drawCharacterEvent = new Event('drawCharacter');
    //     canvas.dispatchEvent(drawCharacterEvent);
    // }

    // gameOver() {
    //     const gameOverEvent = new Event('gameOver')
    //     canvas.dispatchEvent(gameOverEvent)
    // }

    // obtenerPalabraNueva(): string {
    //     const randomNumber = getRandomNumber(0, palabras.length - 1)
    //     return palabras[randomNumber]
    // }

    // getRandomNumber(min: number, max: number): number {
    //     return Math.floor((Math.random() * (max - min + 1)) + min);
    // }

    // getPalabraActualLength() {

    // }

    // inicializarBoard() {

    //     alert("Hola amigos")

    //     // let x = 400;
    //     // const y = 700;
    //     // for (let i = 0; i < longitudPalabraActual; i++) {
    //     //     x += 120
    //     //     ctx.fillRect(x, y, 80, 10)
    //     // }
    // }

    // function chequearLetraSeleccionada() {
    //     alert()
    // }


    // const palabraActual = obtenerPalabraNueva()
    // const longitudPalabraActual = palabraActual.length

    // let fails = 0

    // // const intentos = 0
    // // const puntaje = 0
    // // const tiempo = 0


    // inicializarBoard()
    // inicializarBotones()


    // alert(palabraActual)

}