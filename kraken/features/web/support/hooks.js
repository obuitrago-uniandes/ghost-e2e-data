const { After, Before, BeforeAll } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");
const LoginPage = require("../page_object/login.page");
const AdminPage = require("../page_object/admin.page");
const PageSection = require("../page_object/page.section")
const poolDataPage = require("../../../../mock/apriori/page.json")
const { fetch } =  require('cross-fetch');
const { faker } = require('@faker-js/faker');
Before(async function () {
  this.deviceClient = new WebClient("chrome", {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  this.pages = this.pages ? this.pages : {};

  let id  = Math.floor(Math.random() * 100);
  let apiUrl = `https://my.api.mockaroo.com/${id}.json?key=2f32fbc0`
  let res = await fetch(apiUrl);
  this.data_pseudo_page =  await res.json()
  this.data_apriori_page = poolDataPage
  this.index = Math.floor(Math.random() * 100);
  this.faker = faker;
  this.pages[`${this.userId}`] = {
    login: new LoginPage(this.driver),
    admin: new AdminPage(this.driver),
    page: new PageSection(this.driver),
  };

  this.loginPage = this.pages[`${this.userId}`].login;
  this.adminPage = this.pages[`${this.userId}`].admin;
  this.pageSection = this.pages[`${this.userId}`].page;
});

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
  this.loginPage = null;
  this.adminPage = null;
  this.pageSection = null;
});
