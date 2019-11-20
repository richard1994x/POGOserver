class API {
    static headers = {Authorization: "Bearer kao83jfhsa7"};

	static vitoria(){
		alert("work");
	}
	
    static getItems(callbackprocess){
        //let myHTTPRequest = new MyHTTPRequest('../../api/Store/requests/getItems.php', MyHTTPRequest.GET,
        let myHTTPRequest = new MyHTTPRequest('https://idrinksmanaus.com.br/api/Store/requests/getItems.php', MyHTTPRequest.GET,
            this.headers, callbackprocess);
        myHTTPRequest.call();
    }

    static insertCellphone(cellphone) {
        let json = {cellphone: cellphone};

        let myHTTPRequest = new MyHTTPRequest('../../api/Store/requests/insertCellphone.php', MyHTTPRequest.POST,
            this.headers);
        myHTTPRequest.call(JSON.stringify(json));
    }
    static confirmCode(cellphone, code, callbackprocess) {
        let json = {
            cellphone: cellphone,
            code: code
        };

        let myHTTPRequest = new MyHTTPRequest('../../api/Store/requests/confirmCode.php', MyHTTPRequest.POST,
            this.headers, callbackprocess);
        myHTTPRequest.call(JSON.stringify(json));
    }

    static getRequests(cellphoneObject){
        let json = {
            cellphone: cellphoneObject.cellphone,
            code: cellphoneObject.code
        };

        let myHTTPRequest = new MyHTTPRequest('../../api/Store/requests/getRequests.php', MyHTTPRequest.POST,
            this.headers, getItemsCallback);
        myHTTPRequest.call(JSON.stringify(json));
    }

    static insertRequest(cart, cellphoneObject, callbackprocess){
        let json = {
            items: JSON.parse(cart.getSession()),
            shippingaddress: ShippingAddressObject.get(),
            paymentmethod: PaymentMethodObject.get(),
            cellphone: cellphoneObject.cellphone,
            code: cellphoneObject.code,
        };

        let myHTTPRequest = new MyHTTPRequest('../../api/Store/requests/insertRequest.php', MyHTTPRequest.POST,
            this.headers, callbackprocess);
        myHTTPRequest.call(JSON.stringify(json));
    }

    static cancelRequest(requestid, callbackprocess){
        let cellphoneObject = CellphoneObject.get();

        let json = {
            cellphone: cellphoneObject.cellphone,
            code: cellphoneObject.code,
            requestid: requestid
        };

        let myHTTPRequest = new MyHTTPRequest('../../api/Store/requests/cancelRequest.php', MyHTTPRequest.POST,
            this.headers, callbackprocess);
        myHTTPRequest.call(JSON.stringify(json));
    }

    static testpayonline(requestid, callbackprocess){
        let cellphoneObject = CellphoneObject.get();

        let json = {
            cellphone: cellphoneObject.cellphone,
            code: cellphoneObject.code,
            requestid: requestid
        };

        let myHTTPRequest = new MyHTTPRequest('../../api/Store/requests/testpayonline.php', MyHTTPRequest.POST,
            this.headers, callbackprocess);
        myHTTPRequest.call(JSON.stringify(json));
    }

    static payonline(requestid, callbackprocess){
        let cellphoneObject = CellphoneObject.get();

        let json = {
            cellphone: cellphoneObject.cellphone,
            code: cellphoneObject.code,
            requestid: requestid
        };

        let myHTTPRequest = new MyHTTPRequest('../../api/Store/requests/payonline.php', MyHTTPRequest.POST,
            this.headers, callbackprocess);
        myHTTPRequest.call(JSON.stringify(json));
    }
}