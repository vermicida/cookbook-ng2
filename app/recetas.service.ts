import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Receta } from "./receta";
import { RequestOptionsArgs, Headers } from "@angular/http";

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

        var options = new RequestOptionsArgs();
        options.headers = new Headers();
        options.headers.append("Content-Type", "application/json");

        return this._http
            .post(this.endpoint, JSON.stringify(receta), options)
            .map(respuesta => respuesta.json());
    }
}
