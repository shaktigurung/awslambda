'use strict'
const AWS = require('aws-sdk');
AWS.config.update({region: "ap-southeast-2"})
exports.handler = async (event, context ) => {
    const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    const documentClient = new AWS.DynamoDB.DocumentClient({region: "ap-southeast-2"});

    let responseBody = " ";
    let statusCode = 0;

    const {id} = event.pathParameters;
   
    const params = {
        TableName: "Users",
        Key: {
            id:  id
        }
    }

    try {
        const data = await  documentClient.get(params).promise();
        responseBody = JSON.stringify(data.Item);
        statusCode = 200;
    } catch (err) {
        responseBody = `Unable to get response data`;
        statusCode = 403;
    }   
    
    const response = {
        statusCode: statusCode,
        headers: {
            "myHeader": "test"
        },
        body: responseBody
    }

    return response;
}