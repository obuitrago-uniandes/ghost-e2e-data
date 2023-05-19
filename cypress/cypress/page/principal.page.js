class PrincipalPage {
  get metaTitle() {
    return cy.get("head title");
  }
  get metaDescription() {
    return cy.get("head meta[name='description']");
  }
  get siteDescription() {
    return cy.get("h2.site-description");
  }
  get siteTitle() {
    return cy.get("footer .copyright a");
  }
  get twitterTitle() {
    return cy.get("head meta[name='twitter:title']");
  }
  get twitterDescription() {
    return cy.get("head meta[name='twitter:description']");
  }
  get twitterUrl() {
    return cy.get(".site-footer-nav").contains("a", "Twitter");
  }
  get facebookTitle() {
    return cy.get("head meta[property='og:title']");
  }
  get facebookDescription() {
    return cy.get("head meta[property='og:description']");
  }
  get facebookUrl() {
    return cy.get(".site-footer-nav").contains("a", "Facebook");
  }

  getMenuItem(value) {
    return cy.get(".site-home-header .site-nav-content").contains("a", value);
  }

  visit() {
    return cy.visit("/");
  }
}

module.exports = new PrincipalPage();
