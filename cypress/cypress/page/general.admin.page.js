class GeneralAdminPage {
  get config() {
    return {
      title: {
        name: "Título",
        maxRange: [149, 151],
        max: 150,
        input: () => this.titleInput,
        error: () => this.titleError,
        expand: () => this.expandTitleAndDescriptionBtn,
        expectedError: "Title is too long",
      },
      description: {
        name: "Descripción",
        maxRange: [199, 201],
        max: 200,
        input: () => this.descriptionInput,
        error: () => this.descriptionError,
        expand: () => this.expandTitleAndDescriptionBtn,
        expectedError: "Description is too long",
      },
      metaTitle: {
        name: "Meta Título",
        maxRange: [299, 301],
        max: 300,
        input: () => this.metaTitleInput,
        error: () => this.bannerError,
        expand: () => this.expandMetaDataBtn,
        expectedError: "The request failed validation",
      },
      metaDescription: {
        name: "Meta Descripción",
        maxRange: [499, 501],
        max: 500,
        input: () => this.metaDescriptionInput,
        error: () => this.bannerError,
        expand: () => this.expandMetaDataBtn,
        expectedError: "The request failed validation",
      },
      twitterTitle: {
        name: "Título Twitter",
        maxRange: [299, 301],
        max: 300,
        input: () => this.twitterTitleInput,
        error: () => this.bannerError,
        expand: () => this.expandTwitterCardBtn,
        expectedError: "The request failed validation",
      },
      twitterDescription: {
        name: "Descripción Twitter",
        maxRange: [299, 301],
        max: 300,
        input: () => this.twitterDescriptionInput,
        error: () => this.bannerError,
        expand: () => this.expandTwitterCardBtn,
        expectedError: "The request failed validation",
      },
      facebookTitle: {
        name: "Título Facebook",
        maxRange: [299, 301],
        max: 300,
        input: () => this.ogTitleInput,
        error: () => this.bannerError,
        expand: () => this.expandFacebookCardBtn,
        expectedError: "The request failed validation",
      },
      facebookDescription: {
        name: "Descripción Facebook",
        maxRange: [299, 301],
        max: 300,
        input: () => this.ogDescriptionInput,
        error: () => this.bannerError,
        expand: () => this.expandFacebookCardBtn,
        expectedError: "The request failed validation",
      },
      facebookUrl: {
        name: "Url Facebook",
        maxRange: [2056, 2058],
        max: 2057,
        input: () => this.facebookUrlInput,
        error: () => this.facebookUrlError,
        expand: () => this.expandSocialAccountsBtn,
        expectedError:
          "The URL must be in a format like https://www.facebook.com/yourPage",
      },
      TwitterUrl: {
        name: "Url Twitter",
        maxRange: [14, 16],
        max: 15,
        input: () => this.twitterUrlInput,
        error: () => this.twitterUrlError,
        expand: () => this.expandSocialAccountsBtn,
        expectedError: "Your Username is not a valid Twitter Username",
      },
    };
  }

  get saveSettingsBtn() {
    return cy
      .contains(".gh-canvas-title", "General settings")
      .parent()
      .find("button");
  }

  get expandTitleAndDescriptionBtn() {
    return cy
      .contains(".gh-setting-title", "Title & description")
      .parent()
      .parent()
      .find("button");
  }

  get expandMetaDataBtn() {
    return cy
      .contains(".gh-setting-title", "Meta data")
      .parent()
      .parent()
      .find("button");
  }

  get expandTwitterCardBtn() {
    return cy
      .contains(".gh-setting-title", "Twitter card")
      .parent()
      .parent()
      .find("button");
  }

  get expandFacebookCardBtn() {
    return cy
      .contains(".gh-setting-title", "Facebook card")
      .parent()
      .parent()
      .find("button");
  }

  get expandSocialAccountsBtn() {
    return cy
      .contains(".gh-setting-title", "Social accounts")
      .parent()
      .parent()
      .find("button");
  }

  get metaTitleInput() {
    return cy.get("#metaTitle");
  }

  get metaDescriptionInput() {
    return cy.get("#metaDescription");
  }

  get ogTitleInput() {
    return cy.get("#ogTitle");
  }

  get ogDescriptionInput() {
    return cy.get("#ogDescription");
  }

  get twitterTitleInput() {
    return cy.get("#twitterTitle");
  }

  get twitterDescriptionInput() {
    return cy.get("#twitterDescription");
  }

  get facebookUrlInput() {
    return cy
      .contains(".gh-setting-title", "Social accounts")
      .parent()
      .contains("p", "URL of your publication's Facebook Page")
      .parent()
      .find("input");
  }

  get facebookUrlError() {
    return cy
      .contains(".gh-setting-title", "Social accounts")
      .parent()
      .contains("p", "URL of your publication's Facebook Page")
      .parent()
      .find("p.response");
  }

  get twitterUrlInput() {
    return cy
      .contains(".gh-setting-title", "Social accounts")
      .parent()
      .contains("p", "URL of your publication's Twitter profile")
      .parent()
      .find("input");
  }

  get twitterUrlError() {
    return cy
      .contains(".gh-setting-title", "Social accounts")
      .parent()
      .contains("p", "URL of your publication's Twitter profile")
      .parent()
      .find("p.response");
  }

  get bannerError() {
    return cy.get(".gh-alert.gh-alert-red.ember-view .gh-alert-content");
  }

  get titleInput() {
    return cy
      .contains(".gh-setting-title", "Title & description")
      .parent()
      .contains("p", "The name of your site")
      .parent()
      .find("input");
  }

  get titleError() {
    return cy
      .contains(".gh-setting-title", "Title & description")
      .parent()
      .contains("p", "The name of your site")
      .parent()
      .find("p.response");
  }

  get descriptionInput() {
    return cy
      .contains(".gh-setting-title", "Title & description")
      .parent()
      .contains("p", "Used in your theme, meta data and search results")
      .parent()
      .find("input");
  }

  get descriptionError() {
    return cy
      .contains(".gh-setting-title", "Title & description")
      .parent()
      .contains("p", "Used in your theme, meta data and search results")
      .parent()
      .find("p.response");
  }

  expandAllAccordions() {
    this.expandTitleAndDescriptionBtn
      .click({ force: true })
      .should("include.text", "Close");
    this.expandMetaDataBtn
      .click({ force: true })
      .should("include.text", "Close");
    this.expandTwitterCardBtn
      .click({ force: true })
      .should("include.text", "Close");
    this.expandFacebookCardBtn
      .click({ force: true })
      .should("include.text", "Close");
    this.expandSocialAccountsBtn
      .click({ force: true })
      .should("include.text", "Close");
  }

  clickExpandTitleAndDescriptionBtn() {
    this.expandTitleAndDescriptionBtn.click({ force: true });
    return this;
  }

  clickexpandMetaDataBtn() {
    this.expandMetaDataBtn.click({ force: true });
    return this;
  }

  clickSaveSettingsWithError() {
    this.saveSettingsBtn.click({ force: true });
    return this;
  }

  clickSaveSettings() {
    this.saveSettingsBtn.click({ force: true }).should("include.text", "Saved");
    return this;
  }

  fill(field, value) {
    field
      .clear({ force: true })
      .type(value, { force: true, parseSpecialCharSequences: false, delay: 1 });
  }

  fillTitle(value) {
    this.titleInput.clear({ force: true }).type(value, { force: true, delay: 1  });
    return this;
  }

  fillDescription(value) {
    this.descriptionInput.clear({ force: true }).type(value, { force: true, delay: 1  });
    return this;
  }
}

module.exports = new GeneralAdminPage();
