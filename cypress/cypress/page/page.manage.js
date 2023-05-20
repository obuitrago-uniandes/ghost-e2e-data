class PageManage {
    createButton() {
        return cy.get(".gh-canvas").contains("New page").click({ force: true });
    }
    titlePage() {
        return  cy.get(`textarea[placeholder="Page Title"]`).click({ force: true });
    }
    contentPage(){
        return cy.get("div[data-kg='editor-wrapper']").click({ force: true });
    }
    selectPage(value){
        return cy.contains("a[title='Edit this page']", value ).click({ force: true });
    }
    fillTitlePage(value){
        const field =  cy.get(`textarea[placeholder="Page Title"]`);
        field.clear();
        field.type(value);
    
        return this;
    }
    fillContentPage(value){
        const field =  cy.get(`div[data-kg='editor-wrapper']`);
        field.type(value);
        return this;
    }

    plusButton(){
        return cy.get("button[aria-label='Add a card']").click({ force: true });
    }
    cardBookmark() {
        return cy.contains("Bookmark").click({ force: true });
    }
    inputBookmark(value) {
        return cy.get("input[placeholder='Paste URL to add bookmark content...']").type(value);
    }
    publishButton() {
        return cy.get(".view-actions").contains("Publish").click({ force: true });
    }
    publishNowButton(){
        return cy.get(".gh-publishmenu-footer").contains("Publish").click({ force: true });
    }
    cancelButton(){
        return cy.get(".gh-publishmenu-footer").contains("Cancel").click({ force: true });
    }
    leaveButton(){
        return cy.get(".modal-footer").contains("Leave").click({ force: true });
    }
    settingsButton(){
        return cy.get(".post-settings").click({ force: true });
    }
    inputPageUrl(value){
        return cy.get(".post-setting-slug").type(value);
    }
    textAreaExcerpt(value){
        return cy.get(".post-setting-custom-excerpt").type(value);
    }
    timeInput(value){
        return cy.get(".gh-date-time-picker-time input").type(value);
    }
    settingsForm(){
        return cy.get(".settings-menu-content").click({ force: true });
    }
    metaButton(){
        return cy.get(".nav-list-block").contains("Meta data").click({ force: true });
    }
    metaTitle(value){
        return cy.get("#meta-title").type(value);
    }
    searchPublished(value,number){
        return cy.get('.gh-editor-header')
            .contains(value)
            .should(($p) => {
                expect($p).to.have.length(number);
        })
    }
    searchAlertTitle(){
        return cy.get('.gh-alert-content')
            .contains('Saving failed: Title cannot be longer than 255 characters.')
            .should(($p) => {
                expect($p).to.have.length(1);
        })
    }
    searchAlertUrl(){
        return cy.get('.koenig-editor__editor')
            .contains('No provider found for supplied URL.')
            .should(($p) => {
                expect($p).to.have.length(1);
        })
    }
    searhAlertString(){
        return cy.get('.error')
            .contains('Excerpt cannot be longer than 300 characters.')
            .should(($p) => {
                expect($p).to.have.length(1);
        })
    }
    searhAlertTime(){
        return cy.get('form')
            .contains('Must be in format: "15:00"')
            .should(($p) => {
                expect($p).to.have.length(1);
        })
    }
    searchItemPage(value,number){
        return cy.get('.gh-list')
            .contains(value)
            .should(($p) => {
                expect($p).to.have.length(number);
        })
    }
    iframeHtml(){
        return '<iframe width="560" height="315" src="https://www.youtube.com/embed/7X8II6J-6mU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }

  }
  
  module.exports = new PageManage();
  