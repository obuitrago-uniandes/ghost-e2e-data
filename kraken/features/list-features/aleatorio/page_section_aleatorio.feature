Feature: Creación y edición de páginas


  @user1 @web
  Scenario: Publicar pagina con titulo  y texto contenido validos 
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I go to Create Page
  And I wait for 1 seconds
  And I enter title page fk
  And I wait for 1 seconds
  And I click on content
  And I wait for 1 seconds
  And I enter content fk
  And I wait for 1 seconds
  And I click on publish
  And I wait for 1 seconds
  And I click on publish now
  And I go to back page list

 @user2 @web
  Scenario: Ingresar titulo largo y contenidos valido
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I go to Create Page
  And I wait for 1 seconds
  And I click on content
  And I wait for 1 seconds
  And I enter content fk
  And I wait for 15 seconds
  And I enter title large page ap
  And I wait for 1 seconds
  And I click on publish
  And I wait for 1 seconds
  And I click on publish now
  And I go to back page list
  
  @user3 @web
  Scenario: Ingresar  titulo valido y url bookmark invalido
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I go to Create Page
  And I wait for 1 seconds
  And I enter title page fk
  And I wait for 1 seconds
  And I wait for 1 seconds
  And I click on content
  And I click on plus button
  And I wait for 1 seconds
  And I select bookmark option
  And I wait for 1 seconds
  And I enter url invalid fk
  And I wait for 1 seconds
  And I click on content
  And I wait for 1 seconds
  And I see that the  alert url is liked in  page
  And I wait for 1 seconds
  And I click on publish
  And I wait for 1 seconds
  And I click on publish now
  And I go to back page list 
  
  
  @user4 @web
  Scenario: Ingresar titulo valido y Excerpt large
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I go to Create Page
  And I wait for 1 seconds
  And I enter title page fk
  And I wait for 1 seconds
  And I click on content
  And I wait for 1 seconds
  And I click on settings
  And I wait for 1 seconds
  And I enter text area Excerpt fk
  And I wait for 1 seconds
  And I click in form labelExcerpt
  And I wait for 1 seconds
  And I see that the alert string large is liked in list page
  And I wait for 1 seconds
  
  @user5 @web
  Scenario: Ingresar titulo valido y time invalido
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I go to Create Page
  And I wait for 1 seconds
  And I enter title page fk
  And I wait for 1 seconds
  And I click on content
  And I wait for 1 seconds
  And I click on settings
  And I wait for 1 seconds
  And I enter time invalid fk
  And I wait for 1 seconds
  And I click in form labelExcerpt

  @user6 @web
  Scenario: Ingresar titulo valido y date invalido
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I go to Create Page
  And I wait for 1 seconds
  And I enter title page fk
  And I wait for 1 seconds
  And I click on content
  And I wait for 1 seconds
  And I click on settings
  And I wait for 1 seconds
  And I enter date invalid ap
  And I wait for 1 seconds
  And I click in form labelExcerpt