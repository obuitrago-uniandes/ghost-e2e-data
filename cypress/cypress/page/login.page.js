class LoginPage {
  fillEmail(value) {
    const field = cy.get(`input[name="identification"]`);
    field.clear();
    field.type(value, { delay: 1 });

    return this;
  }

  fillPassword(value) {
    const field = cy.get(`input[name="password"]`);
    field.clear();
    field.type(value, { delay: 1 });

    return this;
  }

  submit() {
    const button = cy.get(`form#login button[type="submit"]`);
    button.click();
  }
}

module.exports = new LoginPage();
