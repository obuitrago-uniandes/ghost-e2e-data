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

## Imágenes de Schemas usados

### Schema 1

![image](https://github.com/obuitrago-uniandes/ghost-e2e-data/assets/124005780/bbf544e1-4b4c-40d1-b804-a7fea88ccd19)

## Pasos para ejecutar Cypress

Las instrucciones para ejecutar cypress se encuentran en [En el siguiente enlace](https://github.com/obuitrago-uniandes/ghost-e2e-data/tree/main/cypress)

## Pasos para ejecutar Kraken

Las instrucciones para ejecutar kraken se encuentran en [el siguiente enlace](https://github.com/obuitrago-uniandes/ghost-e2e-data/tree/main/kraken)
