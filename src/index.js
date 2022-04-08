exports.handler = async (event) => {
    // TODO implement
    console.log(">>>> Inside lambda function...")
    if (event.httpMethod === 'GET') {
        return getTransactionCountry(event);
    }
    if (event.httpMethod === 'POST') {
        return createTransactionCountry(event);
    }
};

function getTransactionCountry(event) {
    const body = JSON.parse(event.body);
    let isCountryNK = false;
    if (body.sendingAmountDetails.country == "NK") {
        isCountryNK = true;
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(isCountryNK)
    };
    return response;
}

function createTransactionCountry(event) {
    const body = JSON.parse(event.body);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "sucessfully created",
            details: body
        })
    };
    return response;
}