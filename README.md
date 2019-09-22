# keepcoding-frontend-beerflix
Práctica del módulo de frontend avanzado de Keepcoding

## Notas para el desarrollador

1. El proyecto es necesario que se realice sin framework (Vue, Angular, Ember, Polymer, Backbone etc...) y sin las librerías como React y jQuery.

2. Se podrán utilizar frameworks de CSS como Bootstrap, Foundation, Materialize, semantic entro otros. De estos framework solo podrá ser usado el css y html NO EL JAVASCRIPT

3. Será necesario el uso del API de nuestro proveedor. Las especificaciones serán explicadas más abajo.

4. Será necesario el uso de localStorage para guardar el estado de los filtros.

5. Añadir ESLINT al proyecto. (Opcional)

6. Estaría bien añadir workbox para tener soporte offline. (Opcional)

## Notas del desarrollador
1. Aplicado patrón component/container para separar la lógica y estado de los componentes, de su representación gráfica

2. Uso de local storage para almacenar la API KEY y que el usuario no tenga que logar cada vez en la aplicación (para dar más seguridad sería conveniente moverlo a una cookie)

3. Creado una especie de state (tipo redux), para almacenar y compartir el estado de la aplicación de forma global (state.js)

4. Uso de eslint y prettier para aplicar guia de estilos de airbnb