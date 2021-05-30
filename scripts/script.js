function APICall() {

    let _Path = document.getElementById('input_API_Path').value;

    fetch(_Path)
        .then(response => response.json())
        .then(data => ProcessResponse(data))
        .catch(error => console.log("GET error", error));

        
}


function ProcessResponse(_Response) {

    document.getElementById("input_Response").value = JSON.stringify(_Response, null, 4);

}