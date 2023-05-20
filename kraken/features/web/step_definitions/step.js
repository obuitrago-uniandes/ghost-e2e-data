const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;


let data;


When("I enter email {kraken-string}", async function (email) {
  return await this.loginPage.email.setValue(email);
});
When("I enter password {kraken-string}", async function (password) {
  return await this.loginPage.password.setValue(password);
});

When("I Sign In", async function () {
  return await this.loginPage.submit();
});



/* CREACIÓN EDICIÓN PAGINAS */
When("I go to section pages", async function () {
  return await this.adminPage.pageButton.click();
});

When("I go to Create Page", async function () {
  return await this.pageSection.createNewPage();
});

When("I enter title page", async function () {
  return await this.pageSection.titlePage.setValue(this.data.title);
});
When("I enter title large page", async function () {
  return await this.pageSection.titlePage.setValue(this.data.title_large);
});
When("I click on content", async function () {
  return await this.pageSection.contentPage.click();
});
When("I enter content", async function () {
  return await this.pageSection.contentPage.setValue(this.data.content);
});
When("I click on publish", async function () {
  return await this.pageSection.publishButton.click();
});

When("I click on publish now", async function () {
  return await this.pageSection.publishButtonNow.click();
});
When("I go to back page list", async function () {
  return await this.pageSection.pagesBackButton.click();
});

When("I click on plus button", async function () {
  return await this.pageSection.plusButton.click();
});
When("I select bookmark option", async function () {
  return await this.pageSection.cardBookmark.click();
});
When("I enter url invalid", async function () {
  return await this.pageSection.inputBookmark.setValue(this.data.field_invalid);
});
When("I enter url valid", async function () {
  return await this.pageSection.inputBookmark.setValue(this.data.url);
});
When("I enter text area Excerpt", async function () {
  return await this.pageSection.textAreaExcerpt.setValue(this.data.field_large);
});
When("I enter time invalid", async function () {
  return await this.pageSection.timeInput.setValue(this.data.field_invalid);
});
When("I click in form labelExcerpt", async function () {
  return await this.pageSection.labelExcerpt.click();
});
When("I enter date invalid", async function () {
  return await this.pageSection.dateInput.setValue(this.data.field_invalid);
});
Then('I see that the  alert url is liked in  page', async function () {
  let elements = await this.pageSection.searchAlertUrl
  expect(elements.length).to.equal(1);
});
Then('I see that the alert string large is liked in list page', async function () {
  let elements = await this.pageSection.searhAlertString
  expect(elements.length).to.equal(1);
});
Then('I see that the alert time is invalid is liked in list page', async function () {
  let elements = await this.pageSection.searhAlertTime
  expect(elements.length).to.equal(1);
});
When("I click on settings", async function () {
  return await this.pageSection.settingsButton.click();
});