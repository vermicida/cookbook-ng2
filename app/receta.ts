
export interface Receta {
    id? : number;
    nombre : string;
    ingredientes : Ingrediente[]
}

export interface Ingrediente {
    nombre : string;
    cantidad : number;
}
