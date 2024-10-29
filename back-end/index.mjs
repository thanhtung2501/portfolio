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
      //await saveContact(body, dynamodb);
      const response = await sendEmail(body);

      return response;
      // return buildResponse(201, response);

    }
  }
};

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
}
