# BackendProject

## Description
    Libraverse es una API-REST para el manejo de la base de datos de una app que cuenta con las siguientes entidades
    * Usuarios
    * Libros
    * Categoria
    * Editorial
    * Library

    Cada uno de las entidades tiene propiamente su CRUD pero con distintos permisos de acceso estos se describen mas en el apartado de 
    [End-Points](#End-Points)


### Relacion entidades
    la relación de las entidades se describen en la siguiente imagen
    ![home page](src/imgs/relacionEntidad.jpg)






#### End-Points
| Method | End-Point | Description | level access | 
| --- | --- | --- | --- |
| `GET` | `/todo` | List all *todos* |
| `POST` | `/todo` | Create a new *todo* |
| `GET` | `/todo/:id` | Fetch a specific *todo* |
| `PUT` | `/todo/:id` | Edit existing *todo* |
| `PATCH` | `/todo/:id` | Mark an existing *todo* as complete |
| `DELETE` | `/todo/:id` | Delete existing *todo* |