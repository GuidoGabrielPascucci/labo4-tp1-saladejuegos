import { Component, Input, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-juego',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-juego.component.html',
  styleUrl: './tarjeta-juego.component.css'
})
export class TarjetaJuegoComponent {

    constructor(private elementRef: ElementRef, private router: Router) {}

    @Input() gameTitle = ""

    @Input() gameDescription = ""

    @Input() gameImage = {
        src: "",
        alt: ""
    }

    // URL Segment
    @Input() gamePath = ""

    manejadorJugar() {
        alert("Jugar works")
    }

    manejadorPuntajes() {
        alert("Puntajes works")
    }

    redireccionar() {
        this.router.navigate([`/${this.gamePath}`])
    }

    // @HostListener('mouseenter') onMouseEnter() {
    //     console.log(this.elementRef.nativeElement)
    //     this.elementRef.nativeElement.style.backgroundColor = 'red';
    //     this.elementRef.nativeElement
    // }
    
    // @HostListener('mouseleave') onMouseLeave() {
    //     console.log(this.elementRef.nativeElement)
    //     this.elementRef.nativeElement.style.backgroundColor = 'black';
    // }

    // @HostListener('click') onClick() {

    //     this.elementRef.nativeElement.

    //     setTimeout(() => {
    //         console.log(this.elementRef.nativeElement)
    //         console.log('------------------------------------------------')
    //         console.log(this)
    //     }, 500);

    // }


    // ngOnInit(): void {
       
    //     const divCardImage = document.querySelector('.card-image')

    //     if (divCardImage !== null) {
    //         const divCard = <HTMLDivElement>document.querySelector('.card-game')
    //         divCardImage.addEventListener('mouseover', () => {
    //             divCard.style.backgroundColor = "red";
    //         })
    //         divCardImage.addEventListener('mouseout', () => {
    //             divCard.style.backgroundColor = "black"
    //         })
    //     }

    // }

}