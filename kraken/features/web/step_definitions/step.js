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
  return await this.pageSection.titlePage.setValue(this.data_pseudo_page.title);
});
When("I enter title page ap", async function () {
  return await this.pageSection.titlePage.setValue(this.data_apriori_page[this.index].title);
});
When("I enter title page fk", async function () {
  return await this.pageSection.titlePage.setValue(this.faker.lorem.word());
});
When("I enter title large page", async function () {
  return await this.pageSection.titlePage.setValue(this.data_pseudo_page.title_large);
});
When("I enter title large page ap", async function () {
  return await this.pageSection.titlePage.setValue(this.data_apriori_page[this.index].title_large);
});
When("I click on content", async function () {
  return await this.pageSection.contentPage.click();
});
When("I enter content", async function () {
  return await this.pageSection.contentPage.setValue(this.data_pseudo_page.content);
});
When("I enter content ap", async function () {
  return await this.pageSection.contentPage.setValue(this.data_apriori_page[this.index].content);
});
When("I enter content fk", async function () {
  return await this.pageSection.contentPage.setValue(this.faker.lorem.words({min:5, max:10}));
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
  return await this.pageSection.inputBookmark.setValue(this.data_pseudo_page.field_invalid);
});
When("I enter url invalid ap", async function () {
  return await this.pageSection.inputBookmark.setValue(this.data_apriori_page[this.index].field_invalid);
});
When("I enter url invalid fk", async function () {
  return await this.pageSection.inputBookmark.setValue(this.faker.lorem.word());
});
When("I enter url valid", async function () {
  return await this.pageSection.inputBookmark.setValue(this.data_pseudo_page.url);
});
When("I enter url valid ap", async function () {
  return await this.pageSection.inputBookmark.setValue(this.data_apriori_page[this.index].url);
});
When("I enter text area Excerpt", async function () {
  return await this.pageSection.textAreaExcerpt.setValue(this.data_pseudo_page.field_large);
});
When("I enter text area Excerpt ap", async function () {
  return await this.pageSection.textAreaExcerpt.setValue(this.data_apriori_page[this.index].field_large);
});
When("I enter text area Excerpt fk", async function () {
  return await this.pageSection.textAreaExcerpt.setValue(this.faker.lorem.words({min:50, max:80}));
});
When("I enter time invalid", async function () {
  return await this.pageSection.timeInput.setValue(this.data_pseudo_page.field_invalid);
});
When("I enter time invalid ap", async function () {
  return await this.pageSection.timeInput.setValue(this.data_apriori_page[this.index].field_invalid);
});
When("I enter time invalid fk", async function () {
  return await this.pageSection.timeInput.setValue(this.faker.lorem.word());
});
When("I click in form labelExcerpt", async function () {
  return await this.pageSection.labelExcerpt.click();
});
When("I enter date invalid", async function () {
  return await this.pageSection.dateInput.setValue(this.data_pseudo_page.field_invalid);
});
When("I enter date invalid ap", async function () {
  return await this.pageSection.dateInput.setValue(this.data_apriori_page[this.index].field_invalid);
});
When("I enter date invalid fk", async function () {
  return await this.pageSection.dateInput.setValue(this.faker.lorem.word());
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