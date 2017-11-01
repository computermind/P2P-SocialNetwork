import {Router, Request, Response} from 'express';

const HttpStatus = require("http-status-codes");

class RegistrationController {
    router: Router = Router();

    constructor() {
        this.router.get("/", this.get);
        this.router.post("/", this.post);
    }

    get(request, response) {
        console.log("Registration get received");
    };

    post(request, response){

        // we get the form data from the view
        console.log("Username received: " + request.body.username);
        console.log("Username received: " + request.body.approver);
        // generate public private key

        // find the user with provided id to acknowledge the data

        // ask him for his public key

        // sign our data with our private key - our signature

        // sign our signature + public ket with his public key

        // We send the data to him, and await response

        // He gets it he decryptsthe data with his private key.

        // So now he has our public key and our signed data.

        // Decrypts our signature with our public key

        // Confirms the data by signing it with his private key.

        // Return the confirmed data to us

        // We publish it to the network. Providing in meta-data our public key and the id of acknowledging node.

        console.log("Registration post received");
        response.send('Data from server');
    };

}

export default new RegistrationController().router;
