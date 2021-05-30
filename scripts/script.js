function APICall() {

    //API URI Path
    let _Path = document.getElementById('input_API_Path').value;

    //API Call type
    let _Type = document.getElementById('select_API_Type').value;
    
    //JSON or body of API call
    let _JSON = document.getElementById('input_Request').value;
    /*let _JSON = JSON.stringify({
        id: 1,
        title: 'foo',
        body: '....',
        userId: 1
    });*/
    
    //Header for API call
    let _Headers = {
        'Content-type': 'application/json; charset=UTF-8',
    };

    //Get appropriate type of call and call the API
    switch (_Type) {

        case "GET":
            fetch(_Path)
                .then(response => response.json())
                .then(data => ProcessResponse(data))
                .catch(error => ProcessResponse(error));
            break;

        case "POST":
            fetch(_Path, {
                    method: _Type,
                    body: _JSON,
                    headers: _Headers,
                })
                .then(response => response.json())
                .then(data => ProcessResponse(data))
                .catch(error => ProcessResponse(error));
            break;

        case "PUT":
            fetch(_Path, {
                    method: _Type,
                    body: _JSON,
                    headers: _Headers,
                })
                .then(response => response.json())
                .then(data => ProcessResponse(data))
                .catch(error => ProcessResponse(error));
            break;

        case "PATCH":
            fetch(_Path, {
                    method: _Type,
                    body: _JSON,
                    headers: _Headers,
                })
                .then(response => response.json())
                .then(data => ProcessResponse(data))
                .catch(error => ProcessResponse(error));
            break;

        case "DELETE":
            fetch(_Path, {
                    method: _Type,
                })
                .then(response => response.json())
                .then(data => ProcessResponse(data))
                .catch(error => ProcessResponse(error));
            break;

    }
}

//Process the Response from the API call
function ProcessResponse(_Response) {

    document.getElementById("input_Response").value = JSON.stringify(_Response, null, 4);

}