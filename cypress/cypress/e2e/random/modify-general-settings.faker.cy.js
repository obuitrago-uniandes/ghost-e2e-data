const loginPage = require("../../page/login.page");
const adminPage = require("../../page/admin.page");
const generalAdminPage = require("../../page/general.admin.page");
const { faker } = require("@faker-js/faker");

/// <reference types="cypress" />

context("Prueba de frontera en tamaños máximos con datos aleatorios.", () => {
  beforeEach(() => {
    /// Given I navigate to page "http://localhost:3001/ghost/#/signin"
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");
    /// And I Sign In with email and password
    cy.get("@ghostData").then((ghostData) => {
      loginPage.fillEmail(ghostData.email).fillPassword(ghostData.password);
      loginPage.submit();
    });
  });

  for (const key in generalAdminPage.config) {
    if (Object.hasOwnProperty.call(generalAdminPage.config, key)) {
      const iterator = generalAdminPage.config[key];
      for (
        let index = iterator.maxRange[0];
        index <= iterator.maxRange[1];
        index++
      ) {
        const title = faker.string.alphanumeric(index);
        it(`Validar ${iterator.name} con [${index}] caracteres de tamaño.`, () => {
          /// When I go to General Settings page
          adminPage.clickGeneralBtn();
          /// And I expand section
          iterator
            .expand()
            .click({ force: true })
            .should("include.text", "Close");
          /// And I enter data in field
          generalAdminPage.fill(iterator.input(), title);
          /// And I save general settings
          if (title.length <= iterator.max) {
            /// Then I expect than save successfully
            generalAdminPage.clickSaveSettings();
            iterator.error()?.should("not.be.visible");
          } else {
            /// Then I expect than not save
            generalAdminPage.clickSaveSettingsWithError();
            /// And I get error
            iterator.error()?.should("include.text", iterator.expectedError);
          }
        });
      }
    }
  }
});
