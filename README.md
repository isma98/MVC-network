# MVC-network
Creación de una api con el modelo MVC

En este proyecto agregaremos un usuario y contraseña dentro de un api creada a partir del modelo MCV, usaremos un proyecto previamente 
creado y solo modificaremos unas lineas de codigo para asignarle su usuario y contraseña

LINK DEL PROYECTO BASE 
https://github.com/isma98/MVC

<-------------------------------------------PASOS PARA ASIGNAR USUARIO Y CONTRASEÑA-------------------------------------------------->

(1) Primero necesitamos crear una red para ello usamos los siguientes comandos:

    docker network create [nombre de la red] --> crea una nueva red
    docker network inspect [nombre de la red] --> inspecciona la red y ve si tiene algun contenedor asignado
    
(2) Abrimos nuestro archivo keys.js sustituimos nuestra conexion por 'mongodb://apiuser:apipassword@mongoserver1:27017/materias'
apiuser es el nombre de usuario y apipassword es nuestra contraseña, podemos cambiar estos dos parametros a nuestro gusto
(3) Entramos dentro de nuestro archivo docker-compose.yml y modificamos el campo de network que esta debajo de catcliente 
por el nombre de la red que acabamos de crear, tmabien su cambiamos el nombre de usuario y contraseña tenemos que modificarlos 
en este archivo.
(4) Abrimos una linea de comandos y ejecutamos el comando "docker-compose up" para crear nuestro contenedor, despues ejecutamos
"docker ps" para verificar si se creo nuestro contenedor, si este se creo correctamente ejecutamos "docker exec mongoserver1"
para ejecutar el estado del servidor, si este arranca correctamente va a abrir una shell de mongodb, lo que indica que realizamos una 
conexion exitosa a nuestro servidor y ahora podriamos probar si hay conexion de parte del cliento por medio de un get o post 
dentro de postman 
(5) Si todo salio correcto ya no importaria si apagamos nuestra coneccion o apagamos nuestra computadora, la información que ingresamos
no se perdera, ya que esta guardada dentro de nuestra sesion.
