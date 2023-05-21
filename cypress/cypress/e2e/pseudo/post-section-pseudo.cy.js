const loginPage = require("../../page/login.page");
const adminPage = require("../../page/admin.page");
const postManage = require("../../page/post.manage");
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


  it('Scenario: Publicar Post Borrador con titulo y contenido valido ', () => { 
    //When I go section Post
    adminPage.clickPostBtn();
    //And Igo to Create Post
    postManage.createNewButton();
    //And I click in title
    postManage.titlePost();
    //And I clik in content
    postManage.contentPost();
    //And I go section pages
    cy.go(-1);
    cy.wait(1000);
    adminPage.clickPostBtn();
    postManage.editPost('(Untitled)');
    postManage.fillTitle(data.name);
    //And I enter contet
    postManage.fillContent(data.description);
    //And I click publish 
    postManage.btnPublish()
    //And I click confirm publish 
    postManage.btnConfirmPublish()
    cy.wait(1000);
    //Then I expect publish
    postManage.backPost();
    cy.go(-1)
    cy.wait(1000);
  })

  it('Scenario: Valida Longitud de Titulo', () => { 
    //When I go section Post
    adminPage.clickPostBtn();
    //And Igo to Create Post
    postManage.createNewButton();
    //And I click in title
    postManage.titlePost();
    //And I clik in content
    postManage.contentPost();
    //And I go section pages
    cy.go(-1);
    cy.wait(1000);
    adminPage.clickPostBtn();
    postManage.editPost('(Untitled)');
    //And I enter title    
    postManage.fillTitle(data.title_large);
    //And I enter contet
    postManage.fillContent(data.description);
    //And I click publish 
    postManage.btnPublish()
    //And I click confirm publish 
    postManage.btnConfirmPublish()
    //And I see that the  alert title is liked in  page
    postManage.searchAlertTitle()
    cy.wait(1000);
  })

  it("Scenario Publicar pagina con titulo valido y time invalido", () => {
    //When I go section Post
    adminPage.clickPostBtn();
    //And Igo to Create Post
    postManage.createNewButton();
    //And I click in title
    postManage.titlePost();
    //And I clik in content
    postManage.contentPost();
    //And I go section Post
    cy.go(-1);
    adminPage.clickPostBtn();
    //And I select draft Post
    postManage.editPost("(Untitled)");
    //And I enter title
    postManage.fillTitle(data.name);
    //And I click  content
    postManage.contentPost();
    //And click on settings button
    postManage.seeSettings();
    //And I enter text time
    postManage.timeInput(data.time_invalid);
    //And I click in form settings
    postManage.settingsForm();
    //And I see that the alert string large is liked in list page
    postManage.searhAlertTime();
    cy.wait(1000);
    cy.go(-1);
  }); 

  
  it("Scenario Url bookmark invalido", () => {
    //When I go section Post
    adminPage.clickPostBtn();
    //And Igo to Create Post
    postManage.createNewButton();
    //And I click in title
    postManage.titlePost();
    //And I clik in content
    postManage.contentPost();
    //And I go section Post
    cy.go(-1);
    adminPage.clickPostBtn();
    //And I select draft Post
    postManage.editPost("(Untitled)");
    //And I enter title
    postManage.fillTitle(data.name);
    //And I click  content
    postManage.contentPost();
    //And click on plus button
    postManage.plusButton();
    //And I select bookmark
    postManage.cardBookmark();
    //And I enter Bookmark
    postManage.inputBookmark(data.time_invalid);
    //And I clik in content
    postManage.contentPost();
    //And I see that the  alert url is liked in  page
    postManage.searchAlertUrl();
    //And I click publish 
    postManage.btnPublish()
    //And I click confirm publish 
    postManage.btnConfirmPublish()

   
  });
  
  
  it("Scenario nombre MEtadata invalido", () => {
    //When I go section Post
    adminPage.clickPostBtn();
    //And Igo to Create Post
    postManage.createNewButton();
    //And I click in title
    postManage.titlePost();
    //And I clik in content
    postManage.contentPost();
    //And I go section Post
    cy.go(-1);
    adminPage.clickPostBtn();
    //And I select draft Post
    postManage.editPost("(Untitled)");
    //And I enter title
    postManage.fillTitle(data.name);
    //And I click  content
    postManage.contentPost();
    postManage.seeSettings();
    postManage.metadataSettingPost()
    postManage.fillNameMetadataTag(data.title_large)
    postManage.clickDescriptionMetadata()
    postManage.lenghtErrorNameMeta()
    
  });

  it("Scenario descripción MEtadata invalido", () => {
    //When I go section Post
    adminPage.clickPostBtn();
    //And Igo to Create Post
    postManage.createNewButton();
    //And I click in title
    postManage.titlePost();
    //And I clik in content
    postManage.contentPost();
    //And I go section Post
    cy.go(-1);
    adminPage.clickPostBtn();
    //And I select draft Post
    postManage.editPost("(Untitled)");
    //And I enter title
    postManage.fillTitle(data.name);
    //And I click  content
    postManage.contentPost();
    postManage.seeSettings();
    postManage.metadataSettingPost()
    postManage.fillDescriptionMetadataTag(data.description+' '+data.description)
    postManage.fillNameMetadataTag(data.metadataTitle)
    postManage.lenghtErrorDescriptionMeta()
    
  });

  
  it("Scenario url MEtadata invalido", () => {
    //When I go section Post
    adminPage.clickPostBtn();
    //And Igo to Create Post
    postManage.createNewButton();
    //And I click in title
    postManage.titlePost();
    //And I clik in content
    postManage.contentPost();
    //And I go section Post
    cy.go(-1);
    adminPage.clickPostBtn();
    //And I select draft Post
    postManage.editPost("(Untitled)");
    //And I enter title
    postManage.fillTitle(data.name);
    //And I click  content
    postManage.contentPost();
    postManage.seeSettings();
    postManage.metadataSettingPost()
    postManage.fillDescriptionMetadataTag(data.description)
    postManage.fillNameMetadataTag(data.metadataTitle)
    postManage.fillURLMetadataTag(data.metadataTitle)
    postManage.clickDescriptionMetadata();
    postManage.lenghtErrorURLMeta()
    
  });
  
  
  
  it("Scenario creando MEtadata valido", () => {
    //When I go section Post
    adminPage.clickPostBtn();
    //And Igo to Create Post
    postManage.createNewButton();
    //And I click in title
    postManage.titlePost();
    //And I clik in content
    postManage.contentPost();
    //And I go section Post
    cy.go(-1);
    adminPage.clickPostBtn();
    //And I select draft Post
    postManage.editPost("(Untitled)");
    //And I enter title
    postManage.fillTitle(data.name);
    //And I click  content
    postManage.contentPost();
    postManage.seeSettings();
    postManage.metadataSettingPost()
    postManage.fillDescriptionMetadataTag(data.description)
    postManage.fillNameMetadataTag(data.metadataTitle)
    postManage.fillURLMetadataTag(data.url)
    postManage.clickDescriptionMetadata();    
  });
});
