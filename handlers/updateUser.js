const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function updateUser(event, context) {

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
            const { firstName, lastName } = JSON.parse(event.body);
            const updatePayload = {
                TableName: "UsersTable",
                Key: { id },
                UpdateExpression: 'set #firstName = :firstName, #lastName = :lastName',
                ExpressionAttributeValues: {
                    ':firstName': firstName,
                    ':lastName': lastName,
                },
                ExpressionAttributeNames: {
                    '#firstName': 'firstName',
                    '#lastName': 'lastName'
                },
                ReturnValues: 'ALL_NEW',
            };
            const updateResult = await dynamodb.update(updatePayload).promise();
            return {
                statusCode: 200,
                body: JSON.stringify(updateResult),
            };
        } else {
            return {
                statusCode: 204,
                message: "No content",
                body: "No content",
            };
        }
    } catch (ex) {
        return {
            statusCode: 500,
            body: JSON.stringify(ex),
        };
    }
}

export const handler = updateUser;