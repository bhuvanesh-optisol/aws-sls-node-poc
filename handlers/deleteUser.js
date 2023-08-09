const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function deleteUser(event, context) {

    try {
        let user;
        const { id } = event.pathParameters;
        const result = await dynamodb
            .get({
                TableName: "UsersTable",
                Key: { id }
            })
            .promise();
        user = result.Item;
        if (user) {
            const updatePayload = {
                TableName: "UsersTable",
                Key: { id },
            };
            const updateResult = await dynamodb.delete(updatePayload).promise();
            return {
                statusCode: 200,
                body: JSON.stringify(updateResult),
            };
        } else {
            return {
                statusCode: 204,
                body: "No content",
            };
        }
    } catch (ex) {
        return {
            statusCode: 500,
            message: ex,
            body: ex,
        };
    }
}

export const handler = deleteUser;