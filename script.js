
function myFunction(){

var email = document.querySelector("#email").value;
//console.log(email);

  if(!email || email === "")
  {
    alert("no value supplied");
    return;
  }
  var queryURL = "http://localhost:4001/"+email;


  fetch(queryURL)
    .then(function(response){
      return response.json();
    })
    .then(function (result){
      displayEmailResult(result);
    })
    .catch(function(error){
       //alert(queryURL);
      //displayEmailResult(result);
    });

}
function displayEmailResult(result){

    var msgdiv = document.querySelector("#message");
    var rsdiv = document.querySelector("#result");

    if(result.message == "Your email is secure"){
      rsdiv.innerHTML = "";
      msgdiv.innerHTML = `<div class="alert-success alert-dismissible">
                        <button type="button" class="close"data-dismiss="alert" aria-label="close"><spam aria-hidden="true">&time;</spam></button>\
                        <strong> Good News...!</strong> sjsxsxhsxjsjxs  xjn j
                        </div>
                        `;
  }
  else 
  {
  msgdiv.innerHTML = `<div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="close"><spam aria-hidden="true">&times;</spam></button>\
                        <strong>Hacked...!</strong>
                        </div>`;
  rsdiv.innerHTML = "";
  //counter
        var i=0;
        //loop through all the objects in result
        result.forEach(function(currentResult) {
            var hackedHTMLDiv = $(`
            <div class="jumbotron">
                <div class="row">
                    <div class="col-xs-12 col-sm-4">
                        <h5>${currentResult.Title}: <small><a target="_blank" href="${currentResult.Domain}">website</a></small></h5>
                        <h5>Breach Date: <small>${currentResult.BreachDate}</small></h5>
                        <h5>Added: <small>${currentResult.AddedDate}</small></h5>
                        <h5>Modified: <small>${currentResult.ModifiedDate}</small></h5>
                    </div>
                    <div class="col-xs-12 col-sm-8">
                        <h5>${currentResult.Name}</h5>
                        <p>${currentResult.Description}</p>
                    </div>
                    <div class="col-xs-12" id="data_id_${i}">
                        <h5>Compromised data</h5>
                        <div class="dataclasses"></div>
                    </div>
                </div>
            </div>
            `);

            currentResult.DataClasses.forEach(function(currentDataClass){
                hackedHTMLDiv.find("#data_id_"+i+" .dataclasses").append(`<span class="label label-danger danger-label">${currentDataClass}</span>`);
            });

            $('#result').append(hackedHTMLDiv);

            i++;
        });
  }
}