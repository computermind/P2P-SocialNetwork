import {Router, Request, Response} from 'express';
const HttpStatus = require("http-status-codes");

class PublicKeyController {
    router: Router = Router();

    constructor() {
        this.router.get("/key", this.getPublicKey);
        this.router.post("/key", this.storePublicKey);
    }

    getPublicKey(request, response) {
        let value = global.AcknowledgmentRequestManager.findValueByHashedKey(request.body.key);
        response.json({value: value});
    };

    storePublicKey(request, response) {
        console.log("Store ack message request received!");
        console.log("KeyDTO: " + request.body.key + " | value: " + request.body.value);
        global.AcknowledgmentRequestManager.storeValue(request.body.key, request.body.value);
        response.status(HttpStatus.OK);
        response.send("Measurement stored!");
    }
}

export default new PublicKeyController().router;