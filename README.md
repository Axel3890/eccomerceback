
# Eccomerce Back

Este es un proyecto que utiliza Node.js, Express, Sequelize y PostgreSQL para crear una aplicación web.

# Como funciona

Este proyecto consta de un backend desarrollado con Node.js y Express, utilizando Sequelize como ORM para interactuar con una base de datos PostgreSQL. La estructura del proyecto se divide en diferentes carpetas:

- **models**: Contiene los modelos de la base de datos definidos con Sequelize.
- **controllers**: Aquí se encuentran los controladores que manejan la lógica de negocio y la interacción con los modelos.
- **handlers**: Contiene los manejadores de errores para los distintos métodos de la aplicación.
- **routes**: En esta carpeta se definen los diferentes endpoints de la API.


## Principales Endpoints

#### Obtener todos los productos

```http
  GET /productos
```

| Parametro | Tipo     | Descripcion               |
| :-------- | :------- | :------------------------- |
| `----` | `---` | Devuelve todos los productos |

#### Obtener un producto

```http
  GET /productos/${id}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | Devuelve la info de un producto en especifico |

#### Añadir un producto
```http
  POST /productos
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `string` | nombre del producto |
| `precio`      | `number` | precio del producto |
| `descripcion`      | `string` | Descripcion del producto |
| `imagenUrl`      | `string` | Imagen del producto |
| `marcaId`      | `number` | Marca del producto |

#### Modificar un producto

```http
  PUT /productos/${id}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `string` | modifica el nombre del producto |
| `precio`      | `number` |   modifica elprecio del producto |
| `descripcion`      | `string` |  modifica la Descripcion del producto |
| `imagenUrl`      | `string` | modifica la Imagen del producto |
| `marcaId`      | `number` |  modifica la Marca del producto |

#### Eliminar un producto

```http
  DELETE /productos/${id}
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | Elimina un producto |



## Para tener el proyecto en local

Clona este repositorio en tu máquina local.

Instala las dependencias del proyecto utilizando npm:

```bash
  npm install
```

Asegúrate de tener una instancia de PostgreSQL en ejecución y configura las credenciales en el archivo de configuración del proyecto.
Puedes añadirlo en el archvio db.js directamente, deberia verse algo así: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/nombredelabdd`,

Ejecuta el proyecto utilizando el siguiente comando:

```bash
  npm start
```

Esto iniciará el servidor localmente y podrás acceder a la aplicación en http://localhost:3001.
