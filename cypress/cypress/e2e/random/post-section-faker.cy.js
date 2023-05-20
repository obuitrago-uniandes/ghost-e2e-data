const loginPage = require("../../page/login.page");
const adminPage = require("../../page/admin.page");
const postManage = require("../../page/post.manage");
import { faker } from '@faker-js/faker';

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
    postManage.fillTitle(faker.lorem.word());
    //And I enter contet
    postManage.fillContent(faker.lorem.words({min:5, max:10}));
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

  it('Scenario: Editar post y Publicar', () => { 
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
    postManage.fillTitle(faker.lorem.words({min:50, max:80}));
    //And I enter contet
    postManage.fillContent(faker.lorem.words({min:5, max:10}));
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
    postManage.fillTitle(faker.lorem.word());
    //And I click  content
    postManage.contentPost();
    //And click on settings button
    postManage.seeSettings();
    //And I enter text time
    postManage.timeInput(faker.lorem.word());
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
    postManage.fillTitle(faker.lorem.word());
    //And I click  content
    postManage.contentPost();
    //And click on plus button
    postManage.plusButton();
    //And I select bookmark
    postManage.cardBookmark();
    //And I enter Bookmark
    postManage.inputBookmark(faker.lorem.word());
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
    postManage.fillTitle(faker.lorem.word());
    //And I click  content
    postManage.contentPost();
    postManage.seeSettings();
    postManage.metadataSettingPost()
    postManage.fillNameMetadataTag(faker.lorem.word({min:70, max:80}))
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
    postManage.fillTitle(faker.lorem.word({min:5, max:10}));
    //And I click  content
    postManage.contentPost();
    postManage.seeSettings();
    postManage.metadataSettingPost()
    postManage.fillDescriptionMetadataTag(faker.lorem.word({min:156, max:160}))
    postManage.fillNameMetadataTag(faker.lorem.word({min:5, max:10}))
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
    postManage.fillTitle(faker.lorem.word({min:5, max:10}));
    //And I click  content
    postManage.contentPost();
    postManage.seeSettings();
    postManage.metadataSettingPost()
    postManage.fillDescriptionMetadataTag(faker.lorem.word({min:50, max:60}))
    postManage.fillNameMetadataTag(faker.lorem.word({min:5, max:10}))
    postManage.fillURLMetadataTag(faker.lorem.word({min:5, max:10}))
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
    postManage.fillTitle(faker.lorem.word({min:5, max:10}));
    //And I click  content
    postManage.contentPost();
    postManage.seeSettings();
    postManage.metadataSettingPost()
    postManage.fillDescriptionMetadataTag(faker.lorem.word({min:50, max:80}))
    postManage.fillNameMetadataTag(faker.lorem.word({min:5, max:10}))
    postManage.clickDescriptionMetadata();    
  });
});
