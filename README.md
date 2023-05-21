# Pruebas e2e con datos apriori, pseudoaleatorios y aleatorios en Ghost 3.41.1

## Equipo 20
|Integrantes|
|-|
|"Mery Alejandra Niño Gomez" <ma.ninog12@uniandes.edu.co>|
|"Walter Giovanny Cuadros Rincon" <w.cuadrosr@uniandes.edu.co>|
|"Oscar Andre Buitrago Villamil" <o.buitragov@uniandes.edu.co>|

## Funcionalidades bajo prueba
| Funcionalidad |
| -- |
| Configuración General |

## Funcionalidades y estratégias

| Funcionalidad | Herramienta | Estrategia de datos | Ruta | Descripción |
| -- | -- | -- | -- | -- |
| Configuración general | Cypress | Pool de datos a-priori | `./cypress/cypress/e2e/apriori/modify-general-settings-apriori.cy.js` | Se carga un listado de strings (aproximadamente 28) conocidos por generar errores, llamados "Naughty String", desde [mockaroo](https://mockaroo.com/). A continuación, se prueban las combinaciones para cada campo en la configuración del sitio (un total de 10 campos). Es importante destacar que se ha filtrado el listado generado por mockaroo para evitar datos repetidos. |
| Configuración general | Cypress | Pool de datos (pseudo) aleatorio dinámico | `./cypress/cypress/e2e/pseudo/modify-general-settings-pseudo.cy.js` | En [mockaroo](https://mockaroo.com/) se generó un schema (ver schema 1) para simular datos válidos combinados para las configuraciones del sitio. Posteriormente, se creó una API que expone un elemento aleatorio de este schema y se utiliza para generar un objeto relacionado para la prueba. Finalmente, se realiza la llamada en tiempo de ejecución y se valida que se despliegue correctamente en 5 ocasiones. |
| Configuración general | Cypress | Escenario aleatorio | `./cypress/cypress/e2e/random/modify-general-settings-faker.cy.js` | Haciendo uso de [Faker](https://fakerjs.dev/), se generan strings en las zonas límite máximas para cada uno de los campos. Se utiliza la estrategia de restar uno al máximo, usar el máximo y agregar uno al máximo. A continuación, se valida que los errores estén controlados de forma correcta. |
| Gestión páginas | Cypress | Pool de datos a-priori | `./cypress/cypress/e2e/apriori/page_priori.cy.js` | Se agrega una base de datos en formato json la cual fue generada desde la herramienta de [mockaroo](https://mockaroo.com/)  directamente en una carpeta independiente llamada Mock, desde allí se utilizan los datos precargados para llenar los campos requeridos en cada escenario |
| Gestión páginas  | Cypress | Pool de datos (pseudo) aleatorio dinámico | `./cypress/cypress/e2e/pseudo/page_pseudo.cy.js` | Mediante [mockaroo](https://mockaroo.com/) se genera una Api, a partir de un schema (ver shema 2) configurado para la generación de datos, luego se ajusta la url de la API para que esta genere un solo grupo de datos cuando sea consultada, después de esto se crea un archivo en la carpeta `mock/pseudo/api.mock.js` el cual ejecuta el consumo del api por medio de una función, luego en el before de la prueba se invoca esta función y trae un grupo de datos para cada escenario.  |
| Gestión páginas | Cypress | Escenario aleatorio | `./cypress/cypress/e2e/random/page_aleatorio.cy.js` | Haciendo uso de [Faker](https://fakerjs.dev/), se generan los datos para llenar cada uno de los campos requeridos en los escenarios. |

## Imágenes de Schemas usados

### Schema 1

![image](https://github.com/obuitrago-uniandes/ghost-e2e-data/assets/124005780/bbf544e1-4b4c-40d1-b804-a7fea88ccd19)

### Schema 2
![image](https://github.com/obuitrago-uniandes/ghost-e2e-data/assets/123990169/faa5516f-4280-4550-916f-0675d6bf83e4)
### Configuración Api Mockaroo para funcionalidad gestión de páginas
![image](https://github.com/obuitrago-uniandes/ghost-e2e-data/assets/123990169/45cf229d-098c-4de7-9fd8-9fcab05434f1)


## Resultados

### Configuración General (Pool de datos a priori)

Se ejecutaron un total de xx escenarios de los cuales se detectaron yy errores relacionados a guardar texto `"entre comillas"` y la palabra `null` en cada uno de los campos de entrada, además se ejecutaron pruebas para detectar posibles XSS y funcionamiento con diferentes caracteres (hasta emoji).

### Configuración General (Pool de datos a priori) Gestión de páginas

![Captura desde 2023-05-20 20-50-55](https://github.com/obuitrago-uniandes/ghost-e2e-data/assets/123990169/ab86ec68-57ec-4238-ab98-fee4d001df3a) 

[Video pruebas](https://uniandes-my.sharepoint.com/:v:/g/personal/w_cuadrosr_uniandes_edu_co/EZvoUwwOkZxFmocsqnY59P8BECIeQDTCOGrf0dVKkRxGkQ?e=8d1nhl)

### Configuración General (Pool de datos (pseudo) aleatorio dinámico)

![image](https://github.com/obuitrago-uniandes/ghost-e2e-data/assets/124005780/f3c8eae9-7825-461d-933a-0847cd1a18d1)

https://github.com/obuitrago-uniandes/ghost-e2e-data/assets/124005780/c2a5103b-360c-48a2-ad5c-e9931f40039d

Las pruebas fueron todas satisfactorias

### Configuración General (Pool de datos (pseudo) aleatorio dinámico) Gestión de páginas

![Captura desde 2023-05-20 21-16-11](https://github.com/obuitrago-uniandes/ghost-e2e-data/assets/123990169/a14a7db6-ab26-4ee8-9280-1f979c0708d7)

[Video prueba](https://uniandes-my.sharepoint.com/:v:/g/personal/w_cuadrosr_uniandes_edu_co/EfPB-Z-aFghMqjBlnHw4XrsBlc9oDESUqI4M9S64WQuRmA?e=SEQ59W)

### Configuración General (Escenario aleatorio)

![image](https://github.com/obuitrago-uniandes/ghost-e2e-data/assets/124005780/0e816692-738e-4752-b71e-cda318a15bb9)

https://github.com/obuitrago-uniandes/ghost-e2e-data/assets/124005780/c14f0e8d-7934-427d-b215-dab7a6cbf6c8

Todas las pruebas fueron satisfactorias.

### Configuración General (Escenario aleatorio) Gestión de páginas
![Captura desde 2023-05-20 20-43-31](https://github.com/obuitrago-uniandes/ghost-e2e-data/assets/123990169/96fe5b6d-296e-45fb-a1e6-ca0ddad84900)

[Video pruebas](https://uniandes-my.sharepoint.com/:v:/g/personal/w_cuadrosr_uniandes_edu_co/EXH-or8qYiZBqTan1Rfs_BoBkGA4rPGovEWTUy3THMThHA?e=eaNZif)

## Pasos para ejecutar Cypress

Las instrucciones para ejecutar cypress se encuentran en [En el siguiente enlace](https://github.com/obuitrago-uniandes/ghost-e2e-data/tree/main/cypress)

## Pasos para ejecutar Kraken

Las instrucciones para ejecutar kraken se encuentran en [el siguiente enlace](https://github.com/obuitrago-uniandes/ghost-e2e-data/tree/main/kraken)
