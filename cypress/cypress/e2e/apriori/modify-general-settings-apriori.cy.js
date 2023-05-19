const loginPage = require("../../page/login.page");
const adminPage = require("../../page/admin.page");
const generalAdminPage = require("../../page/general.admin.page");
const principalPage = require("../../page/principal.page");
const settingsData = require("../../../../mock/apriori/settings-data.json");

/// <reference types="cypress" />

const testConfig = {
  title: {
    name: "Título",
    max: 150,
    input: () => generalAdminPage.titleInput,
    output: (val) => principalPage.siteTitle.should("include.text", val),
  },
  description: {
    name: "Descripción",
    max: 200,
    input: () => generalAdminPage.descriptionInput,
    output: (val) => principalPage.siteDescription.should("include.text", val),
  },
  metaTitle: {
    name: "Meta Título",
    max: 300,
    input: () => generalAdminPage.metaTitleInput,
    output: (val) => principalPage.metaTitle.should("include.text", val),
  },
  metaDescription: {
    name: "Meta Descripción",
    max: 500,
    input: () => generalAdminPage.metaDescriptionInput,
    output: (val) =>
      principalPage.metaDescription
        .should("have.attr", "content")
        .should("contain", val),
  },
  twitterTitle: {
    name: "Título Twitter",
    max: 300,
    input: () => generalAdminPage.twitterTitleInput,
    output: (val) =>
      principalPage.twitterTitle
        .should("have.attr", "content")
        .should("contain", val),
  },
  twitterDescription: {
    name: "Descripción Twitter",
    max: 300,
    input: () => generalAdminPage.twitterDescriptionInput,
    output: (val) =>
      principalPage.twitterDescription
        .should("have.attr", "content")
        .should("contain", val),
  },
  facebookTitle: {
    name: "Título Facebook",
    max: 300,
    input: () => generalAdminPage.ogTitleInput,
    output: (val) =>
      principalPage.facebookTitle
        .should("have.attr", "content")
        .should("contain", val),
  },
  facebookDescription: {
    name: "Descripción Facebook",
    max: 300,
    input: () => generalAdminPage.ogDescriptionInput,
    output: (val) =>
      principalPage.facebookDescription
        .should("have.attr", "content")
        .should("contain", val),
  },
};

context("Prueba de datos \"Naughty\" para cada entrada en el formulario de configuración", () => {
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

  for (const iterator of settingsData) {
    if (iterator.title) {
      for (const key in testConfig) {
        if (Object.hasOwnProperty.call(testConfig, key)) {
          const fieldConfig = testConfig[key];
          const input = iterator.title.substring(0, fieldConfig.max).trim();

          it(`Validar Cambio de ${fieldConfig.name} a: ${input}`, () => {
            /// When I go to General Settings page
            adminPage.clickGeneralBtn();
            /// And I Expand Accordions
            generalAdminPage.expandAllAccordions();
            /// And I Clear Input
            fieldConfig.input().clear({ force: true });
            /// And I Fill Field
            generalAdminPage.fill(fieldConfig.input(), input);
            /// And I save general settings
            generalAdminPage.clickSaveSettings();
            /// And I navigate to home page
            principalPage.visit();
            /// Then I expect to get site title equals to title entered
            fieldConfig.output(input);
          });
        }
      }
    }
  }
});
