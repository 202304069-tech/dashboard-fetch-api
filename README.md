# Dashboard de Usuarios con Fetch API

## Descripción

Este proyecto implementa un dashboard que consume datos de una API pública utilizando JavaScript y la Fetch API.

Los datos obtenidos se muestran dinámicamente en la interfaz mediante la manipulación del DOM.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- JSONPlaceholder API
- Extensión de Visual Studio Code: Live Server

## Funcionalidades

- Obtener usuarios desde una API
- Mostrar usuarios en tarjetas dinámicas
- Visualizar publicaciones de cada usuario
- Buscar usuarios en tiempo real
- Manejo de estados: carga, éxito y error

## API utilizada

https://jsonplaceholder.typicode.com

Endpoints utilizados:

- /users
- /posts?userId={id}

## Cómo ejecutar el proyecto

1. Clonar el repositorio: git clone <url-del-repositorio>
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Instalar la extensión Live Server en Visual Studio Code (si aún no está instalada).
4. Abrir el archivo dashboard.html.
5. Hacer clic derecho sobre el archivo y seleccionar: Open with Live Server
6. El navegador abrirá automáticamente el proyecto en una dirección similar a: http://127.0.0.1:5500/dashboard.html
7. Presionar el botón “Cargar Usuarios” para obtener la información desde la API

NOTA
Este proyecto funciona correctamente utilizando Live Server, ya que los módulos de JavaScript (import/export) requieren ejecutarse desde un servidor local.
Pero, también es posible ejecutar el proyecto utilizando otros métodos, por ejemplo mediante un servidor local con Flask, Node.js u otras herramientas similares que permitan servir archivos estáticos.