class PostManage {
    
    createNewButton() {
        return cy.get(".gh-canvas").contains("New post").click();
    }

    clickP() {
        return cy.get(".gh-viewport  ").click();
    }


    titlePost() {
        return  cy.get(`textarea[placeholder="Post Title"]`).click({ force: true });
    }

    contentPost(){
        return cy.get("div[data-kg='editor']").click({ force: true });
    }
    clickPost() {
        return cy.get(".f8>a").contains("Posts").click();
    }

    backPost() {
        cy.go('back');
    }    
    
    validateInList(value){
        return cy.get('h3').parent(cy.get(".content-list")).contains(value)

    }

    fillTitle(value){
        const field =  cy.get(`textarea[placeholder="Post Title"]`);
        field.clear().type(value, { force: true });
        return this;
    }
    fillContent(value){
        const field =  cy.get(`div[data-kg='editor']`);
        field.type(value);
        return this;
    }
    searchAlertTitle(){
        return cy.get('.gh-alert-content')
            .contains('Saving failed: Title cannot be longer than 255 characters.')
            .should(($p) => {
                expect($p).to.have.length(1);
        })
    }
    seeSettings(){
        return cy.get(".post-settings").click({ force: true });
    }

    timeInput(value){
        return cy.get(".gh-date-time-picker-time input").type(value);
    }

    btnPublish(){
        return cy.get(".view-actions").contains("Publish").click({ force: true });
    }

    backDarfPost(){
        return cy.get(".gh-nav-body").contains("Drafts").click();
    }
    backPublishPost(){
        return cy.get('a[title="Published"]').click({ force: true });
    }

    btnConfirmPublish(){
        return cy.get(".gh-publishmenu-footer").contains("Publish").click({ force: true });
    }

    editPost(value){
        return cy.get(".content-list").contains(value).click({ force: true });
    }

    selectFirst(){        
        return  cy.get('.posts-list>li>a').eq(1).click({ force: true })
    }
    settingsForm(){
        return cy.get(".settings-menu-content").click({ force: true });
    }
    deletePost(){        
        return  cy.get('.settings-menu-container').contains("Delete").click({ force: true })
    }
    metadataSettingPost(){        
        return  cy.get('.settings-menu-container').contains("Meta data").click({ force: true })
    }
    confirmDeletePost(){        
        return  cy.get('.modal-footer').contains("Delete").click({ force: true })
    }

    validarVacioTitulo(){        
        return  cy.get(`textarea[placeholder="Post Title"]`).contains("(Untitled)")
    }
    
    searhAlertTime(){
        return cy.get('form')
            .contains('Must be in format: "15:00"')
            .should(($p) => {
                expect($p).to.have.length(1);
        })
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
    searchAlertUrl(){
        return cy.get('.koenig-editor__editor')
            .contains('No provider found for supplied URL.')
            .should(($p) => {
                expect($p).to.have.length(1);
        })
    }

    fillNameMetadataTag(value){
        const field =  cy.get('#meta-title');
        field.clear({ force: true }).type(value, { force: true });
        return this;
    }
    fillDescriptionMetadataTag(value){
        const field =  cy.get('#meta-description');
        field.clear({ force: true }).type(value, { force: true });
        return this;
    }
    fillURLMetadataTag(value){
        const field =  cy.get('[name="post-setting-canonicalUrl"]');
        field.clear({ force: true }).type(value, { force: true });
        return this;
    }

    clickDescriptionMetadata(){
        return cy.get("#meta-description").click({ force: true });
    }
    clickNameMetadata(){
        return cy.get("#meta-title").click({ force: true });
    }
    lenghtErrorNameMeta(){       
        return cy.get('#meta-title').should('not.have.length', 70)
    }
    lenghtErrorDescriptionMeta(){       
        return cy.get('#meta-description').should('not.have.length', 156)
    }
    lenghtErrorURLMeta(){       
        return cy.get('[name="post-setting-canonicalUrl"]').parent().should('contain', 'Please enter a valid URL')
    }


  }
  
  module.exports = new PostManage();
  