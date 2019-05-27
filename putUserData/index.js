'use strict'
const AWS = require('aws-sdk');
AWS.config.update({region: "ap-southeast-2"})
exports.handler = async (event, context ) => {
    const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    const documentClient = new AWS.DynamoDB.DocumentClient({region: "ap-southeast-2"})
   
    const params = {
        TableName: "Users",
        Item: {
            id:  "12345",
            firstname: "John",
            lastname: "Doe"
        }
    }

    try {
        const data = await  documentClient.put(params).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
    }       
}