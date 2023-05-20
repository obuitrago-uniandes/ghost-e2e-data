const Page = require("./page");

class LoginPage extends Page {
  constructor(driver) {
    super(driver);
  }
  get email() {
    return this.driver.$('input[name="identification"]');
  }
  get password() {
    return this.driver.$('input[name="password"]');
  }
  get submitBtn() {
    return this.driver.$('form#login button[type="submit"]');
  }

  submit() {
    this.submitBtn.click();
  }
}

module.exports = LoginPage;
