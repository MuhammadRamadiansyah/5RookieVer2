axios({
    method:'get',
    url:'',
    responseType:'stream'
  })
    .then(function(response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });