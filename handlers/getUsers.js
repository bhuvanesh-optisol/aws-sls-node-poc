const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getUsers(event, context) {

  try {
    let users;
    const result = await dynamodb
      .scan({
        TableName: "UsersTable"
      })
      .promise();
    users = result.Items;
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (ex) {
    return {
      statusCode: 500,
      body: JSON.stringify(ex),
    };
  }
}

export const handler = getUsers;