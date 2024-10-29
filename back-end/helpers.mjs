import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import crypto from 'node:crypto';

const snsClient = new SNSClient({ region: 'us-east-1' });

const tableName = 'contact';

export const saveContact = async (body, dynamodb) => {
  const uuid = crypto.randomUUID();

  const saveParamaters = {
    TableName: tableName,
    Item: {
      "id": { S: crypto.randomUUID() },
      "title": { S: body.title },
      "fullname": { S: body.fullname },
      "email": { S: body.email },
      "phone": { S: body.phone },
      "message": { S: body.message }
    }
  };
  const command = new PutItemCommand(saveParamaters);
  return await dynamodb.send(command);
};

export const sendEmail = async (body) => {
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Content-Type': 'application/json'
  };

  const { title, fullname, email, phone, message } = body;

  const snsMessage = {
    Title: title,
    Name: fullname,
    Email: email,
    Phone: phone,
    Message: message
  };

  const params = {
    Message: JSON.stringify(snsMessage),
    TopicArn: 'arn:aws:sns:us-east-1:799660094977:MyEmailNotification'
  };

  try {
    const command = new PublishCommand(params);
    await snsClient.send(command);
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({
        message: 'Thanks for sending me a message!'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error sending message.'
      })
    };
  }

};