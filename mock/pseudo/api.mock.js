class ApiMock {
    
  getData(id, key){
    let baseUrl = "https://my.api.mockaroo.com/";
    let apiUrl = `${baseUrl}${id}.json?key=${key}`
    return (async () => {
      let res = await fetch(apiUrl);
      return await res.json()
   })();
  }
}

module.exports = new ApiMock();