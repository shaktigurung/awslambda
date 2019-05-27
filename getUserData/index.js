'use strict'
const AWS = require('aws-sdk');
AWS.config.update({region: "ap-southeast-2"})
exports.handler = async (event, context ) => {
    const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    const documentClient = new AWS.DynamoDB.DocumentClient({region: "ap-southeast-2"})
   
    const params = {
        TableName: "Users",
        Key: {
            id:  "12345"
        }
    }

    try {
        const data = await  documentClient.get(params).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
    }       
}