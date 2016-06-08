# cookbook-ng2

Me ha costado un poco, pero aquí te dejo -por fin- la versión Angular 2 de la aplicación [Cookbook](https://github.com/vermicida/cookbook-ng1).

## Puesta a punto

Lo primero que necesitas hacer es clonar este repositorio. Puedes descargar el documento `zip` desde la propia interfaz de GitHub o bien utilizar el siguiente comando en tu terminal:
```bash
$ git clone https://github.com/vermicida/cookbook-ng2.git
```

Una vez descargado, te recomiendo eliminar todas las referencias a `git` -aunque no es estrictamente necesario-:
```bash
$ cd cookbook-ng2
$ rm -rf .git
$ rm .gitignore
```

Toca descargar las dependencias de la aplicación. Ya situado en el directorio `cookbook-ng2`, ejecuta el `install` de NPM:
```bash
$ npm install
```

¡Listo! Ya tienes la aplicación descargada y con sus dependencias resueltas.

## Sirviendo la aplicación

Ejecuta el siguiente script en la terminal:
```bash
$ npm start
```

Esto levantará un servidor web en el puerto -por defecto- `3002` con la aplicación ya _transpilada_. Recuerda que Angular 2 se desarrolla con [TypeScript](https://www.typescriptlang.org) y, hasta la fecha, los navegadores no son capaces de entender este lenguaje de programación. Por tanto, necesitas una utilidad que convierta tu código TypeScript a [ECMAScript](https://es.wikipedia.org/wiki/ECMAScript) 5, que sí lo entiende el navegador. Este proceso de conversión se llama _transpile_, que consiste en generar código fuente -ECMAScript 5 en este caso- partiendo de otro código fuente -TypeScript-.

Por otro lado, si quieres editar o añadir contenido en esta aplicación, no hace falta que _tumbes_ el servidor; es lo suficientemente inteligente como para detectar cambios en el código, hacer el _transpile_ del mismo y servirlo de manera automática. No hay que tocar nada de nada.

Solo queda navegar a la ruta donde se está sirviendo el código:
```
http://localhost:3002
```

¡Et voilà!

## Por hacer

- Algunas -muchas- piezas de código.
- Migrar código conforme se publiquen nuevas _releases_ de Angular 2.

## Licencia

Este código se publica bajo licencia [MIT license](./LICENSE).
