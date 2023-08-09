const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function register(event, context) {

  try {
    const { firstName, lastName, email, phone } = JSON.parse(event.body);
    const id = v4();
    const now = new Date();
    const payload = {
      id,
      firstName,
      lastName,
      email,
      phone,
      date: now.toISOString(),
    };
    const result = await dynamodb
    .put({
      TableName: "UsersTable",
      Item: payload,
    })
    .promise();
  
    return {
      statusCode: 201,
      body: JSON.stringify(result),
    };
  } catch (ex) {
    return {
      statusCode: 500,
      body: JSON.stringify(ex),
    };
  }
}

export const handler = register;