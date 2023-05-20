const loginPage = require("../../page/login.page");
const adminPage = require("../../page/admin.page");
const tagManage = require("../../page/tag.manage");
const poolData = require("../../../../mock/apriori/tag.json");

/// <reference types="cypress" />

context("Navigation", () => {
  
  let index;

  beforeEach(() => {
    index = Math.floor(Math.random() * 100);
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");
    cy.get("@ghostData").then((ghostData) => {
      loginPage
        .fillEmail(ghostData.email)
        .fillPassword(ghostData.password)
        .submit();
    });
    cy.viewport(1000, 950)

  });


  it("Scenario: Validar que genere error con una descripción mayor a 500", () => {
    cy.wait(1000);
    //When I go section pages
    adminPage.clickTagBtn();
    //And I go to Create Tag
    tagManage.createNewButton();
    //And I enter name
    tagManage.fillNameTag(poolData[index].name);
    //And I enter description
    let descripcion = poolData[index].description;
    for (let i=0; descripcion.length<505;i++ ){
      descripcion = descripcion + poolData[i].description;
    }
    tagManage.fillDescripcionTag(descripcion);
    //And I click save tag
    cy.wait(5000);
    tagManage.saveTag();
    //I expect have the max characters error
    cy.wait(1000);
    tagManage.maxCharacterError();
    cy.wait(1000);
  });

  it("Scenario: Validar que genere error con una nombre mayor a 191", () => {
    cy.wait(5000);
    //When I go section pages
    adminPage.clickTagBtn();
    //And I go to Create Tag
    tagManage.createNewButton();
    //And I enter name
    let name = poolData[index].name;
    for (let i=0; name.length<192;i++ ){
      name = name + poolData[i].name;
    }
    tagManage.fillNameTag(name);
    //And I enter description
    tagManage.fillDescripcionTag(poolData[index].description);
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
    tagManage.fillNameTag(poolData[index].name);
    //And I enter description
    tagManage.fillDescripcionTag(poolData[index].description);
    //And I enter color
    cy.wait(1000);
    tagManage.fillColorTag(poolData[index].color);
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
    let name= poolData[index].name;
    tagManage.fillNameTag(name);
    //And I enter description
    tagManage.fillDescripcionTag(poolData[index].description);
    cy.wait(1000);
    //And I enter color
    tagManage.fillColorTag(poolData[index].colorHexa.replace("#", ""));
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
    tagManage.fillNameTag(poolData[index].name);
    //And I enter description
    tagManage.fillDescripcionTag(poolData[index].description);
    //And I click save tag
    cy.wait(1000);
    tagManage.saveTag();

    tagManage.clicExpandMetadata();
    tagManage.fillNameMetadataTag(poolData[index].name+' - '+poolData[index+1].name);
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
    tagManage.fillNameTag(poolData[index].name);
    //And I enter description
    tagManage.fillDescripcionTag(poolData[index].description);
    //And I click save tag
    cy.wait(1000);
    tagManage.saveTag();
    
    tagManage.clicExpandMetadata();
    tagManage.fillDescriptionMetadataTag(poolData[index].name+' - '+poolData[index+1].name+' - '+poolData[index+1].name+' - '+poolData[index+1].name+' - '+poolData[index+1].name+' - '+poolData[index+1].name+' - '+poolData[index+1].name+' - '+poolData[index+1].name);
    tagManage.clickNameMetadata();
    //I expect have the max characters error
    cy.wait(1000);
    tagManage.lenghtErrorDescriptionMeta();
    cy.wait(1000);
  });

});
