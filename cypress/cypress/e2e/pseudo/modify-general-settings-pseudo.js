const loginPage = require("../../page/login.page");
const adminPage = require("../../page/admin.page");
const generalAdminPage = require("../../page/general.admin.page");
const principalPage = require("../../page/principal.page");

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
  facebookUrl: {
    name: "Url Facebook",
    max: 2057,
    input: () => generalAdminPage.facebookUrlInput,
    output: (val) =>
      principalPage.facebookUrl
        .should("have.attr", "href")
        .should("contain", val),
  },
  twitterUrl: {
    name: "Url Twitter",
    max: 15,
    input: () => generalAdminPage.twitterUrlInput,
    output: (val) =>
      principalPage.twitterUrl
        .should("have.attr", "href")
        .should("contain", val),
  },
};

// const settings = await pseudoapi.getData("ghost_settings", "a0c90370");
context("Modificar Configuración General Datos Pseudo-Aleatorios", () => {
  let inputData;
  beforeEach(() => {
    /// Given I navigate to page "http://localhost:3001/ghost/#/signin"
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");

    cy.request(
      "GET",
      "https://my.api.mockaroo.com/ghost_settings.json?key=a0c90370"
    )
      .its("body")
      .as("inputData");
    /// And I Sign In with email and password
    cy.get("@ghostData").then((ghostData) => {
      loginPage.fillEmail(ghostData.email).fillPassword(ghostData.password);
      loginPage.submit();
    });
    cy.get("@inputData").then((data) => {
      inputData = data;
    });
  });

  for (let i = 0; i < 5; i++) {
    it(`Validar Cambio de configuración con datos pseudoaleatorios caso ${
      i + 1
    }`, () => {
      cy.log(`Los datos de entrada son: ${JSON.stringify(inputData, null, 2)}`);
      /// When I go to General Settings page
      adminPage.clickGeneralBtn();
      /// And I Expand Accordions
      generalAdminPage.expandAllAccordions();
      for (const key in testConfig) {
        if (Object.hasOwnProperty.call(testConfig, key)) {
          const fieldConfig = testConfig[key];
          inputData[key] = inputData[key].substring(0, fieldConfig.max);
          /// And I Clear Input
          fieldConfig.input().clear({ force: true });
          /// And I Fill Field
          generalAdminPage.fill(fieldConfig.input(), inputData[key]);
        }
      }
      /// And I save general settings
      generalAdminPage.clickSaveSettings();
      /// And I navigate to home page
      principalPage.visit();
      /// Then I expect to get fields setting successfully
      for (const key in testConfig) {
        if (Object.hasOwnProperty.call(testConfig, key)) {
          const fieldConfig = testConfig[key];
          fieldConfig.output(inputData[key]);
        }
      }
    });
  }
});
