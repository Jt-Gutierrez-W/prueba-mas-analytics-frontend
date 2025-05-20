## Instrucciones basicas para ejecutar

### Opción 1: Usando Docker

Desde la raíz del repositorio, ejecuta los siguientes comandos:

```bash
docker build -t prueba-mas-analytics .
docker run -p 5173:5173 prueba-mas-analytics
```

### Opción 2: Usando npm

Desde la raíz del repositorio, ejecuta el siguiente comando:

```bash
npm run dev
```

*(Asegúrate de tener Node.js v22.12.0 y npm v11.0.0 instalados)*

## Breve descripción de enfoque

Para el desarrollo de esta aplicación, se crearon vistas simplificadas, asumiendo que están destinadas a un usuario autenticado que desea utilizar la plataforma. Esta presunción se basa en que no tendría sentido permitir el acceso a registros o métricas a un usuario no autenticado.

En cuanto a las distintas vistas, se ha mantenido la coherencia con el diseño e imagen de la página principal, adoptando un enfoque directo, moderno y sencillo para facilitar la realización de las acciones solicitadas.

## Stack Tecnológico Utilizado

A continuación, se detalla el stack tecnológico empleado en el desarrollo de esta aplicación:

1.  **React + Vite**
    *   Esta combinación se seleccionó por la simplicidad en el desarrollo y su óptimo rendimiento para la creación de interfaces modernas y sencillas. Además, Vite agiliza la creación de vistas durante el desarrollo, mejorando la experiencia del desarrollador.

2.  **React Router**
    *   Librería principal para la gestión de la navegación dentro de la aplicación. Es una solución estándar y de fácil implementación.

3.  **Recharts**
    *   Librería utilizada para la generación de gráficos. Ofrece gran simplicidad para la creación de visualizaciones en el ecosistema React. En caso de requerir gráficos más personalizados, se podría considerar la migración a D3.js.

4.  **MUI (Material-UI)**
    *   Librería que proporciona componentes preestablecidos y modernos, facilitando la creación de las distintas vistas de la aplicación.

5.  **Tailwind CSS**
    *   Framework empleado para la estilización y maquetación de las diferentes vistas, permitiendo un desarrollo ágil y personalizable.
