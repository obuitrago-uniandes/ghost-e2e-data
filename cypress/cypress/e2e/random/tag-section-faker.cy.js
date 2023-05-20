const loginPage = require("../../page/login.page");
const adminPage = require("../../page/admin.page");
const tagManage = require("../../page/tag.manage");
import {faker} from '@faker-js/faker'

/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");
    cy.get("@ghostData").then((ghostData) => {
      loginPage
        .fillEmail(ghostData.email)
        .fillPassword(ghostData.password)
        .submit();
    });
    cy.wait(1000);
  });


  it("Scenario: Validar que genere error con una descripción mayor a 500", () => {
    cy.wait(1000);
    //When I go section pages
    adminPage.clickTagBtn();
    //And I go to Create Tag
    tagManage.createNewButton();
    //And I enter name
    tagManage.fillNameTag(faker.lorem.word());
    //And I enter description
    tagManage.fillDescripcionTag(faker.string.alphanumeric(501));
    //And I click save tag
    cy.wait(5000);
    tagManage.saveTag();
    //I expect have the max characters error
    cy.wait(1000);
    tagManage.maxCharacterError();
    cy.wait(1000);
  });

  it("Scenario: Validar que genere error con una nombre mayor a 191", () => {
    cy.wait(1000);
    //When I go section pages
    adminPage.clickTagBtn();
    //And I go to Create Tag
    tagManage.createNewButton();
    //And I enter name
    tagManage.fillNameTag(faker.string.alphanumeric(192));
    //And I enter description
    tagManage.fillDescripcionTag(faker.lorem.paragraph());
    //And I click save tag
    cy.wait(5000);
    tagManage.saveTag();
    //I expect have the max characters error
    cy.wait(1000);
    tagManage.maxCharacterNameError();
    cy.wait(1000);
  });


  it("Scenario: Validar que genere error de formato en el campo color", () => {
    cy.wait(1000);
    //When I go section pages
    adminPage.clickTagBtn();
    //And I go to Create Tag
    tagManage.createNewButton();
    //And I enter name
    tagManage.fillNameTag(faker.lorem.word());
    //And I enter color
    tagManage.fillColorTag(faker.color.rgb({ prefix: '0x' }));
    //And I click save tag
    cy.wait(1000);
    tagManage.saveTag();
    //I expect have the max characters error
    cy.wait(1000);
    tagManage.formatColorError();
    cy.wait(1000);
  });


  it("Scenario: Se crea un tag con todos los campos diligenciados correctamente", () => {
    cy.wait(1000);
    //When I go section pages
    adminPage.clickTagBtn();
    //And I go to Create Tag
    tagManage.createNewButton();
    //And I enter name
    let name = faker.lorem.words({min:5, max:10});
    tagManage.fillNameTag(name);
    //And I enter description
    tagManage.fillDescripcionTag(faker.lorem.words({min:5, max:10}));
    //And I enter color
    tagManage.fillColorTag(faker.color.rgb().replace('#',''));
    //And I click save tag
    cy.wait(1000);
    tagManage.saveTag();
    //I expect have the max characters error
    cy.wait(2000);
    adminPage.clickTagBtn();
    tagManage.openTag(name);
    cy.wait(1000);
  });

  it("Scenario: Validar que genere error de logitud de datos en el campo titulo de metadata", () => {
    cy.wait(1000);
    //When I go section pages
    adminPage.clickTagBtn();
    //And I go to Create Tag
    tagManage.createNewButton();
    //And I enter name
    tagManage.fillNameTag(faker.lorem.word());
    //And I enter description
    tagManage.fillDescripcionTag(faker.lorem.word());
    //And I click save tag
    cy.wait(1000);
    tagManage.saveTag();

    tagManage.clicExpandMetadata();
    tagManage.fillNameMetadataTag(faker.lorem.words({min:70, max:77}));
    tagManage.clickDescriptionMetadata();
    //I expect have the max characters error
    cy.wait(1000);
    tagManage.lenghtErrorNameMeta();
    cy.wait(1000);
  });

  it("Scenario: Validar que genere error de logitud de datos en el campo descripción de metadata", () => {
    cy.wait(1000);
    //When I go section pages
    adminPage.clickTagBtn();
    //And I go to Create Tag
    tagManage.createNewButton();
    //And I enter name
    tagManage.fillNameTag(faker.lorem.word());
    //And I enter description
    tagManage.fillDescripcionTag(faker.lorem.word());
    //And I click save tag
    cy.wait(1000);
    tagManage.saveTag();
    
    tagManage.clicExpandMetadata();
    tagManage.fillDescriptionMetadataTag(faker.lorem.words({min:56, max:80}));
    tagManage.clickNameMetadata();
    //I expect have the max characters error
    cy.wait(1000);
    tagManage.lenghtErrorDescriptionMeta();
    cy.wait(1000);
  });
  
});
