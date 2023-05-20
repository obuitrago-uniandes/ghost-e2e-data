# Instrucciones para ejecutar Cypress

## Requisitos

* Tener Docker instalado en su máquina.
* Ejecutar el siguiente contenedor que ejecuta la imagen de Ghost 3.41.1 y la expone a través del puerto 3001
```shell
docker run -d -e url=http://localhost:3001 -e NODE_ENV=development -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1
```
* Haberse registrado en la herramienta Ghost y tener un usuario y contraseña de administrador.

## Herramientas usadas:
| Programa                        | Versión            |
| ------------------------------- | ------------------ |
| npm                             | 6.14.18            |
| Node                            | 14.21.3            |
| Windows                         | 11                 |
| Ubuntu                          | 22.04              |

## Pasos para la ejecución
1. Actualice el archivo `./cypress/fixures/ghost.json` con las credenciales de acceso al Ghost local.
1. Abra una consola o terminal y ubíquese en la carpeta donde se encuentra este readme
2. Ejecute 
```shell
npm install
```
3. Existen diferentes opciones para ejecutar la prueba:
```shell
npx cypress run
```
o
```shell
npx cypress open
```
y eligiendo la funcionalidad que desea probar.
