# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Proporcionalizador de Gastos

Este proyecto es una aplicación web desarrollada en React que permite calcular de manera proporcional los gastos mensuales de un grupo de usuarios en función de sus sueldos. Cada usuario puede ser añadido con su nombre y sueldo, y la aplicación calculará cuánto debe pagar cada uno en base al gasto total mensual.

## Características

- **Agregar Usuarios**: Añade usuarios con su nombre y sueldo.
- **Eliminar Usuarios**: Permite eliminar usuarios de la lista.
- **Cálculo Proporcional**: Calcula cuánto debe pagar cada usuario basado en su sueldo.
- **Visualización del Porcentaje**: Muestra el porcentaje que representa el pago de cada usuario respecto al gasto total en verde.
- **Interfaz Atractiva**: Diseño simple, limpio y agradable a la vista.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para la construcción de la interfaz de usuario.
- **CSS**: Para los estilos de la aplicación.

## Instalación y Ejecución

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. **Clonar el repositorio**:

```bash
git clone https://github.com/s4kc0d3/react-proporcionalizador-de-gastos.git
cd proporcionalizador-de-gastos
npm install
npm start
```

## Estructura del Proyecto

```
  .
  ├── public
  │   └── index.html
  ├── src
  │   ├── components
  │   │   ├── UserForm.jsx
  │   │   ├── UserList.jsx
  │   │   └── ExpenseCalculator.jsx
  │   ├── App.jsx
  │   ├── main.jss
  │   └── index.css
  ├── package.json
  └── README.md
```

- **UserForm.jsx**: Componente para añadir usuarios con nombre y sueldo.
- **UserList.jsx**: Muestra la lista de usuarios con la opción de eliminar.
- **ExpenseCalculator.jsx**: Calcula y muestra la cantidad y el porcentaje que debe pagar cada usuario.

## Uso

- **Agregar Usuarios**: Ingresa el nombre y sueldo en los campos correspondientes y haz clic en "Agregar".
- **Eliminar Usuarios**: Presiona el botón "Eliminar" junto al usuario que deseas quitar de la lista.
- **Ingresar Gasto Mensual**: Introduce el gasto total en el campo correspondiente, y se calculará cuánto debe pagar cada usuario, junto con su porcentaje de contribución.
