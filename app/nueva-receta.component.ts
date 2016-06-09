import { Component, OnInit } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import { RecetasService } from "./recetas.service";
import { Receta, Ingrediente } from "./receta";
import { Router } from "@angular/router-deprecated";

@Component({
    template: `
        <div class="row">
            <div class="twelve columns">
                <div>
                    <label for="nombre-receta">Nombre de receta</label>
                    <input id="nombre-receta" type="text" placeholder="Pe. Gazpacho andaluz" class="u-full-width" [(ngModel)]="receta.nombre" />
                </div>
                <div>
                    <label for="ingredientes-receta">Ingredientes</label>
                    <input id="ingredientes-receta" type="text" placeholder="Pe. Tomate" class="u-full-width" [(ngModel)]="ingrediente.nombre" (keyup)="agregarIngrediente($event)" />
                </div>
                <div>
                    <table class="u-full-width">
                        <thead>
                            <tr>
                                <th>Ingrediente</th>
                                <th colspan="2">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ngFor="let ingrediente of receta.ingredientes">
                                <td>{{ ingrediente.nombre }}</td>
                                <td>
                                    <input type="number" [(ngModel)]="ingrediente.cantidad">
                                </td>
                                <td>
                                    <button (click)="eliminarIngrediente($index)">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button class="u-full-width button-primary" (click)="guardarReceta()">Guardar</button>
                </div>
            </div>
        </div>
    `,
    providers: [
        HTTP_PROVIDERS,
        RecetasService
    ]
})
export class NuevaRecetaComponent implements OnInit {

    receta : Receta;
    ingrediente : Ingrediente;

    constructor(
        private _router : Router,
        private _recetasService : RecetasService) { }

    ngOnInit() {

        this.receta = {
            nombre: "",
            ingredientes: []
        };

        this.ingrediente = {
            nombre: "",
            cantidad: 1
        };
    }

    agregarIngrediente(evento) {

        var tecla = evento.which || evento.keyCode;

        if (tecla === 13 && this.ingrediente.nombre) {

            this.receta.ingredientes.push(this.ingrediente);

            this.ingrediente = {
                nombre: "",
                cantidad: 1
            };
        }
    };

    eliminarIngrediente(indice : number) {

        this.receta.ingredientes.splice(indice, 1);
    };

    guardarReceta() {

        this._recetasService
            .guardarReceta(this.receta)
            .subscribe(
                receta => this._router.navigate(['MisRecetas']),
                error => alert(error)
            );
    };
}
