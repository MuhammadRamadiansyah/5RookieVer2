axios({
    method:'get',
    url:'',
    responseType:'stream'
  })
    .then(function(response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });


function shareTweet() {
    $.ajax({
        method: "POST",
        url : "http://localhost:3000/api/share-twitter",
        data: {
          "team": document.getElementById("teamName").value
        }
    })
    .done(function(dataShare) {
      console.log(dataShare)
        $("#tweet").append(`<li>${dataShare.data.text}</li><br>`)
    })
}