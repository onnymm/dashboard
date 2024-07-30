# Componentes de UI

## Ávatar

- **Archivo:** `Avatar.jsx`

Avatar animado. Recibe una ruta de imágen,

## Botón

- **Archivo:** `Button.jsx`

Botón animado. Recibe un ícono, un estado, un setter. Cuando se hace click, invierte el valor del estado.

## Lista

- **Archivo:** `List.jsx`

Generador de lista de componentes en columna. Recibe un componente de formato, un arreglo de objetos (o un objeto individual), un nombre, estilo y props extra. La lista genera una columna de componentes a partir de los objetos y les pasa los props contenidos en cada uno. En caso de no recibir datos, la lista solo notifica que no hay elementos.

## Botón candado

- **Archivo:** `LockToggle.jsx`

Botón de candado animado, recibe un setter y un estado. Bajo click invierte el estado.

## Link de perfil, link de dropdown

- **Archivos:** `ProfileLink.jsx`,`DropdownLink.jsx`

Formato de NavLink con estilos hover y active para sus contenedores respectivos (dropdown y perfil)

## Mensaje, notificación

- **Archivos:** `Message.jsx`,`Notification.jsx`

Formatos para mensajes y notificaciones. Notificación solo recibe título, texto. Mensaje recibe ávatar, título, texto.

## Ícono de busqueda

- **Archivo:** `SearchIcon.jsx`

Formato para ícono de búsqueda con estilo de hover.

## Etiqueta de sección pegajosa

- **Archivo:** `StickySectionTag.jsx`

Etiqueta de sección pegajosa, se adhiere al tope del contenedor cuando lo alcanza por desplazo de scroll. Si se declaran múltiples etiquetas, se van encimando una sobre otra cuando llegan al tope, la última en llegar es la que queda hasta arriba. Se pueden devolver a su lugar haciendo scroll de vuelta.

## Link al home

- **Archivo:** `LogoLink.jsx`

Navlink que bajo click manda al home, consiste de una imágen y un h1. Recibe path de la imágen, ruta,
