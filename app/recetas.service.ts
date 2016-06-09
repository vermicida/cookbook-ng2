import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Receta } from "./receta";

@Injectable()
export class RecetasService {

    private endpoint : string = "http://localhost:9876/api/recetas";

    constructor(private _http : Http) { }

    obtenerRecetas() : Observable<Receta[]> {
        return this._http
            .get(this.endpoint)
            .map(respuesta => respuesta.json());
    }

    guardarReceta(receta : Receta) : Observable<Receta> {

        var datos = JSON.stringify(receta);
        var cabeceras = new Headers({ 'Content-Type': 'application/json' });
        var opciones = new RequestOptions({ headers: cabeceras });

        return this._http
            .post(this.endpoint, datos, opciones)
            .map(respuesta => respuesta.json());
    }
}
