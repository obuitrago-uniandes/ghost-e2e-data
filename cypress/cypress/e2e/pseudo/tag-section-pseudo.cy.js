const loginPage = require("../../page/login.page");
const adminPage = require("../../page/admin.page");
const tagManage = require("../../page/tag.manage");
const poolData = require("../../../../mock/pseudo/tag-post.mock");


/// <reference types="cypress" />

context("Navigation", () => {
  let data;
  beforeEach(() => {
    cy.fixture("ghost.json").as("ghostData");
    cy.get("@ghostData").then(() => {
      (async function () {
        data = await poolData.getData(Math.floor(Math.random() * 100) );
      })()
    });
    cy.wait(3000);
    cy.visit("/ghost/#/signin");
   
    cy.get("@ghostData").then((ghostData) => {
      loginPage
        .fillEmail(ghostData.email)
        .fillPassword(ghostData.password)
        .submit();
    });
  });


  it("Scenario: Validar que genere error con una descripción mayor a 500", () => {
    cy.wait(1000);
    //When I go section pages
    adminPage.clickTagBtn();
    //And I go to Create Tag
    tagManage.createNewButton();
    //And I enter description
    tagManage.fillDescripcionTag(data.description);
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
    cy.wait(1000);
    //And I go to Create Tag
    tagManage.createNewButton();
    cy.wait(1000);
    //And I enter name
    tagManage.fillNameTag(data.description);
    //And I enter description
    tagManage.fillDescripcionTag(data.description);
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
    tagManage.fillNameTag(data.name);
    //And I enter description
    tagManage.fillDescripcionTag(data.description);
    //And I enter color
    cy.wait(1000);
    tagManage.fillColorTag(data.color_incorrecto);
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
    let name= data.name;
    tagManage.fillNameTag(name);
    //And I enter description
    tagManage.fillDescripcionTag(data.description);
    cy.wait(1000);
    //And I enter color
    tagManage.fillColorTag(data.color.replace('#',''));
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
    tagManage.fillNameTag(data.name);
    //And I enter description
    tagManage.fillDescripcionTag(data.description);
    //And I click save tag
    cy.wait(1000);
    tagManage.saveTag();

    tagManage.clicExpandMetadata();
    tagManage.fillNameMetadataTag(data.metadataTitle+' - '+data.metadataTitle);
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
    tagManage.fillNameTag(data.name);
    //And I enter description
    tagManage.fillDescripcionTag(data.description);
    //And I click save tag
    cy.wait(1000);
    tagManage.saveTag();
    
    tagManage.clicExpandMetadata();
    tagManage.fillDescriptionMetadataTag(data.metadataTitle+' '+data.metadataTitle);
    tagManage.clickNameMetadata();
    //I expect have the max characters error
    cy.wait(1000);
    tagManage.lenghtErrorDescriptionMeta();
    cy.wait(1000);
  });
});
