class TagManage {
    
    createNewButton() {
        return cy.get(".gh-canvas").contains("New tag").click({ force: true });
    }

    saveTag() {
        return cy.get(".gh-canvas").contains("Save").click();
    }
    
    clickSaveTag() {
        return cy.get(".view-actions").contains("Save").click({ force: true });
    }
    
    clicExpandMetadata(){
        return cy.contains(".gh-btn", "Expand" ).click({ force: true });
    }

    validateError() {
        return cy.get('p').parent('span.error').should('contain', 'You must specify a name for the tag.')

    }

    fillSlugTag(value){
        const field =  cy.get('#tag-slug');
        field.clear({ force: true }).type(value, { force: true });

        return this;
    }

    fillDescripcionTag(value){
        const field =  cy.get('#tag-description').type(value, { force: true });
    
        return this;
    }

    maxCharacterError(){       
        return cy.get('#tag-description').should('not.have.length', 500)
    }
    maxCharacterNameError(){       
        return cy.get('#tag-name').parent().should('contain', 'Tag names cannot be longer than 191 characters.')
    }

    fillNameTag(value){
        const field =  cy.get('#tag-name');
        field.clear({ force: true }).type(value, { force: true });
        return this;
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

    clickDescriptionMetadata(){
        return cy.get("#meta-description").click({ force: true });
    }
    clickNameMetadata(){
        return cy.get("#meta-title").click({ force: true });
    }
    
    fillColorTag(value){
        const field =  cy.get('[placeholder="abcdef"]');
        field.clear({ force: true }).type(value, { force: true });
        return this;
    }
        
    formatColorError(){       
        return cy.get('#tag-name').parent().should('contain', 'The color should be in valid hex format')
    }
    lenghtErrorNameMeta(){       
        return cy.get('#meta-title').should('not.have.length', 70)
    }
    lenghtErrorDescriptionMeta(){       
        return cy.get('#meta-description').should('not.have.length', 156)
    }
    maxCharacterNameError(){       
        return cy.get('#tag-name').should('not.have.length.above', 191)
    }
    deleteCharaters(value){
        return  cy.get('#tag-slug').should('have.value',value)
    }

    validateSlug(value){
        return  cy.get('p').contains(value)
    }
    openTag(value){
        return  cy.get('.content-list').contains(value).click();
    }
    irTag(){
        return  cy.get('.gh-nav-top').contains('Tags').click();
    }

  }
  
  module.exports = new TagManage();
  