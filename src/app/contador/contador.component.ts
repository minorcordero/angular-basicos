import {Component} from '@angular/core'

@Component({ 
    selector: 'app-contador', 
    template: `
         <h1>Hola mundo</h1>

        {{title}}

        <h3>La base es {{base}}</h3> 
        <button (click)="acumular( base )" > + {{base}} </button>
        <span> {{numero}} </span>
        <button (click)="acumular( -base )" > - {{base}} </button>
    `
})


export class ContadorComponent {

    title: string = 'Contador App'; // solo a modo de ejemplo pongo public y el tipo de variable
    numero: number = 10;
    base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }

}