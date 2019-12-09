//crear el usuario de servicio
db.createUser({
    user:"apiuser",
    pwd:"apipassword",
    roles:[
        {
            role:"readWrite",
            db:"materias"
        }
        
    ]
});
//heredar acceso de lectura escritura
db.grantRolesToUser( "apiuser", [ "readWrite" ] );
//habilitar uso desde shell y cadena de conexion
db.auth('apiuser', 'apipassword');
//crear la bd
db = db.getSiblingDB('materias');
//crear colleccion y fijar creacion de bd
db.materias.insertMany([
    {
        "nombre": "Algebra", 
        "clave":"ABC1", 
        "maestro":"Javier Perez", 
        "semestre":1
    },
    {
        "nombre": "Quimica", 
        "clave":"ABC2", 
        "maestro":"Julio Peralta", 
        "semestre":2
    },
{"nombre": "Ciencias Naturales", "clave":"ABC3", "maestro":"Monserrat Caballero", "semestre":3},
{"nombre": "Etica", "clave":"ABC4", "maestro":"Elizabeth Juares", "semestre":4},
{"nombre": "Calculo Diferencial", "clave":"ABC5", "maestro":"Ivan Salomon", "semestre":5},
{"nombre": "Estadistica", "clave":"ABC6", "maestro":"Miriam Jimenez", "semestre":6},
{"nombre": "Sistemas Operativos", "clave":"ABC7", "maestro":"Alberto Reyes", "semestre":7},
{"nombre": "Computo en la nube", "clave":"ABC8", "maestro":"Gabriel Bandala", "semestre":8},
{"nombre": "Aplicaciones Moviles", "clave":"ABC9", "maestro":"Dionisio Alvarez", "semestre":9},
{"nombre": "Legislacion", "clave":"ABC10", "maestro":"Selene Rodriguez", "semestre":10}]);
