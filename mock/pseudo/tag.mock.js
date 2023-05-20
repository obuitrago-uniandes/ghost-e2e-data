class TagMock {
    //https://my.api.mockaroo.com/tag.json?key=5a6f2c50
  getData(id, key){
    let baseUrl = "https://my.api.mockaroo.com/";
    let apiUrl = `${baseUrl}${id}.json?key=${key}`
    //let apiUrl = "https://my.api.mockaroo.com/tag.json?key=5a6f2c50"
    return (async () => {
      let res = await fetch(apiUrl);
      return await res.json()
   })();
  }
}

module.exports = new TagMock();