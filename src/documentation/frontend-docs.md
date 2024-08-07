# Documentación del frontend

## Dependencias

- TailwindCSS
- Heroicons
- React Router

**Índice**

- [Anatomía de la aplicación](#anatomía-de-la-aplicación)

  - [Glosario de elementos](#glosario-de-elementos)
  - [Directorios notables](#directorios-notables)

- [Componentes de UI](#componentes-de-ui)
- [Custom hooks](#custom-hooks)
- [Componentes de UI](#componentes-de-ui)

## Anatomía de la aplicación

![ alt text](images/iaceleVDOM.jpg)

### Glosario de elementos

**Un componente**

![ alt text](images/component.jpg)

Un componente individual.

**Varios componentes**

![ alt text](images/components.jpg)

Indica que existe más de una instancia de este componente en el nivel en el que se encuentre.

**Generador de lista de componentes**

![ alt text](images/generative_component.jpg)

Un componente que genera un conjunto de componentes independientes en columna dentro de un div. En este ejemplo, List genera un conjunto de ProfileLinks.

**Un componente que se heredó como prop**

![alt text](images/prop_component.png)

Se indica su origen con una tuerca naranja.

**Outlet para componentes ruteados**

![alt text](images/outlet.png)

**Componentes opcionales**

![alt text](images/optional_components.png)

Están declarados dentro de otro, pero no se renderizan a menos que su padre reciba la indicación (aquí se hace a través de un prop con un string: 'message' o 'notifications').

**Estados y setters**

![ alt text](images/states_2.jpg)
![ alt text](images/states.jpg)

- Los de color gris no forman parte de ningún contexto.
- Los de color rosado forman parte del contexto de App.
- Los de color azul forman parte del contexto de la Sidebar.
- Si un estado está subrayado, significa que ahí fue donde se declaró originalmente, y por ende, ahí mismo origina también su método set.

**Esqueleto**

![alt text](images/skeleton.png)

Indica que el componente tiene un componente esqueleto como fallback para lazy.

**Props**

En el diagrama no se detallan los props específicos de cada componente, pues sus usos en la aplicación (en la mayoría de los casos) son muy sencillos. Pero sí hay indicadores en casos donde es importante aclarar ciertas estructuras que los involucran:

![alt text](images/configurer_prop.png)
![alt text](images/component_prop.png)

- El gris indica que el prop configura
- El naranja indica que el prop contiene un componente

Estos íconos están para dar contexto en los casos especiales dentro de la estructura de la aplicación, donde se necesita más que solo el árbol de nodos para entender.

**Caso 1:**

![alt text](images/special_case.png)

En este caso por ejemplo, cada instancia del ActionButton tiene un prop que indica a su List, cuál de los componentes que soporta tiene que generar.

_NOTA: Los componentes se declaran en List para permitir el lazy loading de los mismos (usualmente se heredan como props)._

**Caso 2:**

![alt text](images/special_case_2.png)

En este caso, componente DropdownLink se está pasando como prop desde cada SidebarDropdown a su respectiva List.

## Custom hooks

**Ruta:** `src/custom hooks`

### useClickOutside

- **Archivo:** `useClickOutside.js`

Se encarga de generar una referencia, observar el componente que la contenga con `useEffect` y **ejecuta una función cuando se haga click fuera del componente**.

**Uso:**

```jsx
const Component = () {
    let domNode = useClickOutside(() => console.log('Click afuera'))

    return(
        <div ref={domNode}>Si clickeas fuera de mí algo sucede<div>
    )
}
```

### useScreenWidth

- **Archivo:** `useScreenWidth.js`

Se encarga de monitorear el ancho de la pantalla. Recibe un límite de pixelaje, si el pixelaje de la pantalla excede el límite, entonces devuelve verdadero, de lo contrario devuelve falso.

**Uso:**

```jsx
const screenIsWide = useScreenWidth(500) // Valores mayor a 500 devuelven verdadero; menores, falso
```

## Directorios notables

![alt text](images/folder_routes.png)

Contiene todos los componentes ruteados (App, Ecommerce, Profile, etc).

![alt text](images/folder_components.png)

Contiene los componentes no ruteados (Navbar, Sidebar, todos los que se ven en el diagrama).

![alt text](images/folder_data.png)

Contiene el loader principal de la aplicación, así como la configuración y datos de la mayoría de componentes, siempre y cuando los datos no contengan otros componentes, pues hay detalles en la importación y fue mejor declararlos en el componente directamente. Por el momento, contiene:

- Datos de mensajes
- Datos de notificaciones
- Links de perfil
- Links de los dropdowns
- Límite para pantalla ancha

## Componentes de UI

- **Ruta:** `src/components/ui kit`

### Ávatar

- **Archivo:** `Avatar.jsx`

Avatar animado. Recibe una ruta de imágen,

### Botón

- **Archivo:** `Button.jsx`

Botón animado. Recibe un ícono, un estado, un setter. Cuando se hace click, invierte el valor del estado.

### Lista

- **Archivo:** `List.jsx`

Generador de lista de componentes en columna. Recibe un componente de formato, un arreglo de objetos (o un objeto individual), un nombre, estilo y props extra. La lista genera una columna de componentes a partir de los objetos y les pasa los props contenidos en cada uno. En caso de no recibir datos, la lista solo notifica que no hay elementos.

### Botón candado

- **Archivo:** `LockToggle.jsx`

Botón de candado animado, recibe un setter y un estado. Bajo click invierte el estado.

### Link de perfil, link de dropdown

- **Archivos:** `ProfileLink.jsx`,`DropdownLink.jsx`

Formato de NavLink con estilos hover y active para sus contenedores respectivos (dropdown y perfil)

### Mensaje, notificación

- **Archivos:** `Message.jsx`,`Notification.jsx`

Formatos para mensajes y notificaciones. Notificación solo recibe título, texto. Mensaje recibe ávatar, título, texto.

### Ícono de busqueda

- **Archivo:** `SearchIcon.jsx`

Formato para ícono de búsqueda con estilo de hover.

### Etiqueta de sección pegajosa

- **Archivo:** `StickySectionTag.jsx`

Etiqueta de sección pegajosa, se adhiere al tope del contenedor cuando lo alcanza por desplazo de scroll. Si se declaran múltiples etiquetas, se van encimando una sobre otra cuando llegan al tope, la última en llegar es la que queda hasta arriba. Se pueden devolver a su lugar haciendo scroll de vuelta.

### Link al home

- **Archivo:** `LogoLink.jsx`

Navlink que bajo click manda al home, consiste de una imágen y un h1. Recibe path de la imágen, ruta,
