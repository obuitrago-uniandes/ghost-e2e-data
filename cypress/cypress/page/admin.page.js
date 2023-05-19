class AdminPage {
  clickGeneralBtn() {
    cy.contains("a", "General").click({ force: true });
    return this;
  }
  clickDesignBtn() {
    cy.contains("a", "Design").click({ force: true });
    return this;
  }
  clickPageBtn() {
    cy.get(".gh-nav-manage>li>a").eq(2).click({ force: true });
    return this;
  }
  clickTagBtn() {
    cy.get('.gh-nav-manage>li>a').eq(3).click({ force: true })
    return this;
  }
  clickPostBtn() {
    cy.get(".gh-nav-list-h").parent().contains("Posts").click();
    return this;
  }
}

module.exports = new AdminPage();
