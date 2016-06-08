import { Component, OnInit } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import { RecetasService } from "./recetas.service";
import { Receta } from "./receta";

@Component({
    template: `
        <div class="row">
            <div class="twelve columns">
                <table class="u-full-width">
                    <tbody>
                        <tr *ngFor="let receta of recetas">
                            <td>{{ receta.nombre }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    providers: [
        HTTP_PROVIDERS,
        RecetasService
    ]
})
export class MisRecetasComponent implements OnInit {

    recetas : Receta[];

    constructor(private _recetasService : RecetasService) { }

    ngOnInit() {
        this._recetasService
            .obtenerRecetas()
            .subscribe(
                recetas => this.recetas = recetas,
                error => alert(error)
            );
    }
}
