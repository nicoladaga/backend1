## Proyecto de Programación Backend 1 #72855 , colaboración entre Nicolas Ladaga y Angela Ocampos
# PRIMERA ENTREGA :blue_book:
## Instalación
Si deseas instalar este proyecto, puedes hacerlo mediante git con el siguiente link:
https://github.com/nicoladaga/backend1.git

<ins>Luego crea un archivo .env en la raiz del proyecto con los siguientes datos</ins>

PORT = 8080

MONGO = mongodb+srv://backendProject:1234@cluster0.ho2zz.mongodb.net/backend

## Ejecución

En el repositorio del proyecto vas a poder ejecutar:

### `npm start`
Permite ejecutar el repositorio de manera local sin actualizarse los cambios en tiempo real más recomdable para ambientes de prueba y productivos

### `npm run dev`
Permite ejecuta el repositorio de manera local pero actualizando los cambios en tiempo real más recomendable para ambientes de desarrollo

Una vez en ejecución puede utilizar postman para probar los métodos desarrollados en el mismo para los gestores de Productos y de Usuarios

:pushpin: Create Product: 
method: POST
Url: http://localhost:8080/api/products
![image](https://github.com/user-attachments/assets/20ec53e0-33c1-44f4-a3e7-2f7c6897ceea)

:pushpin: Get one Product: 
method: GET
url: http://localhost:8080/api/products/:pid
![image](https://github.com/user-attachments/assets/d941ddf2-af64-4b42-9969-3681f034a1d9)

:pushpin: Get all Products (acepta filtro por category)
method: GET
url: http://localhost:8080/api/products?category=""
req: category
![image](https://github.com/user-attachments/assets/07ece642-5b14-4b51-b049-580626c8d340)

:pushpin: Delete Product
method: DELETE
url: http://localhost:8080/api/products/:pid
![image](https://github.com/user-attachments/assets/da6f27f2-816e-4a3d-a4fa-2b482f03a362)

:pushpin: Update Product
method: PUT
url: http://localhost:8080/api/products/:pid
req: body
![image](https://github.com/user-attachments/assets/f03075cc-b392-4ee9-a5ce-14587f999088)

:pushpin: Get Users
method: GET
url: http://localhost:8080/api/users
![image](https://github.com/user-attachments/assets/0fae20e3-80f9-402f-95b1-5cdd825edea3)

:pushpin: Create User
method: POST
url: http://localhost:8080/api/users
![image](https://github.com/user-attachments/assets/e647be79-46a7-4a29-80d2-042d4749d23c)

:pushpin: Delete User
method: DELETE
url: http://localhost:8080/api/users/:uid
![image](https://github.com/user-attachments/assets/88cfca01-126e-4b8b-9289-34965ce1fa2d)

:pushpin: Get One User
method: GET 
url: http://localhost:8080/api/users/:uid
![image](https://github.com/user-attachments/assets/8da1284e-cc48-4e93-b2ff-a5c98d2e42bd)

:pushpin: Update User
method: PUT
url: http://localhost:8080/api/users/:uid
req: body
![image](https://github.com/user-attachments/assets/54737c8c-a32a-4231-bcc4-63bfea7ca781)


# SEGUNDA ENTREGA :orange_book:
## Ingreso a la ruta addProducts y validación que el cliente está conectado al SOCKET 
Se buscará en la url del navegador la ruta “/addProducts”.

URL: http://localhost:8080/addProducts

![image](https://github.com/user-attachments/assets/53fc6f0d-0dba-4930-beac-ecf6c069158e)
![image](https://github.com/user-attachments/assets/957c4f09-87e9-4659-95ad-717c98cd823c)

## Prueba de funcionalidad de <ins>agregar</ins> producto mediante el form
Agregamos el producto que deseamos ingresar y hacemos click en "Agregar producto"
![image](https://github.com/user-attachments/assets/906fd35e-0e97-42e4-8c98-62b6428bebb4)
![image](https://github.com/user-attachments/assets/a03a89f7-09ed-4adf-aa7c-73e35f5e0f2f)
podemos ver el producto agregado en la lista
![image](https://github.com/user-attachments/assets/1ace86db-e7d8-4038-bbc1-ab7832ea163a)

## Prueba de funcionalidad de <ins>eliminar</ins> producto con el boton dentro de la tabla
Buscamos el producto que deseamos borrar de la lista y hacemos click al boton Eliminar
![image](https://github.com/user-attachments/assets/52875991-1659-4c91-ab70-3b74579a0b2d)

luego de eliminar 
![image](https://github.com/user-attachments/assets/d5d4489c-2863-4996-9687-d7cf42d57503)

# ENTREGA FINAL :orange_book:
 Ahora los gestores de Users y Products quedan configurados (el código previo para files queda comentado)
 Por ende, los endpoints siguen siendo los mismos pero ahora los datos se almacenan en la nube de Mongo.
 
## Se agrega el gestor de Carts(también en mongo) que utiliza los siguientes endpoints

:pushpin: Add Product to Cart
method: POST
url: http://localhost:8080/api/carts
body: {"product_id, "user_id", "quantity"}
![image](https://github.com/user-attachments/assets/2e5fd37f-2903-43cd-8d35-c9dc58169b09)

:pushpin: Read Product From User
method: GET
url: http://localhost:8080/api/carts/users/:user_id
req: user_id
![image](https://github.com/user-attachments/assets/188bd741-19aa-4461-b3e1-be72c3398405)

:pushpin: Update Quantity
method: PUT
url: http://localhost:8080/api/carts/:cart_id
req: cart_id
body: {"quantity"}
![image](https://github.com/user-attachments/assets/f4d02dcd-2775-435d-8984-b73fe8978afa)

:pushpin: Remove from Cart
method: DELETE
url: http://localhost:8080/api/carts/:cart_id
req: cart_id
![image](https://github.com/user-attachments/assets/aeb2998a-09f2-410d-a119-5dc81d8bfaae)

:pushpin: Total to Pay
method: GET
url: http://localhost:8080/api/carts/total/:uid
req: user_id
![image](https://github.com/user-attachments/assets/c2c5e7a2-7f89-41bb-98b9-f9f0893333f0)



## Se agregó la vista users/loging  - (NO FUNCIONAL)

![image](https://github.com/user-attachments/assets/cb52a1a8-ab1a-46e1-8904-ea58eb732890)

## Se agregó la vista carts/user/user_Id con user hardcode

![image](https://github.com/user-attachments/assets/e4df4f14-c124-4a09-b347-914b8212114e)

La misma permite ver la información del producto, agregar o restar cantidad, eliminar un producto y borrar el carrito completo al finalizar o cancelar la compra.







