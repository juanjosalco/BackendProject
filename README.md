# BackendProject

## Índice

* [Descripción](#descripcion)
* [Instalación](#instalacion)
* [Entidades](#entidades)
    - [Relacion Entidades](#relacion_entidades)
* [Niveles de acceso](#nivel_acceso)
* [EndPoints](#endpoints)
    - [Usuarios](#usuarios)
    - [Books](#books)
    - [Categorias](#categorias)
    - [Editorial](#editorial)
- [Libreria](#libreria)
* [Tecnologías](#Tecnologias)
* [Documento inicial](#evidencia_documento_inicial)

## Descripcion


<B>"Libraverse el Spotify de los libros"</B>,  es una API-REST, esta pensada para el manejo de un sistema de prestamo de lirbos por suscripción. Da acceso a la información, a quien la requiera de los datos que contiene.

Proporciona la información de las entidades creadas, ademas ofrece los métodos CRUD para manejar cada entidad.

## Instalacion

Para probar nuestro proyecto sigue los siguientes pasos

* clonar repositorio a tu repositorio local
* Configura tus variables de ambiente en el archivo `.env`. Toma como ejemplo `.env.example`. Puedes copiar y renombrar el archivo a `.env`.

* ´npm install` (instala las librerias necesarias)

* Instala las tablas de entidades via sequelize cli en la base de datos. Eligiendo el ambiente de trabajo: `development` , `staging` o `production` segun el archivo `./config/config.js`


    ` 01-migrate ` o ` npx sequelize  db:migrate --env <ambiente de trabajo> `

* Si encuentras un error, puedes correr para desinstalar o remover las tablas y volver a inicar el proceso.

    `01-undo` o `npx sequelize  db:migrate:undo:all --env <ambiente de trabajo>`

* Puedes cargar datos de prueba en las  tablas de entidades via sequelize cli en la base de datos empleando el siguiente comando. No te recomendamos cargar estos datos en tu ambiente de produción.

    `02-seeder` o `npx sequelize  db:seed:all --env <ambiente de trabajo>`

* Si encuentras un error, puedes remover los datos de prueba y volver a inicar el proceso.

    `02-undo` o `npx sequelize  db:seed:undo:all --env   <ambiente de trabajo>`,

* `npm run dev` (para iniciar la aplicacion en modo desarrollador

con estos sencillos pasos tienes la aplicación en tu computadora y ahora puedes realizar las peticiones desde Insominia o Postman
usando la siguiente dirección  `localhost:3000/`


## Entidades

el backend de la API cuenta con las siguientes entidades

* Authors
* Books
* Category
* Editorial
* Library
* Orders
* Reviews
* Roles
* Users


Cada uno de las entidades tiene propiamente su CRUD pero con distintos permisos de acceso estos se describen más en el apartado de
[EndPoints](#endpoints)


## Relacion_entidades

la relación de las entidades se describen en la siguiente imagen
### Modelo en Fase 03
![relaciion entidaden Fase3](src/imgs/LibroverseF3.png)

### Modelo en Fase 02 --- Anterior
![relaciion entidaden Fase2](src/imgs/relacionEntidadF2.jpg)

## Nivel_Acceso

Para ingresar a la API hay distintos niveles de acceso los cuales otorgan ciertos privilegios dentro de Libraryverse, los cuales son los siguientes:

* Rol Adminsitrador // Dentro de la API solo hay un usuario como administador
* Rol Editor
* Rol User
* Rol EditorialCompany
* Rol premiumUser

Los roles y sus privilegios se describen en la sección [EndPoints](#endpoints)


## EndPoints

### Usuarios

| Method | End-Point | Description | level access | notas |
| --- | --- | --- | --- | --- |
| `GET` | `/users/` | Enlista *todos* | Solo administrador| --- |
| `GET` | `/users/id/:id` | Obtiene un usuario especificado | Solo Administrador | --- |
| `POST` | `/users/signUp` | Registra un nuevo usuario en la Base de Datos | sin restricciones | --- |
| `PATCH` | `/users/id/:id` | Modifica un usuario |usuario registrado y administrador | --- |
| `DELETE` | `/users/id/:id` | Elimina un usuario especificado | Solo Administrador | **admin** solo puede eliminar un usuario |
| `GET` | `/users/search/atributos` | Obtienes los usuarios filtrado por los atributos indicados | Solo Administrador | --- |
| `GET` | `/users/search/rol/:rol` | Obtiene los usuarios filtrado por el rol indicado | Solo Administrador | --- |
| `POST` | `/users/logIn` | Esta ruta se utiliza para iniciar sesión en la API y obtener acceso | Sin restricción | ingresa un username y un password previamente registrados en la DB |


### Books

| Method | End-Point | Description | level access | notas |
| --- | --- | --- | --- | --- |
| `GET` | `/book/` | Enlista *todos* | sin restricción| --- |
| `POST` | `/book/` | Crea un nuevo libro | usuario registrado como Editor | --- |
| `GET` | `/book/id/:id` | Obtiene un libro especificado indicado por el ID| sin restricción | --- |
| `PUT` | `book/id/:id` | Modifica un libro existente |usuario registrado como Editor| --- |
| `DELETE` | `book/id/:id` | Elimina un libro especificado | Solo Administrador | --- |

### Categorias

| Method | End-Point | Description | level access | notas |
| --- | --- | --- | --- | --- |
| `GET` | `/Categoria/` | Enlista *todos* | sin restricción| --- |
| `POST` | `/Categoria/` | Crea una categoria | usuario registrado como Editor| --- |
| `GET` | `/Categoria/id/:genre` | Obtiene una categoría especificada | sin restricción | --- |
| `PUT` | `/Categoria/id/:genre` | Modifica una categoria existente |usuario registrado como Editor | --- |
| `DELETE` | `/Categoria/id/:name` | Elimina una categoria especificada | Solo administrador | --- |

### Editorial

| Method | End-Point | Description | level access | notas |
| --- | --- | --- | --- | --- |
| `GET` | `/editorial/` | Enlista *todos* | sin restricción| --- |
| `GET` | `/editorial/id/:name` | Obtiene una  editorial especificada | usuario registrado | *escribir nombre de la editorial como pk* |
| `POST` | `/editorial/` | Crea una editorial | usuario registrado | --- |
| `PATCH` | `/editorial/id/:name` | Modifica una editorial existente | usuario registrado| *escribir nombre de la editorial como pk* |
| `DELETE` | `/editorial/id/:name` | Elimina una categoria especificada | solo **admin** | *escribir nombre de la editorial como pk* |

### Libreria

| Method | End-Point | Description | level access | notas |
| --- | --- | --- | --- | --- |
| `GET` | `/library/` | Enlista *todos* | sin restricción| --- |
| `GET` | `/library/id/:name` | Obtiene una  editorial especificada | sin restricción | --- |
| `POST` | `/library/` | Crea una editorial | usuario registrado como Editor | --- |
| `PUT` | `/library/id/:id` | Modifica una editorial existente | usuario registrado como Editor| --- |
| `DELETE` | `/library/id/:id` | Elimina una categoria especificada | Solo administrador | --- |

### Ordenes

| Method | End-Point | Description | level access | notas |
| --- | --- | --- | --- | --- |
| `GET` | `/orders/` | Enlista *todos* | sin restricción| --- |
| `GET` | `/orders/:id` | Obtiene una orden especificada | sin reestricción | --- |
| `POST` | `/orders/` | Crea una orden | usuario registrado | --- |
| `PUT` | `/orders/:id` | Modifica una orden existente | usuario registrado| --- |
| `DELETE` | `/orders/:id` | Elimina una orden especificada | usuario registrado | --- |

### Reviews

| Method | End-Point | Description | level access | notas |
| --- | --- | --- | --- | --- |
| `GET` | `/reviews/` | Enlista *todos* | sin restricción| --- |
| `GET` | `/reviews/:id` | Obtiene una review especificada | sin reestricción | --- |
| `POST` | `/reviews/` | Crea una review | usuario registrado | --- |
| `PUT` | `/reviews/:id` | Modifica una review existente | usuario registrado| --- |
| `DELETE` | `/reviews/:id` | Elimina una review especificada | usuario registrado | --- |

### Roles

| Method | End-Point | Description | level access | notas |
| --- | --- | --- | --- | --- |
| `GET` | `/rol/` | Enlista *todos* | sin restricción| --- |
| `GET` | `/rol/:id` | Obtiene un rol especificado | usuario registrado | --- |
| `POST` | `/rol/` | Crea un rol | usuario registrado | --- |
| `PUT` | `/rol/:id` | Modifica un rol existente | usuario registrado| --- |
| `DELETE` | `/rol/:id` | Elimina un rol especificado | usuario registrado | --- |

### Autores

| Method | End-Point | Description | level access | notas |
| --- | --- | --- | --- | --- |
| `GET` | `/authors/` | Enlista *todos* | sin restricción| --- |
| `GET` | `/authors/id/:id` | Obtiene un autor especificado | usuario registrado | --- |
| `POST` | `/authors/create` | Crea un autor | usuario registrado | --- |
| `PUT` | `/authors/id/:id` | Modifica un autor existente | usuario registrado| --- |
| `DELETE` | `/authors/id/:id` | Elimina un autor especificado | usuario registrado | --- |

## Tecnologias

* ~~PostegreSQL~~ -> MySQL
* JavaScript
* Node.js
* npm
* Sequelize
* Express.js
* ~~Heroku~~ -> Railway

## Evidencia_Documento_inicia

En este [Documento inicial](https://docs.google.com/document/d/1Zm7--3V2wiXMalCs8f_o3MtDpoGeK2owIOqlfRb7rno/edit)
en donde fuimos realizando los primeros pasos para la creación y organización del proyecto. MergingNpx sequelize db:seed:allá --env


## Créditos

Proyecto de la Fase 03 del modulo Backend con JavaScript el cual fue desarrollado por el equipo #6, conformado por los siguientes integrantes

- Miguel Chavez  [Github](https://github.com/toonchavez8) [LinkedIn](https://www.linkedin.com/in/toonchavez8/)
- Juan Salazar [Github](https://github.com/juanjosalco) [LinkedIn](https://www.linkedin.com/in/juanjosalco/)
- Francisco Goméz [Github](https://github.com/FrankTII)
- Jesus Díaz [Github](https://github.com/jesuszdp)
- Angel Lara [Github](https://github.com/Angel123Lara) [LinkedIn](https://www.linkedin.com/in/angel-jlarasz/)

Este proyecto fue desarrollado gracias a los conocimientos adquiridos en el curso de:

- Desarrollo Web con JavaScript de [Becas Santander Universidades](https://www.becas-santander.com/es/index.html) en colaboración con [Bedu](https://bedu.org/)



