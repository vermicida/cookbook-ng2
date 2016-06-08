
import { Component } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { MisRecetasComponent } from "./mis-recetas.component";
import { NuevaRecetaComponent } from "./nueva-receta.component";

@Component({
    selector: "app",
    template: `
        <div class="container">
            <div class="row">
                <div class="twelve columns">
                    <header>
                        <h1>Cookbook</h1>
                        <h5>Mis recetas de cocina</h5>
                    </header>
                </div>
            </div>
            <div class="row">
                <div class="twelve columns">
                    <nav class="barra-navegacion">
                        <ul>
                            <li>
                                <a [routerLink]="['MisRecetas']">Mis Recetas</a>
                            </li>
                            <li>
                                <a [routerLink]="['NuevaReceta']">Nueva Receta</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .barra-navegacion ul {
            height: 42px;
            border-bottom: 1px solid #1EAEDB;
        }
        
        .barra-navegacion li {
            display: inline-block;
        }
        
        .barra-navegacion a {
            text-decoration: none;
            display: inline-block;
            padding-top: 8px;
            padding-left: 20px;
            padding-right: 20px;
            height: 33px;
        }
        
        .barra-navegacion a:first-child {
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
        }
        
        .barra-navegacion a.router-link-active {
            border-top: 1px solid #1EAEDB;
            border-left: 1px solid #1EAEDB;
            border-right: 1px solid #1EAEDB;
            border-bottom: 1px solid #ffffff;
        }
        
        .barra-navegacion a:hover {
            cursor: pointer;
        }
    `],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([{
    name: "MisRecetas",
    path: "/mis-recetas",
    component: MisRecetasComponent,
    useAsDefault: true
}, {
    name: "NuevaReceta",
    path: "/nueva-receta",
    component: NuevaRecetaComponent
}])
export class AppComponent { }
