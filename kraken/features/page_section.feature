Feature: Creación y edición de páginas


@user1 @web
Scenario: Como usuario creo una página con titulo 
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I go to Create Page
  And I click on title
  And I enter title page
  And I wait for 1 seconds
  And I click on content
  And I wait for 1 seconds
  And I click on publish
  And I wait for 1 seconds
  And I click on publish now
  And I wait for 1 seconds
  And I wait for 1 seconds
  And I wait for 1 seconds
  And I wait for 2 seconds
  And I go to back page list
  And I wait for 1 seconds
  And I see that the item page is liked in list page
  And I wait for 2 seconds
  Then I send a signal to user 2 containing "create_page"
  Then I send a signal to user 3 containing "create_page"

@user2 @web
Scenario: Como usuario edito una pagina ya creada
  Given I wait for a signal containing "create_page" for 120 seconds
  When I navigate to page "http://localhost:3001/ghost/#/signin"  
  And I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I click on page created
  And I enter title edit "Titulo actualizado"
  And I wait for 1 seconds
  And I click on content
  And I wait for 1 seconds
  And I enter content
  And I wait for 1 seconds
  And I click on update dropdown
  And I wait for 1 seconds
  And I click on update
  And I wait for 1 seconds
  And I go to back page list
  And I wait for 1 seconds
  And I see that the item page is liked edit in list page
  And I wait for 2 seconds

@user3 @web
Scenario: Como usuario visualizo la pagina creada en la web
  Given  I wait for a signal containing "create_page" for 120 seconds
  When I navigate to page "http://localhost:3001/this-title-page"
  And I wait for 1 seconds
  When I see that the title is liked
  And I wait for 5 seconds


@user4 @web
Scenario: Como usuario creo una página con titulo y contenido vacios
  Given I wait for 10 seconds
  And I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I go to Create Page
  And I click on title
  And I wait for 1 seconds
  And I click on content
  And I wait for 1 seconds
  And I click on publish
  And I wait for 1 seconds
  And I click on publish now
  And I wait for 1 seconds
  And I go to back page list
  And I wait for 1 seconds
  And I wait
  Then I send a signal to user 5 containing "create_page"

@user5 @web
Scenario: Como usuario edito una página y le agrego titulo y contenido
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  When I wait for a signal containing "create_page" for 120 seconds
  And I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I click on page untitled
  And I enter title edit "Pagina editada"
  And I wait for 1 seconds
  And I click on content
  And I click on plus button 
  And I wait for 1 seconds
  And I select html option
  And I wait for 1 seconds
  And I enter html
  And I click on update dropdown
  And I wait for 1 seconds
  And I click on update
  And I wait for 1 seconds
  And I go to back page list
  And I wait for 1 seconds


