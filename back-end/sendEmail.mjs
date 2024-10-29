import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const snsClient = new SNSClient({ region: 'us-east-1' });

export const handler = async (event) => {
  const response = { statusCode: 200 };
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,OPTIONS'
  };

  const { name, email, phone, subject, message } = JSON.parse(event.body);

  const snsMessage = {
    Name: name,
    Email: email,
    Phone: phone,
    Subject: subject,
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