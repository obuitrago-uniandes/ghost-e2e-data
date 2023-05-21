class TagMock {
    
  getData(id){
    let baseUrl = "https://my.api.mockaroo.com/123";
    let apiUrl = `${baseUrl}.json?key=5a6f2c50`
    return (async () => {
      let res = await fetch(apiUrl);
      return await res.json()
   })();
  }
}

module.exports = new TagMock();