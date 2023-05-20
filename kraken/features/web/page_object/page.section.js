const Page = require("./page");

class PageSection extends Page {
  constructor(driver) {
    super(driver);
  }
  
  get createButton() {
    return this.driver.$(".gh-canvas").$("a=New page");
  }
  get titlePage() {
    return this.driver.$("textarea[placeholder='Page Title']")
  }
  get contentPage() {
    return this.driver.$("div[data-kg='editor-wrapper']")
  }
  get publishButton() {
    return this.driver.$(".view-actions").$("span=Publish");
  }
  get publishButtonNow() {
    return this.driver.$(".gh-publishmenu-footer").$("span=Publish");
  }
  get pagesBackButton() {
    return this.driver.$(".gh-editor-header").$('a=Pages');
  }
  get pageUntitled(){
    return this.driver.$('h3=(Untitled)');
  }
  get pageCreated(){
    return this.driver.$(`h3=${this.setTitle()}`);
  }
  get pageEdit(){
    const name = `h3=${this.setTitle()}`
    return this.driver.$(name);
  }
  get plusButton(){
    return this.driver.$("button[aria-label='Add a card']");
  }
  get cardBookmark() {
    return this.driver.$("div=Bookmark");
  }
  get inputBookmark() {
    return this.driver.$("input[placeholder='Paste URL to add bookmark content...']");
  }
  get settingsButton(){
    return this.driver.$(".view-actions").$("button[title='Settings']");
  }
  get textAreaExcerpt() {
    return this.driver.$(".post-setting-custom-excerpt")
  }
  get textAreaExcerpt() {
    return this.driver.$(".post-setting-custom-excerpt")
  }
  get labelExcerpt() {
    return this.driver.$("label=Excerpt")
  }
  get timeInput() {
    return this.driver.$(".gh-date-time-picker-time input")
  }
  get dateInput() {
    return this.driver.$(".gh-date-time-picker-date input")
  }
  get searchAlertUrl(){
    const select = `span=No provider found for supplied URL.`
    return this.driver.$$(select);
  }
  get searhAlertString(){
    const select = `p=Excerpt cannot be longer than 300 characters.`
    return this.driver.$$(select);
  }
  get searhAlertTime(){
    const select = `div=Must be in format:`
    return this.driver.$$(select);
  }
  get pageItemEdit(){
    const select = `h3=Titulo actualizado`
    return this.driver.$$(select);
  }
  get scrollMenu(){
    return this.driver.$(".settings-menu-pane-in");
  }
  createNewPage() {
    this.createButton.click();
  }
}

module.exports = PageSection;
