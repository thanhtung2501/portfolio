import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
//import AWS from "aws-sdk";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { saveContact, sendEmail } from './helpers.mjs';

const s3 = new S3Client();

export const handler = async (event) => {
  const dynamodb = new DynamoDBClient();
  console.log("event", event);

  const resource = event.resource;
  const httpMethod = event.httpMethod;

  if (resource === '/contacts') {
    if (httpMethod === 'POST') {
      const body = JSON.parse(event.body);
      if (body === null || body.fullname === null || body.email === null || body.message === null) {
        return buildResponse(400, 'Please input your name, email and message.');
      }
      // save to Contact table in DynamoDB
      await saveContact(body, dynamodb);
      const response = await sendEmail(body);

      return response;

    }
  } else if (resource === '/download') {
    if (httpMethod === 'GET') {
      const params = {
        Bucket: 'tungle-portfolio',
        Key: 'resume/Tung Le_resume.docx', // File path in S3
        //Expires: 60 // URL expiry in seconds
      };

      const command = new GetObjectCommand(params);
      const url = await getSignedUrl(s3, command, { expiresIn: 60 }); // URL expiry in seconds

      //const url = s3.getSignedUrl('getObject', params);
      return buildResponse(200, url);

    }
  }
};

function buildResponse(statusCode, body) {
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,OPTIONS'
  };

  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
    },
    body: JSON.stringify(body)
  }
}
