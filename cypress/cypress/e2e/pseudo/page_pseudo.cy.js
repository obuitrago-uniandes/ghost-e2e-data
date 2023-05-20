const loginPage = require("../../page/login.page");
const adminPage = require("../../page/admin.page");
const pageManage = require("../../page/page.manage");
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

   it("Scenario Publicar pagina con titulo  y texto contenido validos", () => {
    //When I go section pages
    adminPage.clickPageBtn();
    //And Igo to Create Page
    pageManage.createButton();
    //And I click in title
    pageManage.titlePage();
    //And I clik in content
    pageManage.contentPage();
    //And I go section pages
    cy.go(-1);
    //And I select draft page
    pageManage.selectPage("(Untitled)");
    //And I enter title
    pageManage.fillTitlePage(data.title);
    //And I enter contet
    pageManage.fillContentPage(data.content);
    //And I click in publish
    pageManage.publishButton();
    //And click in publish now
    pageManage.publishNowButton();
    //And I see that the "Published" is liked in list page
    pageManage.searchPublished("Published", 1);
  });

  it("Scenario Publicar pagina con titulo largo y contenidos valido", () => {
    //When I go section pages
    adminPage.clickPageBtn();
    //And Igo to Create Page
    pageManage.createButton();
    //And I click in title
    pageManage.titlePage();
    //And I clik in content
    pageManage.contentPage();
    //And I go section pages
    cy.go(-1);
    //And I select draft page
    pageManage.selectPage("(Untitled)");
    //And I enter contet
    pageManage.fillContentPage(data.content);
    //And I enter title
    pageManage.fillTitlePage(data.title_large);
    //And I click  in publish
    pageManage.publishButton();
    //And click in publish now
    pageManage.publishNowButton();
    //And I see that the  alert title is liked in  page
    pageManage.searchAlertTitle();
     //And I click in Cancel button
    cy.wait(1000);
    cy.go(-1);
    //And I click in leave button
    pageManage.leaveButton();
  }); 
  
  
  it("Scenario Publicar pagina con titulo valido y url bookmark invalido", () => {
    //When I go section pages
    adminPage.clickPageBtn();
    //And Igo to Create Page
    pageManage.createButton();
    //And I click in title
    pageManage.titlePage();
    //And I clik in content
    pageManage.contentPage();
    //And I go section pages
    cy.go(-1);
    //And I select draft page
    pageManage.selectPage("(Untitled)");
    //And I enter title
    pageManage.fillTitlePage(data.title);
    //And I click  content
    pageManage.contentPage();
    //And click on plus button
    pageManage.plusButton();
    //And I select bookmark
    pageManage.cardBookmark();
    //And I enter Bookmark
    pageManage.inputBookmark(data.field_invalid);
    //And I clik in content
    pageManage.contentPage();
    //And I see that the  alert url is liked in  page
    pageManage.searchAlertUrl();
    //And I click in publish
    pageManage.publishButton();
    //And click in publish now
    pageManage.publishNowButton();

   
  });
 
  it("Scenario Publicar pagina con titulo valido y url bookmark valido", () => {
    //When I go section pages
    adminPage.clickPageBtn();
    //And Igo to Create Page
    pageManage.createButton();
    //And I click in title
    pageManage.titlePage();
    //And I clik in content
    pageManage.contentPage();
    //And I go section pages
    cy.go(-1);
    //And I select draft page
    pageManage.selectPage("(Untitled)");
    //And I enter title
    pageManage.fillTitlePage(data.title);
    //And I click  content
    pageManage.contentPage();
    //And click on plus button
    pageManage.plusButton();
    //And I select bookmark
    pageManage.cardBookmark();
    //And I enter Bookmark
    pageManage.inputBookmark(data.url);
    //And I click in publish
    pageManage.publishButton();
    cy.wait(3000);
    //And click in publish now
    pageManage.publishNowButton();
    //And I see that the "Published" is liked in list page
    pageManage.searchPublished("Published", 1);
    cy.wait(1000);
    cy.go(-1);
   

  }); 

  it("Scenario Publicar pagina con titulo valido y Excerpt large", () => {
    //When I go section pages
    adminPage.clickPageBtn();
    //And Igo to Create Page
    pageManage.createButton();
    //And I click in title
    pageManage.titlePage();
    //And I clik in content
    pageManage.contentPage();
    //And I go section pages
    cy.go(-1);
    //And I select draft page
    pageManage.selectPage("(Untitled)");
    //And I enter title
    pageManage.fillTitlePage(data.title);
    //And I click  content
    pageManage.contentPage();
    //And click on settings button
    pageManage.settingsButton();
    //And I enter text area Excerpt
    pageManage.textAreaExcerpt(data.field_large);
    //And I click in form settings
    pageManage.settingsForm();
    //And I see that the alert string large is liked in list page
    pageManage.searhAlertString();
    cy.wait(1000);
    cy.go(-1);
    //And I click in leave button
    pageManage.leaveButton();
  }); 

  it("Scenario Publicar pagina con titulo valido y time invalido", () => {
    //When I go section pages
    adminPage.clickPageBtn();
    //And Igo to Create Page
    pageManage.createButton();
    //And I click in title
    pageManage.titlePage();
    //And I clik in content
    pageManage.contentPage();
    //And I go section pages
    cy.go(-1);
    //And I select draft page
    pageManage.selectPage("(Untitled)");
    //And I enter title
    pageManage.fillTitlePage(data.title);
    //And I click  content
    pageManage.contentPage();
    //And click on settings button
    pageManage.settingsButton();
    //And I enter text time
    pageManage.timeInput(data.field_invalid);
    //And I click in form settings
    pageManage.settingsForm();
    //And I see that the alert time large is liked in list page
    pageManage.searhAlertTime();
    cy.wait(1000);
    cy.go(-1);
  }); 

  it("Scenario Publicar pagina con titulo valido  ", () => {
    //When I go section pages
    adminPage.clickPageBtn();
    //And Igo to Create Page
    pageManage.createButton();
    //And I click in title
    pageManage.titlePage();
    //And I clik in content
    pageManage.contentPage();
    //And I go section pages
    cy.go(-1);
    //And I select draft page
    pageManage.selectPage("(Untitled)");
    //And I enter title
    pageManage.fillTitlePage(data.title);
    //And I click  content
    pageManage.contentPage();
    //And click on settings button
    pageManage.settingsButton();
    //And I click in meta data button
    pageManage.metaButton();
    //And I click in  meta title
    pageManage.metaTitle(data.meta_title_large);
    //And I click in form settings
    cy.wait(1000);
    cy.go(-1);
  });

});
