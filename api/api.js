window.onload = function(){
    fetch('api.json')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById("api").innerHTML = JSON.stringify( data, null, 4);
    }).catch(function (err) {
        console.log('error: ' + err);
    });
}
