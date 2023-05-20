const loginPage = require("../../page/login.page");
const adminPage = require("../../page/admin.page");
const tagManage = require("../../page/tag.manage");
const poolData = require("../../../../mock/pseudo/api.mock");


/// <reference types="cypress" />

context("Navigation", () => {
  let data;
  beforeEach(() => {
    cy.fixture("ghost.json").as("ghostData");
    cy.get("@ghostData").then((ghostData) => {
      (async function () {
        data = await poolData.getData(Math.floor(Math.random() * 100), ghostData.key );  
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
    tagManage.fillDescripcionTag(data.content+data.content);
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
    tagManage.fillNameTag(data.title+''+data.title);
    //And I enter description
    tagManage.fillDescripcionTag(data.content);
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
    tagManage.fillNameTag(data.title);
    //And I enter description
    tagManage.fillDescripcionTag(data.content);
    //And I enter color
    cy.wait(1000);
    tagManage.fillColorTag(data.title);
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
    tagManage.fillDescripcionTag(data.content);
    cy.wait(1000);
    //And I enter color
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
    tagManage.fillNameTag(data.title);
    //And I enter description
    tagManage.fillDescripcionTag(data.content);
    //And I click save tag
    cy.wait(1000);
    tagManage.saveTag();

    tagManage.clicExpandMetadata();
    tagManage.fillNameMetadataTag(data.title+' - '+data.title);
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
    tagManage.fillNameTag(data.title);
    //And I enter description
    tagManage.fillDescripcionTag(data.content);
    //And I click save tag
    cy.wait(1000);
    tagManage.saveTag();
    
    tagManage.clicExpandMetadata();
    tagManage.fillDescriptionMetadataTag(data.meta_title_large);
    tagManage.clickNameMetadata();
    //I expect have the max characters error
    cy.wait(1000);
    tagManage.lenghtErrorDescriptionMeta();
    cy.wait(1000);
  });
});
